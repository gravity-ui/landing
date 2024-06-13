export type BaseColor = {
    token: string;
    title: string;
    color: string;
};

export type ColorGroup = BaseColor & {
    privateColors: BaseColor[];
};
