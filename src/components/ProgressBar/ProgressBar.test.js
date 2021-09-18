import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";


describe("ProgressBar", () => {

    test("Progressbar width quality", async () => {
        render(<ProgressBar percent={50} width={500} />);
        const widthDiv = screen.getByLabelText('width');
        expect(widthDiv.style.width).toEqual("250px")
    });



})