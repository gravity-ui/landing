import {
    AlertCard,
    BreadcrumbsCard,
    ButtonsCard,
    CheckboxCard,
    IconsPromoCard,
    InputCard,
    LabelsCard,
    ListCard,
    LoaderCard,
    MenuCard,
    PaginationCard,
    // PopupCard,
    ProgressCard,
    RadioCard,
    SegmentCard,
    SkeletonCard,
    SpinnerCard,
    SwitchCard,
    TableCard,
    TabsCard,
    ToastersCard,
    UserLabelCard,
} from './components';

export const firstSliderItems = [
    LoaderCard,
    ButtonsCard,
    TabsCard,
    MenuCard,
    IconsPromoCard,
    TableCard,
    PaginationCard,
];

export const secondSliderItems = [
    ProgressCard,
    ListCard,
    SwitchCard,
    AlertCard,
    SkeletonCard,
    SegmentCard,
    InputCard,
];

export const thirdSliderItems = [
    RadioCard,
    LabelsCard,
    // TODO: fix
    // PopupCard,
    UserLabelCard,
    SpinnerCard,
    BreadcrumbsCard,
    CheckboxCard,
    ToastersCard,
];

export enum ColorTheme {
    Yellow = 'yellow',
    Blue = 'blue',
    Green = 'green',
    Red = 'red',
}

export const allColors = Object.values(ColorTheme);
