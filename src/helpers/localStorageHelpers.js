const colors = [
    '--page-background',
    '--labels',
    '--text-color',
    '--time-background'
];

export const getColors = () => {
    const style = getComputedStyle(document.body);
    let result = {};
    colors.map(color => {
        const local = localStorage.getItem(color);
        let lc;
        if (!local) {
            const fromStyle = style.getPropertyValue(color);
            localStorage.setItem(color, fromStyle);
            lc = fromStyle;
        } else {
            lc = local;
        }
        result[color] = lc;
    });
    return result;
};

export const setColors = (incomingColor = getColors()) => {
    const root = document.documentElement;
    Object.keys(incomingColor).map(id => {
        let color = incomingColor[id];
        root.style.setProperty(id, color);
        localStorage.setItem(id, color);
    });
}

export const setDefaultColors = () => setColors({
    '--page-background': '#2B494A',
    '--text-color': '#E90C7B',
    '--labels': '#528A89',
    '--time-background': '#1C2C34',
});