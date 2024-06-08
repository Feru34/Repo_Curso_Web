import { render, screen, fireEvent } from "@testing-library/react"
import Checkbox from "../checkbox";

test("Defaults to Inactive label", ()=>{
    render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
    expect(screen.getByLabelText("Inactive")).toBeInTheDocument();
})


// test("Checkbox inactive by default", () => {
//     render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
//     const cb = screen.getByTestId("cb");
//     expect(cb).toBeInTheDocument();
//     expect(cb).not.toBeChecked();
// });

// test("Checkbox status and label changes when clicked", () => {
//     render(<Checkbox labelActive="Active" labelInactive="Inactive"/>);
//     fireEvent.click(screen.getByLabelText("Inactive"))

//     expect(screen.getByLabelText("Active")).toBeInTheDocument();

//     const cb = screen.getByTestId("cb");
//     expect(cb).toBeInTheDocument();
//     expect(cb).toBeChecked();
//   });