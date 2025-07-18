export const getCookie = (name: string): string | undefined => {
    const cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookie ? cookie.pop() : undefined;
};

export const setCookie = ({
    domain,
    name,
    value,
    path = '/',
    maxAge = 365 * 24 * 60 * 60,
}: {
    domain?: string;
    name: string;
    value: string;
    path?: string;
    maxAge?: number;
}) => {
    let cookie = `${name}=${value}; path=${path}; max-age=${maxAge}`;

    if (domain) {
        cookie += `; domain=${domain}`;
    }

    document.cookie = cookie;
};
