/**
 * @jest-emvironment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";

describe("Given I am on the modal page", () => {
    test("shows", () => {
        render(<Modal open />);

        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
    });

    test("check Close button", () => {
        render(<Modal open />);
        const closeBtn = screen.queryByRole("button", { name: "close" });
        expect(closeBtn).toBeInTheDocument();
    });
    test("click on the close button to close the modal", () => {
        render(<Modal open />);
        const closeBtn = screen.queryByRole("button", { name: "close" });
        fireEvent.click(closeBtn!);
        const dialog = screen.queryByRole("dialog");
        expect(dialog).not.toBeInTheDocument();
    });

    test("check close button is hidden when specified by the hideCloseButtonProps", () => {
        render(<Modal open hideCloseButton />);
        const closeBtn = screen.queryByRole("button", { name: "close" });
        expect(closeBtn).not.toBeInTheDocument();
    });

    const button = [
        {
            key: "delete",
            text: "delete",
            onClick: () => {
                alert("cliqué");
            },
            style: { backgroundColor: "red", color: "white" },
        },
    ];
    test("add a new button", () => {
        render(<Modal open buttonProps={button} />);
        const newBtn = screen.queryByText("delete");
        expect(newBtn).toBeInTheDocument();
    });
    test("the function of the button", () => {
        global.alert = jest.fn();
        render(<Modal open buttonProps={button} />);
        const newBtn = screen.queryByText("delete");
        fireEvent.click(newBtn!);

        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});
