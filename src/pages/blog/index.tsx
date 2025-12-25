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
import {useCallback, useEffect, useMemo, useState} from 'react';

import {Api} from '../../api';
import {Layout} from '../../components/Layout/Layout';
import {useIsMobile} from '../../hooks/useIsMobile';
import {block} from '../../utils';
import {getI18nProps} from '../../utils/i18next';

import {localeEn, localeRu} from './constants';
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

    // Blog is only available for ru and en locales
    if (locale !== 'ru' && locale !== 'en') {
        return {
            redirect: {
                destination: `/${ctx.defaultLocale || 'en'}/blog`,
                permanent: false,
            },
        };
    }

    try {
        const [postsResponse, tags, i18nProps] = await Promise.all([
            Api.instance.getBlogPosts(locale),
            Api.instance.getBlogTags(locale),
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
    } catch (error) {
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
    const localeValue = locale === 'ru' ? localeRu : localeEn;

    const [posts, setPosts] = useState<PostsProps>(postsData);

    // Create a unique key based on first post URL to force re-render when URLs change
    const postsKey = useMemo(
        () => (posts.posts.length > 0 ? posts.posts[0]?.url || locale : locale),
        [posts.posts, locale],
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

    // Handle posts fetching with filters
    const handleGetPosts = useCallback(
        async (query: GetPostsRequest): Promise<PostsProps> => {
            // Convert GetPostsRequest format to our API format
            const apiQuery = {
                page: query.page,
                pageSize: query.perPage,
                search: query.search,
                tags: query.tags ? query.tags.split(',') : undefined,
                services: query.services ? query.services.split(',') : undefined,
            };

            const currentLocale = router.locale || 'en';
            const response = await Api.instance.getBlogPosts(currentLocale, apiQuery);

            // URLs are already formatted with locale prefix by preparePost on the server
            const postsResponse = {
                posts: response.posts as unknown as PostsProps['posts'],
                count: response.count,
                totalCount: response.totalCount,
                pinnedPost: response.pinnedPost as unknown as PostsProps['pinnedPost'],
            };

            setPosts(postsResponse);
            return postsResponse;
        },
        [router.locale],
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
