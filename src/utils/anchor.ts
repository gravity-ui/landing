export const getAnchor = (link: string): string => {
    return link
        .toLowerCase()
        .replace(/[^a-z0-9 ]/g, '')
        .replace(/[ ]/g, '-');
};
