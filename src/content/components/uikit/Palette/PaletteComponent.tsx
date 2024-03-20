import {Palette, PaletteOption, PaletteProps} from '@gravity-ui/uikit';

type PaletteComponentProps = Pick<PaletteProps, 'size' | 'columns' | 'disabled' | 'multiple'>;

const options: PaletteOption[] = [
    {content: '😊', value: 'value-1', title: 'smiling-face'},
    {content: '❤️', value: 'value-2', title: 'heart'},
    {content: '👍', value: 'value-3', title: 'thumbs-up'},
    {content: '😂', value: 'value-4', title: 'laughing'},
    {content: '😍', value: 'value-5', title: 'hearts-eyes'},
    {content: '😎', value: 'value-6', title: 'cool'},
    {content: '😛', value: 'value-7', title: 'tongue'},
    {content: '😡', value: 'value-8', title: 'angry'},
    {content: '😢', value: 'value-9', title: 'sad'},
    {content: '😯', value: 'value-10', title: 'surprised'},
    {content: '😱', value: 'value-11', title: 'face-screaming'},
    {content: '🤗', value: 'value-12', title: 'smiling-face-with-open-hands'},
    {content: '🤢', value: 'value-13', title: 'nauseated'},
    {content: '🤥', value: 'value-14', title: 'lying-face'},
    {content: '🤩', value: 'value-15', title: 'star-struck'},
    {content: '🤭', value: 'value-16', title: 'face-with-hand-over-mouth'},
    {content: '🤮', value: 'value-17', title: 'vomiting'},
    {content: '🥳', value: 'value-18', title: 'partying'},
    {content: '🥴', value: 'value-19', title: 'woozy'},
    {content: '🥶', value: 'value-20', title: 'cold-face'},
];

export const PaletteComponent = ({size, columns, disabled, multiple}: PaletteComponentProps) => (
    <Palette
        size={size}
        columns={columns}
        disabled={disabled}
        multiple={multiple}
        options={options}
    />
);
