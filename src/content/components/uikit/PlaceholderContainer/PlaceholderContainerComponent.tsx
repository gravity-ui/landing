import {PlaceholderContainer, PlaceholderContainerProps} from '@gravity-ui/uikit';
import React from 'react';

export const PlaceholderContainerComponent = (props: PlaceholderContainerProps) => {
    return (
        <PlaceholderContainer
            {...props}
            image={
                <svg
                    width="230"
                    height="230"
                    viewBox="0 0 230 230"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        <rect
                            fill="#DDDDDD"
                            height="100%"
                            transform="matrix(1 0 0 1 0 0)"
                            width="100%"
                        />
                        <text
                            fill="#999999"
                            fontFamily="Sans-serif"
                            fontSize="16"
                            strokeWidth="0"
                            textAnchor="middle"
                            transform="matrix(1.88041 0 0 1.88041 -48.1289 -81.7475)"
                            x="86.49"
                            y="114"
                        >
                            1:1
                        </text>
                    </g>
                </svg>
            }
            actions={[
                {
                    text: 'Press here',
                    onClick: () => alert('Placeholder container button clicked!'),
                },
            ]}
        />
    );
};
