import {ArrowLeft, ArrowRight} from '@gravity-ui/icons';
import {Flex, Icon, Text} from '@gravity-ui/uikit';
import {useTranslation} from 'next-i18next';
import {useCallback} from 'react';
import {CONTENT_WRAPPER_ID} from 'src/constants';
import {block} from 'src/utils';

import {Link} from '../Link';
import {SubSection} from '../NavigationLayout/types';

const b = block('article-navigation');

import './ArticleNavigation.scss';

interface ArticleNavigationProps {
    prevSection: SubSection | null;
    nextSection: SubSection | null;
}

export const ArticleNavigation: React.FC<ArticleNavigationProps> = ({prevSection, nextSection}) => {
    const {t} = useTranslation();

    const scrollTop = useCallback(() => {
        const content = document.getElementById(CONTENT_WRAPPER_ID);
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <div className={b()}>
            {prevSection && (
                <Link href={prevSection.url} className={b('button')} onClick={scrollTop}>
                    <div className={b('button-icon')}>
                        <Icon data={ArrowLeft} size={16} />
                    </div>
                    <Flex direction="column" gap="1" className={b('content')}>
                        <Text variant="body-short" color="light-complementary">
                            {t('navigation_previous')}
                        </Text>
                        <Text
                            className={b('content-title')}
                            ellipsis={true}
                            variant="body-2"
                            color="primary"
                        >
                            {prevSection.title}
                        </Text>
                    </Flex>
                </Link>
            )}
            {nextSection && (
                <Link
                    href={nextSection.url}
                    className={b('button', {reverse: true})}
                    onClick={scrollTop}
                >
                    <div className={b('button-icon')}>
                        <Icon data={ArrowRight} size={16} />
                    </div>
                    <Flex direction="column" gap="1" className={b('content')}>
                        <Text variant="body-short" color="light-complementary">
                            {t('navigation_next')}
                        </Text>
                        <Text
                            className={b('content-title')}
                            ellipsis={true}
                            variant="body-2"
                            color="primary"
                        >
                            {nextSection.title}
                        </Text>
                    </Flex>
                </Link>
            )}
        </div>
    );
};
