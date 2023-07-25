import {Select} from '@gravity-ui/uikit';
import {FC, MutableRefObject, useRef, useState} from 'react';

import {block} from '../../../utils';

import {SandboxBlockTypes} from './types';

const b = block('sandbox-block');

const SandboxBlock: FC<SandboxBlockTypes> = ({component}) => {
    const [props, setProps] = useState({});
    const iframeRef = useRef() as MutableRefObject<HTMLIFrameElement | null>;

    const handleClick = () => {
        iframeRef?.current?.contentWindow?.postMessage(
            {
                view: 'action',
            },
            '*',
        );
    };

    console.log('propspso: ', props);

    return (
        <div className={`${b()}`}>
            <button onClick={handleClick}>Set Prop</button>
            <Select
                value={props?.size || ''}
                placeholder="Values"
                options={[
                    {
                        value: 'val1',
                        content: 'Value1',
                    },
                    {
                        value: 'val2',
                        content: 'Value2',
                    },
                    {
                        value: 'val3',
                        content: 'Value3',
                    },
                    {
                        value: 'val4',
                        content: 'Value4',
                    },
                ]}
                onUpdate={(nextValue) =>
                    setProps({
                        ...props,
                        ...nextValue,
                    })
                }
            />
            <iframe
                ref={iframeRef}
                src={`${window.location.origin}/sandbox/uikit/${component}`}
                frameBorder={0}
            />
        </div>
    );
};

export {SandboxBlock};
