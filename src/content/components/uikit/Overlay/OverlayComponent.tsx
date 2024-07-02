import {Box, Flex, Loader, Overlay} from '@gravity-ui/uikit';
import React from 'react';

type OverlayComponentProps = {
    visible?: boolean;
    background?: 'base' | 'float';
};

export const OverlayComponent = ({visible, background}: OverlayComponentProps) => {
    const anchorRef = React.useRef(null);

    return (
        <Box position="relative">
            <Flex
                ref={anchorRef}
                style={{
                    border: '2px dashed',
                }}
                width={100}
                height={100}
                color="var(--g-color-text-secondary)"
                alignItems="center"
                justifyContent="center"
            >
                Some text
            </Flex>
            <Overlay visible={visible} background={background}>
                <Loader />
            </Overlay>
        </Box>
    );
};
