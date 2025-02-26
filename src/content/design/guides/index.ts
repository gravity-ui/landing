import {Section} from '../types';

import guideActionTooltipContent from './content/ActionTooltip.mdx';
import guideAlertContent from './content/Alert.mdx';
import guideBasicsContent from './content/Basics.mdx';
import guideBrandingContent from './content/Branding.mdx';
import guideBreadcrumbsContent from './content/Breadcrumbs.mdx';
import guideButtonContent from './content/Button.mdx';
import guideCardContent from './content/Card.mdx';
import guideChangelogDialogContent from './content/ChangelogDialog.mdx';
import guideCheckboxContent from './content/Checkbox.mdx';
import guideClipboardButtonContent from './content/ClipboardButton.mdx';
import guideColorContent from './content/Color.mdx';
import guideCornerRadiusContent from './content/CornerRadius.mdx';
import guideDialogContent from './content/Dialog.mdx';
import guideDropdownMenuContent from './content/DropdownMenu.mdx';
import guideGridAndContainerContent from './content/GridAndContainer.mdx';
import guideHotkeyContent from './content/Hotkey.mdx';
import guideLabelContent from './content/Label.mdx';
import guideLinksContent from './content/Links.mdx';
import guideListItemContent from './content/ListItem.mdx';
import guideLoaderContent from './content/Loader.mdx';
import guideModuleContent from './content/Module.mdx';
import guidePaginatorContent from './content/Paginator.mdx';
import guidePopoverContent from './content/Popover.mdx';
import guidePopupContent from './content/Popup.mdx';
import guideProgressContent from './content/Progress.mdx';
import guideRadioContent from './content/Radio.mdx';
import guideRadioGroupContent from './content/RadioGroup.mdx';
import guideResourcesContent from './content/Resources.mdx';
import guideSegmentedRadioGroupContent from './content/SegmentedRadioGroup.mdx';
import guideSelectContent from './content/Select.mdx';
import guideSkeletonContent from './content/Skeleton.mdx';
import guideSpinContent from './content/Spin.mdx';
import guideSwitchContent from './content/Switch.mdx';
import guideTableContent from './content/Table.mdx';
import guideTabsContent from './content/Tabs.mdx';
import guideTextAreaContent from './content/TextArea.mdx';
import guideTextInputContent from './content/TextInput.mdx';
import guideToasterContent from './content/Toaster.mdx';
import guideTooltipContent from './content/Tooltip.mdx';
import guideTypographyContent from './content/Typography.mdx';
import guideUserContent from './content/User.mdx';
import guideUserLabelContent from './content/UserLabel.mdx';
import guideActionTooltipContentRu from './content/ru/ActionTooltip.mdx';
import guideAlertContentRu from './content/ru/Alert.mdx';
import guideBasicsContentRu from './content/ru/Basics.mdx';
import guideBrandingContentRu from './content/ru/Branding.mdx';
import guideBreadcrumbsContentRu from './content/ru/Breadcrumbs.mdx';
import guideButtonContentRu from './content/ru/Button.mdx';
import guideCardContentRu from './content/ru/Card.mdx';
import guideChangelogDialogContentRu from './content/ru/ChangelogDialog.mdx';
import guideCheckboxContentRu from './content/ru/Checkbox.mdx';
import guideClipboardButtonContentRu from './content/ru/ClipboardButton.mdx';
import guideColorContentRu from './content/ru/Color.mdx';
import guideCornerRadiusContentRu from './content/ru/CornerRadius.mdx';
import guideDialogContentRu from './content/ru/Dialog.mdx';
import guideDropdownMenuContentRu from './content/ru/DropdownMenu.mdx';
import guideGridAndContainerContentRu from './content/ru/GridAndContainer.mdx';
import guideHotkeyContentRu from './content/ru/Hotkey.mdx';
import guideLabelContentRu from './content/ru/Label.mdx';
import guideLinksContentRu from './content/ru/Links.mdx';
import guideListItemContentRu from './content/ru/ListItem.mdx';
import guideLoaderContentRu from './content/ru/Loader.mdx';
import guideModuleContentRu from './content/ru/Module.mdx';
import guidePaginatorContentRu from './content/ru/Paginator.mdx';
import guidePopoverContentRu from './content/ru/Popover.mdx';
import guidePopupContentRu from './content/ru/Popup.mdx';
import guideProgressContentRu from './content/ru/Progress.mdx';
import guideRadioContentRu from './content/ru/Radio.mdx';
import guideRadioGroupContentRu from './content/ru/RadioGroup.mdx';
import guideResourcesContentRu from './content/ru/Resources.mdx';
import guideSegmentedRadioGroupContentRu from './content/ru/SegmentedRadioGroup.mdx';
import guideSelectContentRu from './content/ru/Select.mdx';
import guideSkeletonContentRu from './content/ru/Skeleton.mdx';
import guideSpinContentRu from './content/ru/Spin.mdx';
import guideSwitchContentRu from './content/ru/Switch.mdx';
import guideTableContentRu from './content/ru/Table.mdx';
import guideTabsContentRu from './content/ru/Tabs.mdx';
import guideTextAreaContentRu from './content/ru/TextArea.mdx';
import guideTextInputContentRu from './content/ru/TextInput.mdx';
import guideToasterContentRu from './content/ru/Toaster.mdx';
import guideTooltipContentRu from './content/ru/Tooltip.mdx';
import guideTypographyContentRu from './content/ru/Typography.mdx';
import guideUserContentRu from './content/ru/User.mdx';
import guideUserLabelContentRu from './content/ru/UserLabel.mdx';

