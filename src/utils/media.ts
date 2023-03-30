import {ImageProps} from '@gravity-ui/page-constructor';

export function getMediaImage(image: ImageProps) {
    return typeof image === 'string' ? {src: image} : image;
}
