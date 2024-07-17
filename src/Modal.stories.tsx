import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "example/Modal",
    component: Modal,
    decorators: [],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const NoContent: Story = {
    args: {},
};

export const WithTitle: Story = {
    args: {
        title: "With title",
    },
};

export const WithButtons: Story = {
    args: {
        title: "With buttons",
        buttonProps: [
            {
                key: "button1",
                text: "button1",
                onClick: () => {},
            },
        ],
    },
};

export const WithButtonsAndNoDefaultCloseButton: Story = {
    args: {
        title: "With buttons",
        buttonProps: [
            {
                key: "button1",
                text: "button1",
                onClick: () => {},
            },
        ],
    },
};

export const ModalWithDefinedStyle: Story = {
    args: {
        buttonProps: [
            {
                key: "button1",
                text: "Save",
                onClick: () => {},
                styles: {
                    style: {
                        backgroundColor: "blue",
                        color: "white",
                    },
                },
            },
        ],
        styles: {
            dialog: {
                style: {
                    backgroundColor: "violet",
                    color: "white",
                    borderRadius: "20px",
                },
            },
        },
    },
};
