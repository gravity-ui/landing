import {PageConstructor, PageConstructorProps} from '@gravity-ui/page-constructor';

import {block} from '../../../../../utils';

import './OsnPreview.scss';
import {getContent} from './content/getContent';
import {getNavigation} from './content/getNavigation';

const b = block('osn-preview');

export function OsnPreview() {
    const navigation = getNavigation();
    const content = getContent();
    return (
        <div className={b()}>
            <PageConstructor
                content={content}
                navigation={navigation as unknown as PageConstructorProps['navigation']}
            />
        </div>
    );
}
