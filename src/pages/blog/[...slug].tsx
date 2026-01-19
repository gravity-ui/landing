import {
    BlogConstructorProvider,
    BlogPostPage as ConstructorBlogPostPage,
    Locale,
    PostData,
    Theme,
} from '@gravity-ui/blog-constructor';
import {ShareOptions} from '@gravity-ui/components';
import type {PageContent} from '@gravity-ui/page-constructor';
import {GetServerSideProps} from 'next';
import {useTranslation} from 'next-i18next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useMemo} from 'react';

import {Api} from '../../api';
import {Layout} from '../../components/Layout/Layout';
import {useIsMobile} from '../../hooks/useIsMobile';
import {getI18nProps} from '../../utils/i18next';

import {localeEn, localeRu} from './constants';

interface BlogPostPageProps {
    post: PostData;
    pageContent: PageContent;
    suggestedPosts: PostData[];
    pageUpdatedAt: string | null;
    hostname: string;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const locale = ctx.locale || 'en';
    const slug = ctx.params?.slug;

    // Blog is only available for ru and en locales
    if (locale !== 'ru' && locale !== 'en') {
        return {
            redirect: {
                destination: `/${ctx.defaultLocale || 'en'}/blog`,
                permanent: false,
            },
        };
    }

    // Validate slug
    if (!slug || !Array.isArray(slug)) {
        return {
            notFound: true,
        };
    }

    // Join slug parts to get full path like "posts/2022/09/review"
    const fullSlug = slug.join('/');

    try {
        const [postResponse, i18nProps] = await Promise.all([
            Api.instance.getBlogPost(locale, fullSlug),
            getI18nProps(ctx, ['blog']),
        ]);

        const hostname = ctx.req.headers.host || '';

        return {
            props: {
                post: postResponse.post as unknown as PostData,
                pageContent: postResponse.page.content,
                pageUpdatedAt: postResponse.page.updatedAt || null,
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

export default function BlogPostPage({
    post,
    pageContent,
    pageUpdatedAt,
    hostname,
}: BlogPostPageProps) {
    const {t} = useTranslation('blog');
    const router = useRouter();
    const isMobile = useIsMobile();
    const locale = router.locale || 'en';
    const localeValue = locale === 'ru' ? localeRu : localeEn;

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

    // Share options for the post
    const shareOptions = [
        ShareOptions.Twitter,
        ShareOptions.Facebook,
        ShareOptions.Telegram,
        ShareOptions.VK,
        ShareOptions.LinkedIn,
    ];

    // Breadcrumbs for navigation
    const pathPrefix = localeValue.pathPrefix ? `/${localeValue.pathPrefix}` : '';
    const blogUrl = `${pathPrefix}/blog`;

    // Ensure post URL has pathPrefix
    let postUrl = router.asPath;
    if (pathPrefix && !postUrl.startsWith(pathPrefix)) {
        // Remove any existing locale prefix and add the correct one
        const urlWithoutLocale = postUrl.replace(/^\/(en|ru)/, '');
        postUrl = `${pathPrefix}${urlWithoutLocale}`;
    }

    const breadcrumbs = {
        items: [
            {
                text: t('meta_title'),
                url: blogUrl,
            },
            {
                text: post.title,
                url: postUrl,
            },
        ],
    };

    // Blog constructor settings
    const BLOG_CONSTRUCTOR_SETTINGS = {
        // TODO: Add custom extra info items if needed (e.g., AudioButton)
        // extraInfoItems: [AudioButton]
    };

    // TODO: Implement analytics when needed
    const analytics = undefined;

    // TODO: Uncomment when authentication functionality is implemented
    // const isSignedInUser = false;
    // const openSignInURL = () => {
    //     // Implement sign-in logic
    //     console.log('Sign in clicked');
    // };
    // const likes = {
    //     hasUserLike: post.hasUserLike,
    //     likesCount: post.likes,
    //     toggleLike: ({postId}: {postId?: number}) => {
    //         console.log('Toggle like on post --->', postId);
    //     },
    // };

    // Meta data for SEO
    const metaData = {
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.description,
        keywords: post.keywords?.join(', '),
        image: post.image,
    };

    return (
        <>
            <Head>
                <title>{metaData.title}</title>
                <meta name="description" content={metaData.description || ''} />
                {metaData.keywords && <meta name="keywords" content={metaData.keywords} />}
                {metaData.image && <meta property="og:image" content={metaData.image} />}
                <meta property="og:title" content={metaData.title} />
                <meta property="og:description" content={metaData.description || ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaData.title} />
                <meta name="twitter:description" content={metaData.description || ''} />
                {metaData.image && <meta name="twitter:image" content={metaData.image} />}
            </Head>
            <Layout isPageConstructor>
                <BlogConstructorProvider
                    isMobile={isMobile}
                    theme={Theme.Dark}
                    router={routerData}
                    locale={localeValue as unknown as Locale}
                    analytics={analytics}
                    settings={BLOG_CONSTRUCTOR_SETTINGS}
                >
                    <ConstructorBlogPostPage
                        content={pageContent}
                        post={post}
                        // TODO: Uncomment when authentication functionality is implemented
                        // likes={likes}
                        suggestedPosts={[]}
                        settings={{
                            isMobile,
                            theme: Theme.Dark,
                            projectSettings: {
                                disableCompress: true,
                            },
                            analytics,
                        }}
                        shareOptions={shareOptions}
                        // TODO: Uncomment when authentication functionality is implemented
                        // isSignedInUser={isSignedInUser}
                        // onClickSignIn={openSignInURL}
                        breadcrumbs={breadcrumbs}
                        microdata={
                            pageUpdatedAt
                                ? {
                                      contentUpdatedDate: pageUpdatedAt,
                                  }
                                : undefined
                        }
                    />
                </BlogConstructorProvider>
            </Layout>
        </>
    );
}
