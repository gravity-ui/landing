import {Section} from '../types';

import guideActionTooltipContent from './content/ActionTooltip.mdx';
import guideAlertContent from './content/Alert.mdx';
import guideBasicsContent from './content/Basics.mdx';
import guideBrandingContent from './content/Branding.mdx';
import guideBreadcrumbsContent from './content/Breadcrumbs.mdx';
import guideCardContent from './content/Card.mdx';
import guideClipboardButtonContent from './content/ClipboardButton.mdx';
import guideColorContent from './content/Color.mdx';
import guideCornerRadiusContent from './content/CornerRadius.mdx';
// import guideDialogContent from './content/Dialog.mdx';
import guideDropdownMenuContent from './content/DropdownMenu.mdx';
import guideGridAndContainerContent from './content/GridAndContainer.mdx';
import guideHotkeyContent from './content/Hotkey.mdx';
import guideLabelContent from './content/Label.mdx';
import guideLinksContent from './content/Links.mdx';
import guideListItemContent from './content/ListItem.mdx';
// import guideLoaderContent from './content/Loader.mdx';
import guideModuleContent from './content/Module.mdx';
import guidePersonaContent from './content/Persona.mdx';
import guideRadioContent from './content/Radio.mdx';
import guideRadioButtonContent from './content/RadioButton.mdx';
import guideRadioGroupContent from './content/RadioGroup.mdx';
import guideResourcesContent from './content/Resources.mdx';
import guideSkeletonContent from './content/Skeleton.mdx';
import guideSpinContent from './content/Spin.mdx';
import guideSwitchContent from './content/Switch.mdx';
import guideTextAreaContent from './content/TextArea.mdx';
import guideTextInputContent from './content/TextInput.mdx';
// import guideToasterContent from './content/Toaster.mdx';
import guideTooltipContent from './content/Tooltip.mdx';
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
        {
            id: 'grid-and-container',
            title: 'Grid and container',
            description: '',
            content: guideGridAndContainerContent,
        },
        {
            id: 'module',
            title: 'Module and spacing system',
            description: '',
            content: guideModuleContent,
        },
    ],
};

export const guides: Section = {
    id: 'guides',
    title: 'Design guides',
    description: 'Design guides description',
    articles: [
        {
            id: 'action-tooltip',
            title: 'Action Tooltip',
            description: '',
            content: guideActionTooltipContent,
        },
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
        {
            id: 'card',
            title: 'Card',
            description: '',
            content: guideCardContent,
        },
        {
            id: 'clipboard-button',
            title: 'Clipboard Button',
            description: '',
            content: guideClipboardButtonContent,
        },
        // {
        //     id: 'dialog',
        //     title: 'Dialog',
        //     description: '',
        //     content: guideDialogContent,
        // },
        {
            id: 'dropdown-menu',
            title: 'DropdownMenu',
            description: '',
            content: guideDropdownMenuContent,
        },
        {
            id: 'hotkey',
            title: 'Hotkey',
            description: '',
            content: guideHotkeyContent,
        },
        {
            id: 'label',
            title: 'Label',
            description: '',
            content: guideLabelContent,
        },
        {
            id: 'links',
            title: 'Links',
            description: '',
            content: guideLinksContent,
        },
        {
            id: 'list-item',
            title: 'List and list-item',
            description: '',
            content: guideListItemContent,
        },
        // {
        //     id: 'loader',
        //     title: 'Loader',
        //     description: '',
        //     content: guideLoaderContent,
        // },
        {
            id: 'persona',
            title: 'Persona',
            description: '',
            content: guidePersonaContent,
        },
        {
            id: 'radio',
            title: 'Radio',
            description: '',
            content: guideRadioContent,
        },
        {
            id: 'radio-button',
            title: 'Radio Button',
            description: '',
            content: guideRadioButtonContent,
        },
        {
            id: 'radio-group',
            title: 'Radio Group',
            description: '',
            content: guideRadioGroupContent,
        },
        {
            id: 'skeleton',
            title: 'Skeleton',
            description: '',
            content: guideSkeletonContent,
        },
        {
            id: 'spin',
            title: 'Spin',
            description: '',
            content: guideSpinContent,
        },
        {
            id: 'switch',
            title: 'Switch',
            description: '',
            content: guideSwitchContent,
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
            id: 'tooltip',
            title: 'Tooltip',
            description: '',
            content: guideTooltipContent,
        },
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
