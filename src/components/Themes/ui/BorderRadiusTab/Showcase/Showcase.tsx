import {PencilToLine} from 'landing-icons';
import {
    Button,
    Flex,
    FlexProps,
    Label,
    RadioButton,
    TextInput,
    Theme,
    ThemeProvider,
} from 'landing-uikit';
import type {ButtonProps} from 'landing-uikit';
import {useTranslation} from 'next-i18next';
import React, {useMemo} from 'react';

import {block} from '../../../../../utils';

import './Showcase.scss';

const b = block('border-radius-showcase');

export type ShowcaseProps = {
    color?: string;
    theme: Theme;
    style?: string;
};

type ShowcaseBlockProps = FlexProps & {
    text: string;
};

const BlockWrapper = (props: FlexProps) => (
    <Flex alignItems={'flex-start'} gap={4} {...props}>
        {props.children}
    </Flex>
);
const LabelBlock = (props: ShowcaseBlockProps) => (
    <BlockWrapper {...props}>
        <Label size="xs">{props.text}</Label>
        <Label size="s">{props.text}</Label>
        <Label size="m">{props.text}</Label>
    </BlockWrapper>
);

const getIconSize = (size: ButtonProps['size']) => {
    switch (size) {
        case 'xs':
            return 12;
        case 'xl':
            return 20;
        default:
            return 16;
    }
};

const ShowcaseButton = ({size, children}: Pick<ButtonProps, 'size' | 'children'>) => {
    const iconSize = getIconSize(size);
    return (
        <Button view="action" size={size}>
            <Button.Icon>
                <PencilToLine height={iconSize} width={iconSize} />
            </Button.Icon>
            {children}
        </Button>
    );
};

const ButtonBlock = (props: ShowcaseBlockProps) => (
    <BlockWrapper {...props}>
        <ShowcaseButton size="xs">{props.text}</ShowcaseButton>
        <ShowcaseButton size="s">{props.text}</ShowcaseButton>
        <ShowcaseButton size="m">{props.text}</ShowcaseButton>
        <ShowcaseButton size="l">{props.text}</ShowcaseButton>
        <ShowcaseButton size="xl">{props.text}</ShowcaseButton>
    </BlockWrapper>
);

const RadioButtonBlock = (props: ShowcaseBlockProps) => {
    const radioButtonOptions = useMemo(
        () => [
            {value: '1', content: props.text},
            {value: '2', content: props.text},
        ],
        [],
    );
    return (
        <BlockWrapper {...props}>
            <RadioButton size="s" options={radioButtonOptions} />
            <RadioButton size="m" options={radioButtonOptions} />
            <RadioButton size="l" options={radioButtonOptions} />
            <RadioButton size="xl" options={radioButtonOptions} />
        </BlockWrapper>
    );
};
const TextInputBlock = (props: ShowcaseBlockProps) => (
    <BlockWrapper {...props}>
        <TextInput size="s" placeholder={props.text} />
        <TextInput size="m" placeholder={props.text} />
        <TextInput size="l" placeholder={props.text} />
        <TextInput size="xl" placeholder={props.text} />
    </BlockWrapper>
);

const borderRadiusShowcaseCn = b();

export const Showcase: React.FC<ShowcaseProps> = ({color, theme, style}) => {
    const {t} = useTranslation('themes');

    return (
        <ThemeProvider
            theme={theme}
            scoped
            rootClassName={`${borderRadiusShowcaseCn} ${b({color, theme})}`}
        >
            {style ? <style>{`.${borderRadiusShowcaseCn}_theme_${theme} {${style}}`}</style> : null}
            <Flex className={b('container')} wrap gapRow={10}>
                <Flex direction="column" gap={10}>
                    <LabelBlock text={t('label')} />
                    <ButtonBlock text={t('button')} className={b('column-transform')} />
                    <RadioButtonBlock text={t('label')} className={b('column-transform')} />
                </Flex>

                <TextInputBlock text={t('input_placeholder')} className={b('text-input-block')} />
            </Flex>
        </ThemeProvider>
    );
};
