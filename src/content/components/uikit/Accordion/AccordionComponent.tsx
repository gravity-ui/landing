import {Accordion, AccordionProps} from '@gravity-ui/uikit';

type Props = {
    size: AccordionProps['size'];
    view: AccordionProps['view'];
    arrowPosition: AccordionProps['arrowPosition'];
    multiple: AccordionProps['multiple'];
};

export function AccordionComponent(props: Props) {
    const {arrowPosition, multiple, view, size} = props;
    return (
        <Accordion multiple={multiple} view={view} size={size} arrowPosition={arrowPosition}>
            <Accordion.Item summary={'Accordion summmary 1'}>
                Some content for this item
            </Accordion.Item>
            <Accordion.Item summary={'Accordion summmary 2'}>
                Some content for this item
            </Accordion.Item>
            <Accordion.Item summary={'Accordion summmary 3'}>
                Some content for this item
            </Accordion.Item>
        </Accordion>
    );
}
