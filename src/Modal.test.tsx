/**
 * @jest-emvironment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";

test("shows", () => {
    render(<Modal open />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
});