const inferString = (content: unknown) => {
    return content as string;
};

export const branding: Section = {
    id: 'branding',
    articles: [
        {
            id: 'resources',
            content: {
                en: inferString(guideResourcesContent),
                ru: inferString(guideResourcesContentRu),
            },
        },
        {
            id: 'basics',
            content: {
                en: inferString(guideBasicsContent),
                ru: inferString(guideBasicsContentRu),
            },
        },
        {
            id: 'color',
            content: {
                en: inferString(guideColorContent),
                ru: inferString(guideColorContentRu),
            },
        },
        {
            id: 'typography',
            content: {
                en: inferString(guideTypographyContent),
                ru: inferString(guideTypographyContentRu),
            },
        },
        {
            id: 'corner-radius',
            content: {
                en: inferString(guideCornerRadiusContent),
                ru: inferString(guideCornerRadiusContentRu),
            },
        },
        {
            id: 'branding',
            content: {
                en: inferString(guideBrandingContent),
                ru: inferString(guideBrandingContentRu),
            },
        },
        {
            id: 'grid-and-container',
            content: {
                en: inferString(guideGridAndContainerContent),
                ru: inferString(guideGridAndContainerContentRu),
            },
        },
        {
            id: 'module',
            content: {
                en: inferString(guideModuleContent),
                ru: inferString(guideModuleContentRu),
            },
        },
    ],
};

