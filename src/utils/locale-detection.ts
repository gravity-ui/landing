import languageDetector from 'next-language-detector';

import i18nextConfig from '../../next-i18next.config';

const languageDetectorInstance = languageDetector({
    supportedLngs: i18nextConfig.i18n.locales,
    fallbackLng: i18nextConfig.i18n.defaultLocale,
});

export const detectLocale = () => {
    const detectedLocale = languageDetectorInstance.detect();

    if (detectedLocale && i18nextConfig.i18n.locales.includes(detectedLocale)) {
        return detectedLocale;
    } else {
        return i18nextConfig.i18n.defaultLocale;
    }
};
