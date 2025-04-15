import {Divider, Flex} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

import {Mail} from './Mail/Mail';
import './MailPreview.scss';
import {getBlockName} from './cn';

const b = block(getBlockName());

export const MailPreview = (props: Pick<PreviewWrapperProps, 'styles'>) => (
    <PreviewWrapper {...props}>
        {({themeSwitcher}) => {
            return (
                <Flex direction="column" className={b()}>
                    <Flex justifyContent="flex-end" className={b('wrapper-header')}>
                        {themeSwitcher}
                    </Flex>
                    <Divider className={b('divider')} />
                    <Mail />
                </Flex>
            );
        }}
    </PreviewWrapper>
);
