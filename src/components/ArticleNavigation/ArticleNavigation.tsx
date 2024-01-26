import {ArrowLeft, ArrowRight} from '@gravity-ui/icons';
import {Flex, Icon, Link, Text} from '@gravity-ui/uikit';
import {useCallback} from 'react';
import {CONTENT_WRAPPER_ID} from 'src/constants';
import {block} from 'src/utils';

import {SubSection} from '../NavigationLayout/types';

const b = block('article-navigation');

import './ArticleNavigation.scss';

interface ArticleNavigationProps {
    prevSection: SubSection | null;
    nextSection: SubSection | null;
}

export const ArticleNavigation = ({prevSection, nextSection}: ArticleNavigationProps) => {
    const scrollTop = useCallback(() => {
        const content = document.getElementById(CONTENT_WRAPPER_ID);
        if (content) {
            content.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, []);

    const nextHandler = () => {
        if (!nextSection) {
            return;
        }
        scrollTop();
    };

    const prevHandler = () => {
        if (!prevSection) {
            return;
        }
        scrollTop();
    };

    return (
        <div className={b()}>
            {prevSection && (
                <Link href={prevSection.url} onClick={prevHandler} className={b('button')}>
                    <div className={b('button-icon')}>
                        <Icon data={ArrowLeft} size={16} />
                    </div>
                    <Flex direction="column" gap="1" className={b('content')}>
                        <Text variant="body-short" color="light-complementary">
                            Previous
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
                    onClick={nextHandler}
                    className={b('button', {reverse: true})}
                >
                    <div className={b('button-icon')}>
                        <Icon data={ArrowRight} size={16} />
                    </div>
                    <Flex direction="column" gap="1" className={b('content')}>
                        <Text variant="body-short" color="light-complementary">
                            Next
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
