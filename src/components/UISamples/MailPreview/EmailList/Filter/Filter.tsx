import {Magnifier} from '@gravity-ui/icons';
import {TextInput} from '@gravity-ui/uikit';
import debounce from 'lodash/debounce';
import {useMemo} from 'react';
import {block} from 'src/utils';

import {getBlockName} from '../../cn';

import './Filter.scss';

const b = block(getBlockName('filter'));

type FilterProps = {
    onUpdate: (value: string) => void;
};

export const Filter = ({onUpdate}: FilterProps) => {
    const debounceFilter = useMemo(
        () =>
            debounce((newValue: string) => {
                onUpdate(newValue.trim().toLowerCase());
            }, 300),
        [],
    );

    return (
        <div className={b()}>
            <TextInput
                startContent={<Magnifier className={b('icon')} />}
                placeholder="Search"
                onUpdate={debounceFilter}
                defaultValue=""
            />
        </div>
    );
};
