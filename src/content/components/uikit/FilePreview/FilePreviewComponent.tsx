import {FilePreview} from '@gravity-ui/uikit';
import type {FilePreviewProps} from '@gravity-ui/uikit';

type FilePreviewComponentProps = Omit<FilePreviewProps, 'className'>;

export const FilePreviewComponent = (props: FilePreviewComponentProps) => {
    const {selected, imageSrc, description, file, actions, onClick} = props;
    return (
        <FilePreview
            file={file}
            onClick={onClick}
            actions={actions}
            selected={selected}
            imageSrc={imageSrc}
            description={description}
        />
    );
};
