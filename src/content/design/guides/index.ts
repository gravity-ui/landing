import {Section} from '../types';

import guideAlertContent from './content/Alert.mdx';
import guideBasicsContent from './content/Basics.mdx';
import guideBrandingContent from './content/Branding.mdx';
import guideBreadcrumbsContent from './content/Breadcrumbs.mdx';
// import guideClipboardButtonContent from './content/ClipboardButton.mdx';
import guideColorContent from './content/Color.mdx';
import guideCornerRadiusContent from './content/CornerRadius.mdx';
import guideLabelContent from './content/Label.mdx';
// import guideLoaderContent from './content/Loader.mdx';
import guideRadioButtonContent from './content/RadioButton.mdx';
import guideResourcesContent from './content/Resources.mdx';
import guideTextAreaContent from './content/TextArea.mdx';
import guideTextInputContent from './content/TextInput.mdx';
// import guideToasterContent from './content/Toaster.mdx';
import guideTypographyContent from './content/Typography.mdx';
import guideUserContent from './content/User.mdx';
import guideUserAvatarContent from './content/UserAvatar.mdx';

export const branding: Section = {
    id: 'branding',
    title: 'General / Foundation',
    description: 'Design guides description',
    articles: [
        {
            id: 'resources',
            title: 'Resources',
            description: '',
            content: guideResourcesContent,
        },
        {
            id: 'basics',
            title: 'Basics',
            description: '',
            content: guideBasicsContent,
        },
        {
            id: 'color',
            title: 'Color',
            description: '',
            content: guideColorContent,
        },
        {
            id: 'typography',
            title: 'Typography',
            description: '',
            content: guideTypographyContent,
        },
        {
            id: 'corner-radius',
            title: 'Corner Radius',
            description: '',
            content: guideCornerRadiusContent,
        },
        {
            id: 'branding',
            title: 'Branding',
            description: '',
            content: guideBrandingContent,
        },
    ],
};

export const guides: Section = {
    id: 'guides',
    title: 'Design guides',
    description: 'Design guides description',
    articles: [
        {
            id: 'alert',
            title: 'Alert',
            description: '',
            content: guideAlertContent,
        },
        {
            id: 'breadcrumbs',
            title: 'Breadcrumbs',
            description: '',
            content: guideBreadcrumbsContent,
        },
        // {
        //     id: 'clipboard-button',
        //     title: 'Clipboard Button',
        //     description: '',
        //     content: guideClipboardButtonContent,
        // },
        {
            id: 'label',
            title: 'Label',
            description: '',
            content: guideLabelContent,
        },
        // {
        //     id: 'loader',
        //     title: 'Loader',
        //     description: '',
        //     content: guideLoaderContent,
        // },
        {
            id: 'radio-button',
            title: 'Radio Button',
            description: '',
            content: guideRadioButtonContent,
        },
        {
            id: 'text-area',
            title: 'Text Area',
            description: '',
            content: guideTextAreaContent,
        },
        {
            id: 'text-input',
            title: 'Text Input',
            description: '',
            content: guideTextInputContent,
        },
        // {
        //     id: 'toaster',
        //     title: 'Toaster',
        //     description: '',
        //     content: guideToasterContent,
        // },
        {
            id: 'user',
            title: 'User',
            description: '',
            content: guideUserContent,
        },
        {
            id: 'user-avatar',
            title: 'User Avatar',
            description: '',
            content: guideUserAvatarContent,
        },
    ],
};
