import {Breadcrumbs, Divider, Flex} from '@gravity-ui/uikit';
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
                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        className={b('wrapper-header')}
                    >
                        <Breadcrumbs className={b('breadcrumbs')}>
                            <Breadcrumbs.Item key={'Gravity UI'}>{'Gravity UI'}</Breadcrumbs.Item>
                            <Breadcrumbs.Item key={'Mail'}>{'Mail'}</Breadcrumbs.Item>
                        </Breadcrumbs>
                        {themeSwitcher}
                    </Flex>
                    <Divider className={b('divider')} />
                    <Mail />
                </Flex>
            );
        }}
    </PreviewWrapper>
);