export const guides: Section = {
    id: 'guides',
    articles: [
        {
            id: 'action-tooltip',
            content: {
                en: inferString(guideActionTooltipContent),
                ru: inferString(guideActionTooltipContentRu),
            },
        },
        {
            id: 'alert',
            content: {
                en: inferString(guideAlertContent),
                ru: inferString(guideAlertContentRu),
            },
        },
        {
            id: 'breadcrumbs',
            content: {
                en: inferString(guideBreadcrumbsContent),
                ru: inferString(guideBreadcrumbsContentRu),
            },
        },
        {
            id: 'button',
            content: {
                en: inferString(guideButtonContent),
                ru: inferString(guideButtonContentRu),
            },
        },
        {
            id: 'card',
            content: {
                en: inferString(guideCardContent),
                ru: inferString(guideCardContentRu),
            },
        },
        {
            id: 'changelog-dialog',
            content: {
                en: inferString(guideChangelogDialogContent),
                ru: inferString(guideChangelogDialogContentRu),
            },
        },
        {
            id: 'checkbox',
            content: {
                en: inferString(guideCheckboxContent),
                ru: inferString(guideCheckboxContentRu),
            },
        },
        {
            id: 'clipboard-button',
            content: {
                en: inferString(guideClipboardButtonContent),
                ru: inferString(guideClipboardButtonContentRu),
            },
        },
        {
            id: 'dialog',
            content: {
                en: inferString(guideDialogContent),
                ru: inferString(guideDialogContentRu),
            },
        },
        {
            id: 'dropdown-menu',
            content: {
                en: inferString(guideDropdownMenuContent),
                ru: inferString(guideDropdownMenuContentRu),
            },
        },
        {
            id: 'hotkey',
            content: {
                en: inferString(guideHotkeyContent),
                ru: inferString(guideHotkeyContentRu),
            },
        },
        {
            id: 'label',
            content: {
                en: inferString(guideLabelContent),
                ru: inferString(guideLabelContentRu),
            },
        },
        {
            id: 'links',
            content: {
                en: inferString(guideLinksContent),
                ru: inferString(guideLinksContentRu),
            },
        },
        {
            id: 'list-item',
            content: {
                en: inferString(guideListItemContent),
                ru: inferString(guideListItemContentRu),
            },
        },
        {
            id: 'loader',
            content: {
                en: inferString(guideLoaderContent),
                ru: inferString(guideLoaderContentRu),
            },
        },
        {
            id: 'paginator',
            content: {
                en: inferString(guidePaginatorContent),
                ru: inferString(guidePaginatorContentRu),
            },
        },
        {
            id: 'popover',
            content: {
                en: inferString(guidePopoverContent),
                ru: inferString(guidePopoverContentRu),
            },
        },
        {
            id: 'popup',
            content: {
                en: inferString(guidePopupContent),
                ru: inferString(guidePopupContentRu),
            },
        },
        {
            id: 'progress',
            content: {
                en: inferString(guideProgressContent),
                ru: inferString(guideProgressContentRu),
            },
        },
        {
            id: 'radio',
            content: {
                en: inferString(guideRadioContent),
                ru: inferString(guideRadioContentRu),
            },
        },
        {
            id: 'segmented-radio-group',
            content: {
                en: inferString(guideSegmentedRadioGroupContent),
                ru: inferString(guideSegmentedRadioGroupContentRu),
            },
        },
        {
            id: 'radio-group',
            content: {
                en: inferString(guideRadioGroupContent),
                ru: inferString(guideRadioGroupContentRu),
            },
        },
        {
            id: 'select',
            content: {
                en: inferString(guideSelectContent),
                ru: inferString(guideSelectContentRu),
            },
        },
        {
            id: 'skeleton',
            content: {
                en: inferString(guideSkeletonContent),
                ru: inferString(guideSkeletonContentRu),
            },
        },
        {
            id: 'spin',
            content: {
                en: inferString(guideSpinContent),
                ru: inferString(guideSpinContentRu),
            },
        },
        {
            id: 'switch',
            content: {
                en: inferString(guideSwitchContent),
                ru: inferString(guideSwitchContentRu),
            },
        },
        {
            id: 'table',
            content: {
                en: inferString(guideTableContent),
                ru: inferString(guideTableContentRu),
            },
        },
        {
            id: 'tabs',
            content: {
                en: inferString(guideTabsContent),
                ru: inferString(guideTabsContentRu),
            },
        },
        {
            id: 'text-area',
            content: {
                en: inferString(guideTextAreaContent),
                ru: inferString(guideTextAreaContentRu),
            },
        },
        {
            id: 'text-input',
            content: {
                en: inferString(guideTextInputContent),
                ru: inferString(guideTextInputContentRu),
            },
        },
        {
            id: 'toaster',
            content: {
                en: inferString(guideToasterContent),
                ru: inferString(guideToasterContentRu),
            },
        },
        {
            id: 'tooltip',
            content: {
                en: inferString(guideTooltipContent),
                ru: inferString(guideTooltipContentRu),
            },
        },
        {
            id: 'user',
            content: {
                en: inferString(guideUserContent),
                ru: inferString(guideUserContentRu),
            },
        },
        {
            id: 'user-label',
            content: {
                en: inferString(guideUserLabelContent),
                ru: inferString(guideUserLabelContentRu),
            },
        },
    ],
};
