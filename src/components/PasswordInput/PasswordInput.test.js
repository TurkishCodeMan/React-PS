import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";
import userEvent from "@testing-library/user-event";

test("hides pass quality by default", () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => { }}
        value="Uisi44"

    />).toJSON();
    expect(tree).toMatchSnapshot();
});


test("toggle input type show/hide pass clicked", () => {
    render(<PasswordInput
        htmlId="test"
        name="test"
        value="aa"
        placeholder="pass"
        onChange={() => { }}
        showVisibilityToggle
    />)

    const toggleArea = screen.getByLabelText('toggle');
    const ps = screen.getByPlaceholderText('pass');
    expect(toggleArea).toBeInTheDocument();
    expect(ps.type).toMatch('password');
    userEvent.click(toggleArea);
    expect(ps.type).toMatch('text')
})