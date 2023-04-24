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
        return <img {...props} src={correctedSrc} />;
    };
