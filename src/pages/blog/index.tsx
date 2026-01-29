import {
    BlogConstructorProvider,
    BlogPage,
    GetPostsRequest,
    Locale,
    PostsProps,
    Service,
    Tag,
    Theme,
} from '@gravity-ui/blog-constructor';
import type {PageContent} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {type BlogPostListItem, ServerApi} from '../../api';
import {Layout} from '../../components/Layout/Layout';
import {useIsMobile} from '../../hooks/useIsMobile';
import {block} from '../../utils';
import {localeMap} from '../../utils/blog-constants';
import {getI18nProps} from '../../utils/i18next';

import './index.scss';

const b = block('blog-page');

interface BlogIndexProps {
    postsData: PostsProps;
    tags: Tag[];
    services: Service[];
    pageContent: PageContent;
    hostname: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const locale = ctx.locale || 'en';

    try {
        const [postsResponse, tags, i18nProps] = await Promise.all([
            ServerApi.instance.getBlogPosts(locale),
            ServerApi.instance.getBlogTags(locale),
            getI18nProps(ctx, ['blog']),
        ]);

        const {page, ...postsData} = postsResponse;

        const hostname = ctx.req.headers.host || '';

        return {
            props: {
                postsData,
                tags,
                pageContent: page.content,
                hostname,
                ...i18nProps,
            },
        };
    } catch {
        // Error is logged on server side
        return {
            notFound: true,
        };
    }
};

