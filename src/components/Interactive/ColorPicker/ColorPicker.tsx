import {block} from '../../../utils';
import {useInteractiveContext} from '../InteractiveContext';
import {allColors} from '../constants';

import './ColorPicker.scss';

const b = block('color-picker');

export const ColorPicker = () => {
    const {changeColor, color: currentColor} = useInteractiveContext();

    return (
        <div className={b()}>
            {allColors.map((color) => (
                <div
                    key={color}
                    className={b('circle', {color, active: color === currentColor})}
                    onClick={() => changeColor(color)}
                >
                    <div className={b('circle-inner')} />
                </div>
            ))}
        </div>
    );
};
