import {DatePicker} from '@gravity-ui/date-components';
import {dateTime} from '@gravity-ui/date-utils';
import {
    ArrowShapeTurnUpRight,
    BookOpen,
    ChevronDown,
    ChevronLeft,
    Cubes3,
    FaceFun,
    FaceNeutralDashed,
    FileText,
    Ghost,
    Heart,
    HeartFill,
    MagicWand,
    ThumbsDown,
    ThumbsUp,
    ThumbsUpFill,
} from '@gravity-ui/icons';
import {ActionBar} from '@gravity-ui/navigation';
import {BREAKPOINTS, useWindowBreakpoint} from '@gravity-ui/page-constructor';
import {
    Alert,
    Box,
    Breadcrumbs,
    Button,
    Card,
    Col,
    Divider,
    Flex,
    Icon,
    IconData,
    Label,
    Link,
    Progress,
    Row,
    Select,
    SelectOption,
    Text,
    TextInput,
    User,
    spacing,
} from '@gravity-ui/uikit';
import {chunk} from 'lodash';
import {Fragment, useState} from 'react';

import apple from '../../../assets/preview-apartments/apple.png';
import photo1sm from '../../../assets/preview-apartments/photo-1-sm.jpg';
import photo1 from '../../../assets/preview-apartments/photo-1.jpg';
import photo2sm from '../../../assets/preview-apartments/photo-2-sm.jpg';
import photo2 from '../../../assets/preview-apartments/photo-2.jpg';
import photo3sm from '../../../assets/preview-apartments/photo-3-sm.jpg';
import photo3 from '../../../assets/preview-apartments/photo-3.jpg';
import photo4sm from '../../../assets/preview-apartments/photo-4-sm.jpg';
import photo4 from '../../../assets/preview-apartments/photo-4.jpg';
import photo5sm from '../../../assets/preview-apartments/photo-5-sm.jpg';
import photo5 from '../../../assets/preview-apartments/photo-5.jpg';
import photo6sm from '../../../assets/preview-apartments/photo-6-sm.jpg';
import photo6 from '../../../assets/preview-apartments/photo-6.jpg';
import photo7sm from '../../../assets/preview-apartments/photo-7-sm.jpg';
import photo7 from '../../../assets/preview-apartments/photo-7.jpg';
import photo8sm from '../../../assets/preview-apartments/photo-8-sm.jpg';
import photo8 from '../../../assets/preview-apartments/photo-8.jpg';
import playstore from '../../../assets/preview-apartments/playstore.png';
import user1 from '../../../assets/preview-apartments/user-1.png';
import {PreviewWrapper, PreviewWrapperProps} from '../PreviewWrapper/PreviewWrapper';

import {Actions} from './components/Actions';
import {CollapsibleText} from './components/CollapsibleText';
import {Gallery} from './components/Gallery';
import {Rank} from './components/Rank';
import {
    Sheet,
    SheetInfoItems,
    SheetList,
    SheetMailSubtitle,
    SheetMailTitle,
} from './components/Sheet';

// TODO add actions in the header

const PHOTOS: Array<{
    src: string;
    srcSm: string;
}> = [
    {src: photo1.src, srcSm: photo1sm.src},
    {src: photo2.src, srcSm: photo2sm.src},
    {src: photo3.src, srcSm: photo3sm.src},
    {src: photo4.src, srcSm: photo4sm.src},
    {src: photo5.src, srcSm: photo5sm.src},
    {src: photo6.src, srcSm: photo6sm.src},
    {src: photo7.src, srcSm: photo7sm.src},
    {src: photo8.src, srcSm: photo8sm.src},
];

const HORIZONTAL_SPACING = 10 as const;

