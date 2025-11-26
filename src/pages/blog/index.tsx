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
import {useMemo, useState} from 'react';

import {Api} from '../../api';
import {Layout} from '../../components/Layout/Layout';
import {useIsMobile} from '../../hooks/useIsMobile';
import {getI18nProps} from '../../utils/i18next';

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
        const [postsResponse, tags, services, i18nProps] = await Promise.all([
            Api.instance.getBlogPosts(locale),
            Api.instance.getBlogTags(locale),
            Api.instance.getServiceList(locale),
            getI18nProps(ctx, ['blog']),
        ]);

        const {page, ...postsData} = postsResponse;

        const hostname = ctx.req.headers.host || '';

        return {
            props: {
                postsData,
                tags,
                services,
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

export default function BlogIndex({
    postsData,
    tags,
    services,
    pageContent,
    hostname,
}: BlogIndexProps) {
    const {t} = useTranslation('blog');
    const router = useRouter();
    const isMobile = useIsMobile();
    const locale = router.locale || 'en';

    const [posts, setPosts] = useState<PostsProps>(postsData);

    // Router data for blog-constructor
    const routerData = useMemo(
        () => ({
            pathname: router.pathname,
            locale: (router.locale || 'en') as unknown as Locale,
            as: router.asPath,
            hostname,
            updateQueryCallback: () => {
                // Query update logic can be added here if needed
            },
        }),
        [router.pathname, router.locale, router.asPath, hostname],
    );

    // Handle posts fetching with filters
    const handleGetPosts = async (query: GetPostsRequest): Promise<PostsProps> => {
        // Convert GetPostsRequest format to our API format
        const apiQuery = {
            page: query.page,
            pageSize: query.perPage,
            search: query.search,
            tags: query.tags ? query.tags.split(',') : undefined,
            services: query.services ? query.services.split(',') : undefined,
        };

        const response = await Api.instance.getBlogPosts(locale, apiQuery);
        const postsResponse = {
            posts: response.posts as unknown as PostsProps['posts'],
            count: response.count,
            totalCount: response.totalCount,
            pinnedPost: response.pinnedPost as unknown as PostsProps['pinnedPost'],
        };

        setPosts(postsResponse);
        return postsResponse;
    };

    // Blog constructor settings
    const BLOG_CONSTRUCTOR_SETTINGS = {};

    // TODO: Implement analytics when needed
    const analytics = undefined;

    // TODO: Uncomment when authentication functionality is implemented
    // const isSignedInUser = false;
    // const openSignInURL = () => {
    //     // Implement sign-in logic
    //     console.log('Sign in clicked');
    // };
    // const enableSavePost = false;
    // const setLikeStatus = ({postId, hasLike}: {postId?: number; hasLike?: boolean}) => {
    //     console.log('Toggle like on post --->', postId, hasLike);
    // };
    return (
        <Layout
            title={t('meta_title')}
            meta={{
                description: t('meta_description'),
                name: `Gravity UI – ${t('meta_title')}`,
                image: 'https://gravity-ui.com/index-social.png',
            }}
        >
            <BlogConstructorProvider
                isMobile={isMobile}
                theme={Theme.Dark}
                router={routerData}
                locale={locale as unknown as Locale}
                analytics={analytics}
                settings={BLOG_CONSTRUCTOR_SETTINGS}
            >
                <BlogPage
                    content={pageContent}
                    posts={posts}
                    tags={tags}
                    services={services}
                    getPosts={handleGetPosts}
                    settings={{
                        isMobile,
                        theme: Theme.Dark,
                        projectSettings: {
                            disableCompress: false,
                        },
                        analytics,
                    }}
                    // TODO: Uncomment when authentication functionality is implemented
                    // hasLikes={enableSavePost}
                    // toggleLike={enableSavePost ? setLikeStatus : undefined}
                    // isSignedInUser={isSignedInUser}
                    // onClickSignIn={openSignInURL}
                />
            </BlogConstructorProvider>
        </Layout>
    );
}
