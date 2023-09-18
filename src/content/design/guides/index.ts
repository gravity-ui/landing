import {Section} from '../types';

import guideClipboardButtonContent from './content/ClipboardButton.mdx';
import guideLabelContent from './content/Label.mdx';
import guideRadioButtonContent from './content/RadioButton.mdx';
import guideToasterContent from './content/Toaster.mdx';
import guideUserAvatarContent from './content/UserAvatar.mdx';

export const guides: Section = {
    id: 'guides',
    title: 'Design guides',
    description: 'Design guides description',
    articles: [
        {
            id: 'clipboard-button',
            title: 'Clipboard Button',
            description: '',
            content: guideClipboardButtonContent,
        },
        {
            id: 'label',
            title: 'Label',
            description: '',
            content: guideLabelContent,
        },
        {
            id: 'radio-button',
            title: 'Radio Button',
            description: '',
            content: guideRadioButtonContent,
        },
        {
            id: 'toaster',
            title: 'Toaster',
            description: '',
            content: guideToasterContent,
        },
        {
            id: 'user-avatar',
            title: 'User Avatar',
            description: '',
            content: guideUserAvatarContent,
        },
    ],
};
