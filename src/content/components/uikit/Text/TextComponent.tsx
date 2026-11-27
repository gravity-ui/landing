import {Text, TextProps} from '@gravity-ui/uikit-v8';

interface TextComponentProps extends TextProps {
    text: string;
}

export const TextComponent = ({
    text,
    variant,
    ellipsis,
    whiteSpace,
    wordBreak,
    color,
}: TextComponentProps) => (
    <Text
        variant={variant}
        ellipsis={ellipsis}
        whiteSpace={whiteSpace}
        wordBreak={wordBreak}
        color={color}
    >
        {text}
    </Text>
);
