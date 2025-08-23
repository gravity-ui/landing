import {Card, CardProps, Flex, Icon, IconData, Text, spacing} from '@gravity-ui/uikit';
import chunk from 'lodash/chunk';
import {PropsWithChildren} from 'react';

export function Sheet({
    children,
    noRadius = false,
    spacing: cardSpacing = {py: 5, px: 6},
    style = {},
}: PropsWithChildren & {
    noRadius?: boolean;
} & Pick<CardProps, 'spacing' | 'style'>) {
    return (
        <Card
            view="clear"
            spacing={cardSpacing}
            style={{
                background: 'var(--g-color-base-background)',
                borderRadius: noRadius ? '0px' : undefined,
                ...style,
            }}
        >
            {children}
        </Card>
    );
}

export function SheetInfoItems({
    items,
    addBottomMargin,
}: {
    items: Array<{value: string; title: string}>;
    addBottomMargin?: boolean;
}) {
    return (
        <Flex
            alignItems="center"
            justifyContent="space-between"
            className={addBottomMargin ? spacing({mb: 5}) : undefined}
        >
            {items.map((item, index) => {
                return (
                    <Flex key={index} direction="column" alignItems="center" gap={4} grow={1}>
                        <Text variant="subheader-2">{item.value}</Text>
                        <Text variant="body-1" color="secondary">
                            {item.title}
                        </Text>
                    </Flex>
                );
            })}
        </Flex>
    );
}

export function SheetMailTitle({children}: PropsWithChildren) {
    return (
        <div className={spacing({mb: 5})}>
            <Text as="div" variant="subheader-3">
                {children}
            </Text>
        </div>
    );
}

export function SheetMailSubtitle({children}: PropsWithChildren) {
    return (
        <div className={spacing({mb: 5})}>
            <Text variant="subheader-2">{children}</Text>
        </div>
    );
}

export function SheetList({
    items,
    itemsPerColumn,
    addBottomMargin,
}: {
    itemsPerColumn: number;
    items: Array<{
        title: string;
        icon: IconData;
    }>;
    addBottomMargin?: boolean;
}) {
    const chunks = chunk(items, itemsPerColumn);

    return (
        <Flex
            as="ul"
            direction={'row'}
            style={{listStyle: 'none', padding: 0}}
            className={addBottomMargin ? spacing({mb: 5}) : undefined}
        >
            {chunks.map((itemsInChunk, index) => {
                return (
                    <Flex
                        key={index}
                        grow={1}
                        gap={3}
                        as="ul"
                        direction={'column'}
                        style={{listStyle: 'none', margin: 0, padding: 0}}
                    >
                        {itemsInChunk.map((item, itemIndex) => {
                            return (
                                <Flex
                                    as="li"
                                    key={itemIndex}
                                    gap={3}
                                    style={{margin: 0, padding: 0}}
                                >
                                    <Icon data={item.icon} size={16} />
                                    <Text variant="body-1">{item.title}</Text>
                                </Flex>
                            );
                        })}
                    </Flex>
                );
            })}
        </Flex>
    );
}
