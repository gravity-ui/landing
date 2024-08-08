import {Card, Flex, Text, User} from 'landing-uikit';
import React from 'react';

import avatar1Asset from '../../../../../assets/avatar-1.png';
import {block} from '../../../../../utils';
import {cardData} from '../constants';

import './CardsPreview.scss';

const b = block('cards-preview');

const PreviewCard = ({
    imgSrc,
    title,
    text,
    date,
    user,
}: {
    imgSrc: string;
    title: string;
    text: string;
    date: string;
    user: string;
}) => {
    return (
        <Card view="filled" className={b('card')}>
            <Flex direction="column" style={{height: '100%'}}>
                <img src={imgSrc} alt={user} />
                <Flex direction="column" className={b('card__content')} gap={3}>
                    <Flex direction="column" gap={3}>
                        <Text variant="subheader-3">{title}</Text>
                        <Text variant="body-1">{text}</Text>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        className={b('card__content__footer')}
                    >
                        <Text variant="body-1">{date}</Text>
                        <User avatar={{imgUrl: avatar1Asset.src, alt: user}} name={user} />
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
};

export const CardsPreview = ({justify}: {justify: string}) => {
    return (
        <Flex direction="column" alignItems={justify} gap={4} className={b()}>
            <Text variant="header-1">Cards</Text>
            <Flex gap={5} wrap="wrap" justifyContent={justify}>
                {cardData.map((card, index) => (
                    <PreviewCard key={index} {...card} />
                ))}
            </Flex>
        </Flex>
    );
};