export default function BlogIndex({postsData, tags, pageContent, hostname}: BlogIndexProps) {
    const {t} = useTranslation('blog');
    const router = useRouter();
    const isMobile = useIsMobile();
    const locale = router.locale || 'en';
    const localeValue = localeMap[locale] || localeMap['en'];

    const [posts, setPosts] = useState<PostsProps>(postsData);

    // Store all posts for local filtering
    // This ref holds the complete list of posts loaded from mocks
    const allPostsRef = useRef<BlogPostListItem[]>(
        postsData.posts as unknown as BlogPostListItem[],
    );

    // Store the first post URL from initial data to maintain stable key
    // This prevents BlogPage from resetting when search returns no results
    const initialFirstPostUrlRef = useRef<string | null>(
        postsData.posts.length > 0 ? (postsData.posts[0] as any)?.url || null : null,
    );

    // Create a stable key that doesn't change when search returns empty results
    // This prevents BlogPage from resetting and clearing the search input
    const postsKey = useMemo(() => initialFirstPostUrlRef.current || locale, [locale]);

    // Load all posts from mocks for local filtering
    // This effect runs when locale changes to ensure we have all posts for the current locale
    // It also runs on initial mount to load posts for the current locale
    useEffect(() => {
        const loadAllPosts = async () => {
            try {
                const currentLocale = router.locale || 'en';
                const response = await ServerApi.instance.getBlogPosts(currentLocale);
                allPostsRef.current = response.posts;

                // Update the stable key reference when locale changes
                // This ensures the key remains stable even when search returns no results
                if (response.posts.length > 0) {
                    initialFirstPostUrlRef.current = (response.posts[0] as any)?.url || null;
                } else {
                    initialFirstPostUrlRef.current = null;
                }

                // Update displayed posts when locale changes
                // This ensures the UI shows posts for the current locale immediately
                if (response.posts.length > 0) {
                    const initialPostsResponse: PostsProps = {
                        posts: response.posts.slice(
                            0,
                            postsData.count || 10,
                        ) as unknown as PostsProps['posts'],
                        count: Math.min(postsData.count || 10, response.posts.length),
                        totalCount: response.posts.length,
                        pinnedPost: response.pinnedPost as unknown as PostsProps['pinnedPost'],
                    };
                    setPosts(initialPostsResponse);
                }
            } catch (err) {
                console.error('Failed to load posts for local search:', err);
                // Fallback to initial posts data if loading fails
                allPostsRef.current = postsData.posts as unknown as BlogPostListItem[];
            }
        };

        loadAllPosts();
    }, [router.locale, postsData.count]);

    // TODO delete after conneting to real API
    // Local filtering function
    // Filters posts based on search query, tags, and services
    const filterPostsLocally = useCallback(
        (
            posts: BlogPostListItem[],
            searchQuery?: string,
            tagSlugs?: string[],
            serviceSlugs?: string[],
        ): BlogPostListItem[] => {
            let filtered = [...posts];

            // Filter by search query
            if (searchQuery && searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();

                filtered = filtered.filter((post) => {
                    // Search in title fields
                    const titleMatch =
                        post.textTitle?.toLowerCase().includes(query) ||
                        post.htmlTitle?.toLowerCase().includes(query) ||
                        (post as any).title?.toLowerCase().includes(query) ||
                        post.metaTitle?.toLowerCase().includes(query);

                    // Search in description
                    const descriptionMatch = post.description?.toLowerCase().includes(query);

                    // Search in tags
                    const tagsMatch = post.tags?.some(
                        (tag) =>
                            tag.name?.toLowerCase().includes(query) ||
                            tag.slug?.toLowerCase().includes(query),
                    );

                    // Search in services
                    const servicesMatch = post.services?.some(
                        (service) =>
                            service.name?.toLowerCase().includes(query) ||
                            service.slug?.toLowerCase().includes(query),
                    );

                    return titleMatch || descriptionMatch || tagsMatch || servicesMatch;
                });
            }

            // Filter by tags
            if (tagSlugs && tagSlugs.length > 0) {
                filtered = filtered.filter((post) =>
                    post.tags?.some((tag) => tagSlugs.includes(tag.slug)),
                );
            }

            // Filter by services
            if (serviceSlugs && serviceSlugs.length > 0) {
                filtered = filtered.filter((post) =>
                    post.services?.some((service) => serviceSlugs.includes(service.slug)),
                );
            }

            return filtered;
        },
        [],
    );

    // Router data for blog-constructor
    const routerData = useMemo(
        () => ({
            pathname: router.pathname,
            locale: localeValue as unknown as Locale,
            as: router.asPath,
            hostname,
            updateQueryCallback: () => {
                // Query update logic can be added here if needed
            },
        }),
        [router.pathname, router.asPath, hostname, localeValue],
    );

    // Handle posts fetching with local filtering
    // This function is called by BlogPage component when user types in search field (bc_search_suggest)
    // or applies filters. It performs local filtering on posts loaded from mocks.
    const handleGetPosts = useCallback(
        async (query: GetPostsRequest): Promise<PostsProps> => {
            // Get all posts from ref (loaded from mocks)
            const allPostsData = allPostsRef.current;

            // Parse filter parameters
            const searchQuery = query.search;
            const tagSlugs = query.tags ? query.tags.split(',') : undefined;
            const serviceSlugs = query.services ? query.services.split(',') : undefined;

            // Apply local filtering
            const filteredPosts = filterPostsLocally(
                allPostsData,
                searchQuery,
                tagSlugs,
                serviceSlugs,
            );

            // Apply pagination
            const page = query.page || 1;
            const perPage = query.perPage || 10;
            const startIndex = (page - 1) * perPage;
            const endIndex = startIndex + perPage;
            const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

            // Prepare response in PostsProps format
            const postsResponse: PostsProps = {
                posts: paginatedPosts as unknown as PostsProps['posts'],
                count: paginatedPosts.length,
                totalCount: filteredPosts.length,
                pinnedPost: postsData.pinnedPost as unknown as PostsProps['pinnedPost'],
            };

            setPosts(postsResponse);
            return postsResponse;
        },
        [filterPostsLocally, postsData.pinnedPost],
    );

    // Automatically refetch posts when locale changes
    useEffect(() => {
        handleGetPosts({
            page: 1,
            perPage: postsData.count || 10,
        } as GetPostsRequest).catch(() => {
            // Error is handled by the component
        });
    }, [locale, handleGetPosts, postsData.count]);

    // Blog constructor settings
    const BLOG_CONSTRUCTOR_SETTINGS = {};

    return (
        <Layout
            title={t('meta_title')}
            meta={{
                description: t('meta_description'),
                name: `Gravity UI – ${t('meta_title')}`,
                image: 'https://gravity-ui.com/index-social.png',
            }}
        >
            <div className={b()}>
                <BlogConstructorProvider
                    isMobile={isMobile}
                    theme={Theme.Dark}
                    router={routerData}
                    locale={localeValue as unknown as Locale}
                    settings={BLOG_CONSTRUCTOR_SETTINGS}
                >
                    <BlogPage
                        key={postsKey}
                        content={pageContent}
                        posts={posts}
                        tags={tags}
                        services={[]}
                        getPosts={handleGetPosts}
                        settings={{
                            isMobile,
                            theme: Theme.Dark,
                            projectSettings: {
                                disableCompress: true,
                            },
                        }}
                        // TODO: Uncomment when authentication functionality is implemented
                        // hasLikes={enableSavePost}
                        // toggleLike={enableSavePost ? setLikeStatus : undefined}
                        // isSignedInUser={isSignedInUser}
                        // onClickSignIn={openSignInURL}
                    />
                </BlogConstructorProvider>
            </div>
        </Layout>
    );
}
