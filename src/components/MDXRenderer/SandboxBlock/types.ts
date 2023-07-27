type SandboxBlockTypes = {
    component: string;
};

type OptionType = {
    value: string;
    content: string;
};

type OptionsType = {
    [key: string]: {
        [key: string]: {
            [key: string]: OptionType[] | string[];
        };
    };
};

export type {SandboxBlockTypes, OptionType, OptionsType};
