import {ArrowLeft, ArrowRight} from '@gravity-ui/icons';
import {Flex, Icon, Text} from '@gravity-ui/uikit';
import Link from 'next/link';
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

    const linkClickHandler = () => {
        scrollTop();
    };

    return (
        <div className={b()}>
            {prevSection && (
                <Link href={prevSection.url}>
                    <a className={b('button')} onClick={linkClickHandler}>
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
                    </a>
                </Link>
            )}
            {nextSection && (
                <Link href={nextSection.url}>
                    <a className={b('button', {reverse: true})} onClick={linkClickHandler}>
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
                    </a>
                </Link>
            )}
        </div>
    );
};
