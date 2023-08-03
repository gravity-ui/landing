import {SandboxProps} from 'src/content/components';

type SandboxBlockTypes = {
    libId: string;
    componentId: string;
    sandboxConfig?: SandboxProps;
};

type OptionType = {
    value: string;
    content: string;
};

export type {SandboxBlockTypes, OptionType};
