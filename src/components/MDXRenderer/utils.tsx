import {ImgHTMLAttributes} from 'react';

export const getCustomImg =
    ({absoluteImgPath}: {absoluteImgPath?: string}) =>
    (props: ImgHTMLAttributes<HTMLImageElement>) => {
        let correctedSrc = props.src;
        if (absoluteImgPath && props.src) {
            if (props.src.startsWith('./')) {
                correctedSrc = props.src.replace('./', absoluteImgPath);
            } else if (!(props.src.startsWith('http://') || props.src.startsWith('https://'))) {
                correctedSrc = `${absoluteImgPath}${props.src}`;
            }
        }
        // Add default width and height if not provided to prevent layout shifts
        const imgProps = {
            ...props,
            src: correctedSrc,
            width: props.width || props.style?.width || 'auto',
            height: props.height || props.style?.height || 'auto',
            style: {
                ...props.style,
                aspectRatio: 'auto',
            },
        };
        return <img {...imgProps} />;
    };