const APARTMENT_MAIN_INFO: {
    text: string;
    characteristics: Array<{
        value: string;
        title: string;
    }>;
    mainSlepingPlaces: Array<{
        value: string;
        title: string;
    }>;
    objectsPostingRules: Array<{
        value: string;
        title: string;
    }>;
    objectsPostingItems: Array<{
        icon: IconData;
        title: string;
    }>;
    basicAmenitiesItems: Array<{
        icon: IconData;
        title: string;
    }>;
    ratingItems: Array<{
        value: number;
        title: string;
    }>;
    reviews: Array<{
        date: string;
        rank: string;
        author: {
            avatarScr: string;
            name: string;
            description: string;
        };
        points: Array<{
            text: string;
            state: 'positive' | 'negative';
        }>;
        images: Array<{src: string}>;
    }>;
} = {
    characteristics: [
        {
            value: '79m2',
            title: 'Total area',
        },
        {
            value: '3',
            title: 'Rooms',
        },
        {
            value: '7',
            title: 'Guests',
        },
        {
            value: '4',
            title: 'Beds',
        },
        {
            value: '4',
            title: 'Bedrooms',
        },
        {
            value: '3 of 6',
            title: 'Floor',
        },
    ],
    mainSlepingPlaces: [
        {
            value: '1',
            title: 'single bed',
        },
        {
            value: '1',
            title: 'double bed',
        },
        {
            value: '2',
            title: 'single sofa beds',
        },
        {
            value: '2',
            title: 'double sofa bed',
        },
    ],
    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\nThis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    objectsPostingRules: [
        {
            value: 'after 4:00 PM',
            title: 'Check-in time',
        },
        {
            value: 'before 1:00 PM',
            title: 'Check-out',
        },
        {
            value: 'from 1 day',
            title: 'Minimum stay',
        },
        {
            value: 'from 1 day',
            title: 'Minimum stay',
        },
    ],
    objectsPostingItems: [
        {
            icon: MagicWand,
            title: 'possible with children of any age children 1 year and younger are accommodated free of charge, but without an extra bed',
        },
        {
            icon: FaceNeutralDashed,
            title: 'no smoking',
        },
        {
            icon: Ghost,
            title: 'pets are not allowed',
        },
        {
            icon: FaceFun,
            title: 'no parties and events',
        },
        {
            icon: FileText,
            title: 'the owner provides accounting documents on residence as agreed',
        },
    ],
    basicAmenitiesItems: [
        {
            icon: Cubes3,
            title: 'wireless Internet Wi-Fi',
        },
        {
            icon: Cubes3,
            title: 'electric kettle',
        },
        {
            icon: Cubes3,
            title: 'designer renovation',
        },
        {
            icon: Cubes3,
            title: 'Self-isolation is allowed',
        },
        {
            icon: Cubes3,
            title: 'fan',
        },
        {
            icon: Cubes3,
            title: 'microwave',
        },
        {
            icon: Cubes3,
            title: 'bed linen',
        },
        {
            icon: Cubes3,
            title: 'TV',
        },
    ],
    ratingItems: [
        {
            value: 95,
            title: 'Clear',
        },
        {
            value: 95,
            title: 'Accuracy',
        },
        {
            value: 95,
            title: 'Good location',
        },
        {
            value: 95,
            title: 'Truth a photo',
        },
        {
            value: 90,
            title: 'Quality - price',
        },
        {
            value: 95,
            title: 'Quality of service',
        },
    ],
    reviews: [
        {
            date: 'a week ago',
            rank: '9,6',
            author: {
                avatarScr: user1.src,
                name: 'Name',
                description: 'October 2024, 5 days | 2 guests',
            },
            points: [
                {
                    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\nThis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                    state: 'positive',
                },
            ],
            images: [
                {
                    src: photo2.src,
                },
                {
                    src: photo3.src,
                },
                {
                    src: photo4.src,
                },
            ],
        },
        {
            date: 'a week ago',
            rank: '9,6',
            author: {
                avatarScr: user1.src,
                name: 'Name',
                description: 'October 2024, 5 days | 2 guests',
            },
            points: [
                {
                    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\nThis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                    state: 'positive',
                },
                {
                    text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.\nThis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                    state: 'negative',
                },
            ],
            images: [
                {
                    src: photo2.src,
                },
            ],
        },
    ],
};

const GUESTS_OPTIONS: SelectOption[] = [
    {
        value: '2-adults',
        content: '2 adult without children',
    },
    {
        value: '4-adults',
        content: '4 adult without children',
    },
];

const BREADCRUMBS = [
    {
        text: 'Country',
        action: () => {},
    },
    {
        text: 'Region',
        action: () => {},
    },
    {
        text: 'City',
        action: () => {},
    },
    {
        text: '№ 123456',
        action: () => {},
    },
];

