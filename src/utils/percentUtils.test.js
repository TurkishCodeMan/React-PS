import { getWidthAsPercentOfTotalWidth } from "./percentUtils";

test("Get Width Percent Test", () => {
    const result = getWidthAsPercentOfTotalWidth(50, 500);
    expect(result).toEqual(250);
})
