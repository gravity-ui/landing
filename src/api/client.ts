import type {BlogPostsResponse, Contributor} from './types';

export class ClientApi {
    private static _instance: ClientApi;

    static get instance(): ClientApi {
        if (!ClientApi._instance) {
            ClientApi._instance = new ClientApi();
        }

        return ClientApi._instance;
    }

    async fetchAllContributors(): Promise<Contributor[]> {
        const res = await fetch('api/contributors');

        if (!res.ok) {
            return [];
        }

        return (await res.json())?.contributors || [];
    }

    async getBlogPosts(locale: string): Promise<BlogPostsResponse> {
        const res = await fetch(`/api/blog-posts?locale=${encodeURIComponent(locale)}`);

        if (!res.ok) {
            return {posts: [], count: 0, totalCount: 0, pinnedPost: null};
        }

        return await res.json();
    }
}
