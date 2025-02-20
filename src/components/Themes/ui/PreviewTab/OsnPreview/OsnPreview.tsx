import {PageConstructor, PageConstructorProps} from '@gravity-ui/page-constructor';

import {block} from '../../../../../utils';

import './OsnPreview.scss';
import {osnContent} from './blocks/osnContent';
import {osnNavigation} from './blocks/osnNavigation';

const b = block('osn-preview');

export function OsnPreview() {
    const navigation = osnNavigation();
    const content = osnContent();
    return (
        <div className={b()}>
            <PageConstructor
                content={content}
                navigation={navigation as unknown as PageConstructorProps['navigation']}
            />
        </div>
    );
}
