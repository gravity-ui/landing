import {Link, Xmark} from '@gravity-ui/icons';
import {FilePreview} from '@gravity-ui/uikit';
import type {FilePreviewProps} from '@gravity-ui/uikit';

type FilePreviewComponentProps = Omit<FilePreviewProps, 'className'>;

export const FilePreviewComponent = (props: FilePreviewComponentProps) => {
    const {selected, imageSrc, description, view = 'default'} = props;

    const file = {name: 'my-file.docs', type: 'text/docs'} as File;

    if (view === 'default') {
        const actions = [
            {icon: <Link width={14} height={14} />, title: 'Link', onClick: () => {}},
            {icon: <Xmark width={14} height={14} />, title: 'Close', onClick: () => {}},
        ];

        return (
            <FilePreview
                file={file}
                onClick={() => {}}
                selected={selected}
                imageSrc={imageSrc}
                description={description}
                view="default"
                actions={actions}
            />
        );
    }

    return (
        <FilePreview
            file={file}
            onClick={() => {}}
            selected={selected}
            imageSrc={imageSrc}
            description={description}
            view="compact"
        />
    );
};
