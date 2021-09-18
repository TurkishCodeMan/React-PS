export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
    return parseInt(totalWidth * (percent / 100), 10);
}