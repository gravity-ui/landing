import {Card, Text} from '@gravity-ui/uikit';
import React, {FC} from 'react';
import {block} from 'src/utils';

import {getLibVersion} from '../../utils';

import './LibraryVersion.scss';

const b = block('library-version');

type Props = {
    id: string | undefined;
};

const LibraryVersion: FC<Props> = ({id}) => {
    const libraryVersion = getLibVersion(id);

    if (!libraryVersion) {
        return null;
    }

    return (
        <Card className={b()} theme="warning" view="outlined">
            <Text color="warning">{libraryVersion}</Text>
        </Card>
    );
};

export default LibraryVersion;
