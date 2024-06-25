import {Card, Flex, Text, User} from '@gravity-ui/uikit';
import React from 'react';

import avatar1Asset from '../../../../assets/avatar-1.png';
import previewCard1 from '../../../../assets/preview-card-1.png';
import previewCard2 from '../../../../assets/preview-card-2.png';
import previewCard3 from '../../../../assets/preview-card-3.png';

import {b} from './PreviewTab';

const cardData = [
    {
        imgSrc: previewCard1.src,
        title: 'Limited availability of Managed service for Elasticsearch',
        text: 'As of July 20, we are suspending the introduction of new functionalities and introducing restrictions on the deployment of clusters for customers new to the service.',
        date: '10 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Uploading Audit Trails to Managed Service for OpenSearch',
        text: 'Today, we’ll talk about how to set up the Audit Trails service to upload audit logs to Managed Service for OpenSearch.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard1.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '8 Apr 2023, 10:17',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '4 Mar 2023, 12:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard1.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '3 Mar 2023, 19:37',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard2.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '8 Apr 2023, 10:17',
        user: 'John Smith',
    },
    {
        imgSrc: previewCard3.src,
        title: 'Managed Service for OpenSearch now public',
        text: 'On January 23, the distributed search and analytics service entered General Availability. The service now supports third-party authentication and authorization (SAML) providers.',
        date: '4 Mar 2023, 12:37',
        user: 'John Smith',
    },
];

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
        <Card view="filled" className={b('cards-preview__card')}>
            <Flex direction="column" style={{height: '100%'}}>
                <img src={imgSrc} alt={user} />
                <Flex direction="column" className={b('cards-preview__card__content')} gap={3}>
                    <Flex direction="column" gap={3}>
                        <Text variant="subheader-3">{title}</Text>
                        <Text variant="body-1">{text}</Text>
                    </Flex>
                    <Flex
                        alignItems="center"
                        justifyContent="space-between"
                        className={b('cards-preview__card__content__footer')}
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
        <Flex direction="column" alignItems={justify} gap={4} className={b('cards-preview')}>
            <Text variant="header-1">Cards</Text>
            <Flex gap={5} wrap="wrap" justifyContent={justify}>
                {cardData.map((card, index) => (
                    <PreviewCard key={index} {...card} />
                ))}
            </Flex>
        </Flex>
    );
};
