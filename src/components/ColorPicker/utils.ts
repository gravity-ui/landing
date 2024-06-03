export const hexRegexp = /^#[a-fA-F0-9]{6}$/;
export const rgbRegexp = /^rgb\((\d{1,3}, ?){2}(\d{1,3})\)$/;
export const rgbaRegexp = /^rgba\((\d{1,3}, ?){3}((0(,|\.)[0-9]{1,2})|1)\)$/;

const numberRegexp = /\b\d+\b/g;

export const parseRgbStringToHex = (rgbString: string) => {
    let hexColor = '#';
    rgbString.match(new RegExp(numberRegexp, 'g'))?.forEach((val) => {
        const hex = Number(val).toString(16);

        hexColor += hex?.length === 1 ? `0${hex}` : hex;
    });

    return hexColor;
};
