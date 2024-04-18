import {Button, Sheet} from '@gravity-ui/uikit';
import React from 'react';

const getRandomText = (length: number) => {
    let result = '';

    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return result;
};

const EXTRA_INNER_CONTENT_MORE_THAN_VIEWPORT = getRandomText(1000);

type SheetComponentProps = {
    title: string;
    hideTopBar: boolean;
    allowHideOnContentScroll: boolean;
};

export const SheetComponent = ({
    title,
    hideTopBar,
    allowHideOnContentScroll,
}: SheetComponentProps) => {
    const [visible, setVisible] = React.useState(false);
    const [withExtraInnerContent, setWithExtraInnerContent] = React.useState(false);

    return (
        <React.Fragment>
            <Button onClick={() => setVisible(true)}>Show Sheet</Button>
            <Sheet
                visible={visible}
                onClose={() => setVisible(false)}
                title={title}
                hideTopBar={hideTopBar}
                allowHideOnContentScroll={allowHideOnContentScroll}
            >
                <div
                    style={{padding: '15px', display: 'flex', flexDirection: 'column', gap: '15px'}}
                >
                    {withExtraInnerContent && (
                        <div style={{wordBreak: 'break-word'}}>
                            {EXTRA_INNER_CONTENT_MORE_THAN_VIEWPORT}
                        </div>
                    )}
                    {withExtraInnerContent ? (
                        <Button
                            view="normal"
                            size="s"
                            width="max"
                            onClick={() => setWithExtraInnerContent(false)}
                        >
                            Remove content
                        </Button>
                    ) : (
                        <Button
                            view="action"
                            size="s"
                            width="max"
                            onClick={() => setWithExtraInnerContent(true)}
                        >
                            Add content
                        </Button>
                    )}
                    <Button view="outlined" size="s" width="max" onClick={() => setVisible(false)}>
                        Close
                    </Button>
                </div>
            </Sheet>
        </React.Fragment>
    );
};
