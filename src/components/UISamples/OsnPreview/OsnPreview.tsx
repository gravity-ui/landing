import {ActionBar} from '@gravity-ui/navigation';
import {
    PageConstructor,
    PageConstructorProps,
    PageConstructorProvider,
    Theme,
} from '@gravity-ui/page-constructor';
import {Breadcrumbs, Flex} from '@gravity-ui/uikit';
import {block} from 'src/utils';

import {Actions} from '../ApartmentCardPreview/components/Actions';
import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

import './OsnPreview.scss';
import {getContent} from './content/getContent';
import {getNavigation} from './content/getNavigation';

const b = block('osn-preview');

export function OsnPreview(props: Pick<PreviewWrapperProps, 'styles'>) {
    return (
        <PreviewWrapper {...props}>
            {({themeSwitcher, isLightTheme}) => {
                const navigation = getNavigation();
                const content = getContent(isLightTheme ? 'light' : 'dark');

                return (
                    <>
                        <Flex height="100%" maxHeight="100%" overflow="auto" direction="column">
                            <div style={{flexShrink: 0}}>
                                <ActionBar aria-label="Actions bar">
                                    <ActionBar.Section type="primary">
                                        <ActionBar.Group pull="left">
                                            <ActionBar.Item>
                                                <Breadcrumbs maxItems={1}>
                                                    <Breadcrumbs.Item>Gravity UI</Breadcrumbs.Item>
                                                </Breadcrumbs>
                                            </ActionBar.Item>
                                        </ActionBar.Group>
                                        <ActionBar.Group pull="right">
                                            <ActionBar.Item>
                                                <Flex gap={2}>
                                                    <Actions isCompact={true} />
                                                </Flex>
                                            </ActionBar.Item>
                                            {themeSwitcher}
                                        </ActionBar.Group>
                                    </ActionBar.Section>
                                </ActionBar>
                            </div>
                            <div className={b()}>
                                <PageConstructorProvider
                                    theme={isLightTheme ? Theme.Light : Theme.Dark}
                                >
                                    <PageConstructor
                                        content={content}
                                        navigation={
                                            navigation as unknown as PageConstructorProps['navigation']
                                        }
                                    />
                                </PageConstructorProvider>
                            </div>
                        </Flex>
                    </>
                );
            }}
        </PreviewWrapper>
    );
}
