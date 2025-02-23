import {Breadcrumbs, BreadcrumbsProps} from '@gravity-ui/uikit';
import {FC} from 'react';

export const BreadcrumbsWrapper: FC<Omit<BreadcrumbsProps, 'items'>> = (props) => {
    return (
        <div style={{width: '100%'}}>
            <Breadcrumbs {...props} maxItems={props.maxItems ? Number(props.maxItems) : undefined}>
                {['Region', 'Country', 'City', 'District', 'Street'].map((item, index) => (
                    <Breadcrumbs.Item key={`${index}-${item}`}>{item}</Breadcrumbs.Item>
                ))}
            </Breadcrumbs>
        </div>
    );
};