export function ApartmentCardPreview(props: Pick<PreviewWrapperProps, 'styles'>) {
    const [isFavorite, setIsFavorite] = useState(false);

    const currentBreakpoint = useWindowBreakpoint();
    const isCompactActionsBar = currentBreakpoint < BREAKPOINTS.lg;

    return (
        <PreviewWrapper {...props}>
            {({themeSwitcher, isLightTheme}) => {
                const contrastBackgroundColor = isLightTheme
                    ? 'rgba(0,0,0,0.05)'
                    : 'rgba(255,255,255,0.1)';

                return (
                    <Flex height="100%" maxHeight="100%" overflow="auto" direction="column">
                        <div style={{flexShrink: 0}}>
                            <ActionBar aria-label="Actions bar">
                                <ActionBar.Section type="primary">
                                    <ActionBar.Group pull="left" style={{flexGrow: 1}}>
                                        <ActionBar.Item style={{width: '100%'}}>
                                            <Breadcrumbs showRoot style={{alignItems: 'center'}}>
                                                <Breadcrumbs.Item>Gravity UI</Breadcrumbs.Item>
                                                <Breadcrumbs.Item>Apartments</Breadcrumbs.Item>
                                            </Breadcrumbs>
                                        </ActionBar.Item>
                                    </ActionBar.Group>
                                    <ActionBar.Group pull="right">
                                        <ActionBar.Item>
                                            <Flex gap={2} className={spacing({mr: 4})}>
                                                <Actions isCompact={isCompactActionsBar} />
                                                <Text
                                                    style={{alignSelf: 'center'}}
                                                    variant="body-1"
                                                >
                                                    +7 (000) 000-00-00
                                                </Text>
                                            </Flex>
                                        </ActionBar.Item>
                                        {themeSwitcher}
                                    </ActionBar.Group>
                                </ActionBar.Section>
                            </ActionBar>
                        </div>
                        <div
                            style={{
                                flexGrow: 1,
                                backgroundColor: contrastBackgroundColor,
                                width: '100%',
                                overflowY: 'auto',
                            }}
                        >
                            <div
                                style={{
                                    maxWidth: '1080px',
                                    width: '1080px',
                                }}
                                className={spacing({mx: HORIZONTAL_SPACING})}
                            >
                                <Flex alignItems="center" gap={4} spacing={{pt: 5}}>
                                    <Button view="flat-secondary">
                                        <Icon data={ChevronLeft} />
                                    </Button>
                                    <Box width="100%">
                                        <Breadcrumbs style={{boxSizing: 'content-box'}}>
                                            {BREADCRUMBS.map((item, index) => {
                                                return (
                                                    <Breadcrumbs.Item key={index}>
                                                        {item.text}
                                                    </Breadcrumbs.Item>
                                                );
                                            })}
                                        </Breadcrumbs>
                                    </Box>
                                </Flex>

                                <Flex
                                    direction={'column'}
                                    gap={3}
                                    className={spacing({mt: 4, mb: 5})}
                                >
                                    <Text variant="header-1">
                                        Luxury apartment with jacuzzi, center with parking, next to
                                        Starbucks
                                    </Text>

                                    <Flex
                                        gap={3}
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Flex gap={3} alignItems="center">
                                            <Rank value="9,6" />

                                            <Text variant="body-1" color="secondary">
                                                47 reviews
                                            </Text>

                                            <Text variant="body-1" color="secondary">
                                                Lenina street
                                            </Text>

                                            <Button view="flat-action">To show on the map</Button>

                                            <Label theme="info" size="m">
                                                <Flex
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    gap={1}
                                                >
                                                    <Icon data={ThumbsUpFill} size={12} />
                                                    <div className={spacing({ml: 0.5})}>
                                                        Guests recommend
                                                    </div>
                                                </Flex>
                                            </Label>
                                        </Flex>

                                        <Flex>
                                            <Button
                                                view="flat-secondary"
                                                onClick={() => setIsFavorite((value) => !value)}
                                            >
                                                <Icon data={isFavorite ? HeartFill : Heart} />
                                                To favorites
                                            </Button>

                                            <Button view="flat-secondary">
                                                <Icon data={ArrowShapeTurnUpRight} />
                                                Share
                                            </Button>
                                        </Flex>
                                    </Flex>
                                </Flex>

                                <Row space={5}>
                                    <Col s={8}>
                                        <Flex
                                            direction="column"
                                            gap={5}
                                            className={spacing({mb: 5})}
                                        >
                                            <Gallery photos={PHOTOS} />

                                            <Sheet>
                                                <SheetMailTitle>Main information</SheetMailTitle>
                                                <SheetInfoItems
                                                    items={APARTMENT_MAIN_INFO.characteristics}
                                                    addBottomMargin
                                                />

                                                <div className={spacing({mb: 5})}>
                                                    <CollapsibleText
                                                        text={APARTMENT_MAIN_INFO.text}
                                                    />
                                                </div>

                                                <SheetMailSubtitle>
                                                    Main sleeping places
                                                </SheetMailSubtitle>
                                                <SheetInfoItems
                                                    items={APARTMENT_MAIN_INFO.mainSlepingPlaces}
                                                />
                                            </Sheet>

                                            <Sheet>
                                                <SheetMailTitle>
                                                    Object's posting rules
                                                </SheetMailTitle>
                                                <SheetInfoItems
                                                    items={APARTMENT_MAIN_INFO.objectsPostingRules}
                                                    addBottomMargin
                                                />
                                                <SheetList
                                                    addBottomMargin
                                                    itemsPerColumn={
                                                        APARTMENT_MAIN_INFO.objectsPostingItems
                                                            .length
                                                    }
                                                    items={APARTMENT_MAIN_INFO.objectsPostingItems}
                                                />
                                                <Alert
                                                    theme="warning"
                                                    view="outlined"
                                                    title="Security deposit (refundable upon departure) - 5 000 ₽"
                                                    message="The owner can take it upon check-in and return it upon departure, if
                            nothing is spoiled."
                                                />
                                            </Sheet>

                                            <Sheet>
                                                <SheetMailTitle>Basic amenities</SheetMailTitle>
                                                <SheetList
                                                    addBottomMargin
                                                    itemsPerColumn={
                                                        APARTMENT_MAIN_INFO.basicAmenitiesItems
                                                            .length / 2
                                                    }
                                                    items={APARTMENT_MAIN_INFO.basicAmenitiesItems}
                                                />
                                                <Button view="normal" size="l">
                                                    Show all amenities
                                                </Button>
                                            </Sheet>

                                            <Sheet>
                                                <SheetMailTitle>
                                                    <Flex alignItems="center" gap={5}>
                                                        <div>Guest rating</div>
                                                        <Flex alignItems="center" gap={1}>
                                                            <Rank value="9,6" />
                                                            <Text
                                                                variant="body-1"
                                                                color="secondary"
                                                                className={spacing({ml: 1})}
                                                            >
                                                                47 reviews
                                                            </Text>
                                                        </Flex>
                                                    </Flex>
                                                </SheetMailTitle>

                                                <Flex gap={9} className={spacing({mb: 5})}>
                                                    {chunk(
                                                        APARTMENT_MAIN_INFO.ratingItems,
                                                        APARTMENT_MAIN_INFO.ratingItems.length / 2,
                                                    ).map((items, index) => {
                                                        return (
                                                            <Flex
                                                                key={index}
                                                                direction="column"
                                                                grow={1}
                                                                gap={3}
                                                            >
                                                                {items.map((item, itemIndex) => {
                                                                    return (
                                                                        <Flex
                                                                            key={itemIndex}
                                                                            gap={2}
                                                                            grow={1}
                                                                            alignItems="center"
                                                                        >
                                                                            <Text
                                                                                style={{
                                                                                    width: '120px',
                                                                                }}
                                                                            >
                                                                                {item.title}
                                                                            </Text>
                                                                            <div
                                                                                style={{
                                                                                    flexGrow: 1,
                                                                                }}
                                                                            >
                                                                                <Progress
                                                                                    value={
                                                                                        item.value
                                                                                    }
                                                                                    className={spacing(
                                                                                        {
                                                                                            m: 0,
                                                                                        },
                                                                                    )}
                                                                                    size="xs"
                                                                                    theme="warning"
                                                                                />
                                                                            </div>
                                                                            <Text
                                                                                style={{
                                                                                    width: '20px',
                                                                                }}
                                                                            >
                                                                                {item.value / 10}
                                                                            </Text>
                                                                        </Flex>
                                                                    );
                                                                })}
                                                            </Flex>
                                                        );
                                                    })}
                                                </Flex>

                                                <Select
                                                    className={spacing({mb: 5})}
                                                    options={[
                                                        {value: 'default', content: 'Default'},
                                                    ]}
                                                    value={['default']}
                                                    renderSelectedOption={(option) => {
                                                        return (
                                                            <Flex alignItems="center" gap={0.5}>
                                                                <Text variant="subheader-1">
                                                                    Sort:
                                                                </Text>
                                                                <Text>{option.content}</Text>
                                                            </Flex>
                                                        );
                                                    }}
                                                />

                                                <Flex direction="column" gap={5}>
                                                    {APARTMENT_MAIN_INFO.reviews.map(
                                                        (review, index, arr) => {
                                                            return (
                                                                <Fragment key={index}>
                                                                    <Flex
                                                                        direction="column"
                                                                        gap={3}
                                                                    >
                                                                        <Flex
                                                                            alignItems="center"
                                                                            justifyContent="space-between"
                                                                        >
                                                                            <User
                                                                                avatar={{
                                                                                    imgUrl: review
                                                                                        .author
                                                                                        .avatarScr,
                                                                                }}
                                                                                size="l"
                                                                                name={
                                                                                    review.author
                                                                                        .name
                                                                                }
                                                                                description={
                                                                                    review.author
                                                                                        .description
                                                                                }
                                                                            />
                                                                            <Flex
                                                                                direction="column"
                                                                                alignItems="flex-end"
                                                                            >
                                                                                <Rank
                                                                                    value={
                                                                                        review.rank
                                                                                    }
                                                                                />
                                                                                <Text
                                                                                    variant="body-1"
                                                                                    color="secondary"
                                                                                >
                                                                                    {review.date}
                                                                                </Text>
                                                                            </Flex>
                                                                        </Flex>

                                                                        <Flex
                                                                            direction="column"
                                                                            gap={2}
                                                                        >
                                                                            {review.points.map(
                                                                                (
                                                                                    point,
                                                                                    pointIndex,
                                                                                ) => {
                                                                                    return (
                                                                                        <Flex
                                                                                            key={
                                                                                                pointIndex
                                                                                            }
                                                                                            gap={3}
                                                                                        >
                                                                                            <CollapsibleText
                                                                                                text={
                                                                                                    point.text
                                                                                                }
                                                                                            />
                                                                                            {point.state ===
                                                                                                'positive' && (
                                                                                                <Text color="positive">
                                                                                                    <Icon
                                                                                                        data={
                                                                                                            ThumbsUp
                                                                                                        }
                                                                                                    />
                                                                                                </Text>
                                                                                            )}
                                                                                            {point.state ===
                                                                                                'negative' && (
                                                                                                <Text color="danger">
                                                                                                    <Icon
                                                                                                        data={
                                                                                                            ThumbsDown
                                                                                                        }
                                                                                                    />
                                                                                                </Text>
                                                                                            )}
                                                                                        </Flex>
                                                                                    );
                                                                                },
                                                                            )}
                                                                        </Flex>

                                                                        <Flex gap={2}>
                                                                            {review.images.map(
                                                                                (
                                                                                    image,
                                                                                    imageIndex,
                                                                                ) => {
                                                                                    return (
                                                                                        <Card
                                                                                            view="clear"
                                                                                            style={{
                                                                                                height: '60px',
                                                                                                width: '60px',
                                                                                            }}
                                                                                            overflow="hidden"
                                                                                            key={
                                                                                                imageIndex
                                                                                            }
                                                                                        >
                                                                                            <img
                                                                                                src={
                                                                                                    image.src
                                                                                                }
                                                                                                style={{
                                                                                                    height: '100%',
                                                                                                    objectFit:
                                                                                                        'fill',
                                                                                                }}
                                                                                            />
                                                                                        </Card>
                                                                                    );
                                                                                },
                                                                            )}
                                                                        </Flex>
                                                                    </Flex>
                                                                    {index < arr.length - 1 && (
                                                                        <Divider />
                                                                    )}
                                                                </Fragment>
                                                            );
                                                        },
                                                    )}
                                                </Flex>

                                                <Button
                                                    view="normal"
                                                    size="l"
                                                    className={spacing({mt: 5})}
                                                >
                                                    Show more reviews
                                                </Button>
                                            </Sheet>
                                        </Flex>
                                    </Col>

                                    <Col s={4}>
                                        <Flex direction="column" gap={5}>
                                            <Sheet>
                                                <Flex direction="column" gap={5}>
                                                    <Flex direction="column" gap={4}>
                                                        <Flex gap={4}>
                                                            <DatePicker
                                                                size="l"
                                                                value={dateTime()}
                                                            />
                                                            <DatePicker
                                                                size="l"
                                                                value={dateTime().add(7, 'days')}
                                                            />
                                                        </Flex>

                                                        <Select
                                                            size="l"
                                                            options={GUESTS_OPTIONS}
                                                            value={[GUESTS_OPTIONS[0].value]}
                                                            renderSelectedOption={(option) => {
                                                                return (
                                                                    <Flex gap={0.5}>
                                                                        <Text variant="subheader-1">
                                                                            Guests:
                                                                        </Text>
                                                                        <Text>
                                                                            {option.content}
                                                                        </Text>
                                                                    </Flex>
                                                                );
                                                            }}
                                                        />
                                                    </Flex>

                                                    <Flex direction="column" gap={1}>
                                                        <Flex
                                                            style={{
                                                                backgroundColor:
                                                                    contrastBackgroundColor,
                                                                borderRadius:
                                                                    'var(--g-border-radius-s)',
                                                            }}
                                                            alignSelf="stretch"
                                                            spacing={{px: 4, py: 3}}
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                        >
                                                            <Text variant="subheader-1">
                                                                for 8 nights:
                                                            </Text>
                                                            <Text variant="header-1">
                                                                RUB 33,600
                                                            </Text>
                                                        </Flex>

                                                        <Flex
                                                            spacing={{px: 4, py: 2}}
                                                            alignSelf="stretch"
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                        >
                                                            <Text variant="body-1">
                                                                Give precost today
                                                            </Text>
                                                            <Text variant="subheader-1">
                                                                RUB 1,100
                                                            </Text>
                                                        </Flex>

                                                        <Divider />

                                                        <Flex
                                                            spacing={{px: 4, py: 2}}
                                                            alignSelf="stretch"
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                        >
                                                            <Text variant="body-1">Cleaning</Text>
                                                            <Text variant="subheader-1">
                                                                RUB 1,500
                                                            </Text>
                                                        </Flex>

                                                        <Divider />

                                                        <Flex
                                                            spacing={{px: 4, py: 2}}
                                                            alignSelf="stretch"
                                                            alignItems="center"
                                                            justifyContent="space-between"
                                                        >
                                                            <Text variant="body-1">
                                                                Pay of check-in
                                                            </Text>
                                                            <Text variant="subheader-1">
                                                                RUB 31,000
                                                            </Text>
                                                        </Flex>

                                                        <Divider />

                                                        <Button
                                                            size="s"
                                                            view="flat"
                                                            style={{margin: '0 auto'}}
                                                        >
                                                            More
                                                            <Icon data={ChevronDown} size={12} />
                                                        </Button>
                                                    </Flex>

                                                    <Flex direction="column" gap={2}>
                                                        <Text variant="subheader-1">
                                                            Booking Phone
                                                        </Text>

                                                        <Flex>
                                                            <Select
                                                                size="l"
                                                                options={[
                                                                    {value: '+7', content: '+7'},
                                                                ]}
                                                                pin="round-clear"
                                                                value={['+7']}
                                                                renderSelectedOption={(value) => {
                                                                    return (
                                                                        <div
                                                                            className={spacing({
                                                                                mr: 3,
                                                                            })}
                                                                        >
                                                                            {value.content}
                                                                        </div>
                                                                    );
                                                                }}
                                                            />
                                                            <TextInput
                                                                size="l"
                                                                placeholder="000 - 00 - 00"
                                                                pin="brick-round"
                                                            />
                                                        </Flex>

                                                        <Text variant="body-1" color="secondary">
                                                            We will send a confirmation code and
                                                            booking information
                                                        </Text>
                                                    </Flex>

                                                    <Flex>
                                                        <Text>
                                                            By clicking the Booking, you agree to
                                                            the terms of the{' '}
                                                            <Link href="#" underline>
                                                                user agreement
                                                            </Link>{' '}
                                                            and to the{' '}
                                                            <Link href="#" underline>
                                                                processing of personal data
                                                            </Link>
                                                        </Text>
                                                    </Flex>

                                                    <Button size="xl" view="action">
                                                        <Icon data={BookOpen} />
                                                        Booking
                                                    </Button>
                                                </Flex>
                                            </Sheet>

                                            <Card view="outlined" spacing={{p: 5}}>
                                                <Flex
                                                    direction="column"
                                                    alignItems="center"
                                                    gap={1}
                                                >
                                                    <Text variant="body-1" color="secondary">
                                                        Reservation service:
                                                    </Text>
                                                    <Text variant="subheader-3">
                                                        +7 (000) 000-00-00
                                                    </Text>
                                                    <Text variant="body-1">
                                                        When calling, call the ad number:
                                                    </Text>

                                                    <div
                                                        className={spacing({py: 2, px: 5, mt: 2})}
                                                        style={{
                                                            border: '1px solid var(--g-color-base-brand)',
                                                            borderRadius:
                                                                'var(--g-border-radius-s)',
                                                            backgroundColor:
                                                                'var(--g-color-private-brand-200)',
                                                        }}
                                                    >
                                                        <Text
                                                            variant="body-2"
                                                            className={spacing({mt: 1})}
                                                            color="brand"
                                                        >
                                                            123456
                                                        </Text>
                                                    </div>
                                                </Flex>
                                            </Card>
                                        </Flex>
                                    </Col>
                                </Row>
                            </div>

                            <Sheet noRadius spacing={{m: 0, px: HORIZONTAL_SPACING, py: 9}}>
                                <div
                                    style={{
                                        maxWidth: '1080px',
                                        width: '1080px',
                                    }}
                                >
                                    <Row space={0}>
                                        <Col s={8}>
                                            <Flex>
                                                <Flex direction="column" gap={4} grow={1}>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                </Flex>

                                                <Flex direction="column" gap={4} grow={1}>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                </Flex>

                                                <Flex direction="column" gap={4} grow={1}>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                    <Text>Menu item</Text>
                                                </Flex>
                                            </Flex>
                                        </Col>

                                        <Col s={4}>
                                            <Flex gap={3} direction="column">
                                                <Text variant="subheader-3">
                                                    Download application
                                                </Text>
                                                <Flex gap={3}>
                                                    <Card overflow="hidden" view="clear">
                                                        <Flex
                                                            spacing={{p: 2}}
                                                            gap={2}
                                                            alignItems="center"
                                                            style={{
                                                                backgroundColor: isLightTheme
                                                                    ? 'rgba(0,0,0,0.85)'
                                                                    : 'rgba(0,0,0,0.90)',
                                                            }}
                                                        >
                                                            <img
                                                                src={apple.src}
                                                                style={{
                                                                    height: '24px',
                                                                    width: '20px',
                                                                }}
                                                            />

                                                            <Flex direction="column">
                                                                <Text
                                                                    variant="caption-1"
                                                                    style={{color: 'white'}}
                                                                >
                                                                    Download on the
                                                                </Text>
                                                                <Text
                                                                    variant="subheader-1"
                                                                    style={{color: 'white'}}
                                                                >
                                                                    App Store
                                                                </Text>
                                                            </Flex>
                                                        </Flex>
                                                    </Card>

                                                    <Card overflow="hidden" view="clear">
                                                        <Flex
                                                            spacing={{p: 2}}
                                                            alignItems="center"
                                                            gap={2}
                                                            style={{
                                                                backgroundColor: isLightTheme
                                                                    ? 'rgba(0,0,0,0.85)'
                                                                    : 'rgba(0,0,0,0.90)',
                                                            }}
                                                        >
                                                            <img
                                                                src={playstore.src}
                                                                style={{
                                                                    height: '24px',
                                                                    width: '20px',
                                                                }}
                                                            />

                                                            <Flex
                                                                direction="column"
                                                                style={{color: 'white'}}
                                                            >
                                                                <Text variant="caption-1">
                                                                    GET IT ON
                                                                </Text>
                                                                <Text variant="subheader-1">
                                                                    Google Play
                                                                </Text>
                                                            </Flex>
                                                        </Flex>
                                                    </Card>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                    </Row>
                                </div>

                                <Divider className={spacing({my: 9})} />

                                <div>
                                    <Flex justifyContent="space-between" alignItems="center">
                                        <Text variant="body-1" color="secondary">
                                            © 2011—{new Date().getFullYear()} Copyright
                                        </Text>

                                        <Flex gap={4} alignItems="center">
                                            <Text variant="body-1">Privacy Policy</Text>
                                            <Text variant="body-1">Terms of Use</Text>
                                        </Flex>
                                    </Flex>
                                </div>
                            </Sheet>
                        </div>
                    </Flex>
                );
            }}
        </PreviewWrapper>
    );
}
