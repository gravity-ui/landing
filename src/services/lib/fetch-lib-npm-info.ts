export type NpmInfo = {
    'dist-tags'?: {
        latest?: string;
    };
    time?: {
        [version: string]: string;
    };
};

export const fetchNpmInfo = async (npmId: string): Promise<NpmInfo | null> => {
    try {
        const npmApiUrl = 'https://registry.npmjs.org/';
        const response = await fetch(`${npmApiUrl}${npmId}`);

        if (response.ok) {
            return (await response.json()) as NpmInfo;
        }
    } catch (err) {
        console.error(err);
    }

    return null;
};
