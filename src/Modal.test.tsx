/**
 * @jest-emvironment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

describe("Given I am on the modal page", () => {
    test("shows", () => {
        render(<Modal open />);

        const dialog = screen.getByRole("dialog");
        expect(dialog).toBeInTheDocument();
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

    test("accessible dialog pass axe", async () => {
        const { container } = render(<Modal open />);
        expect(await axe(container)).toHaveNoViolations();
    });
});
