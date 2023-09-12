import {Breadcrumbs, BreadcrumbsProps} from '@gravity-ui/uikit';
import {FC} from 'react';

export const BreadcrumbsWrapper: FC<Omit<BreadcrumbsProps, 'items'>> = (props) => {
    return (
        <div style={{width: '220px'}}>
            <Breadcrumbs
                {...props}
                items={[
                    {
                        text: 'Region',
                        action: () => {},
                    },
                    {
                        text: 'Country',
                        action: () => {},
                    },
                    {
                        text: 'City',
                        action: () => {},
                    },
                    {
                        text: 'District',
                        action: () => {},
                    },
                    {
                        text: 'Street',
                        action: () => {},
                    },
                ]}
                firstDisplayedItemsCount={Number(props.firstDisplayedItemsCount)}
                lastDisplayedItemsCount={Number(props.lastDisplayedItemsCount)}
            />
        </div>
    );
};
