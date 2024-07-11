import { useState } from "react";
import { ButtonProps, Modal } from "./Modal";

export function DashBoard() {
    const [isOpened, setIsOpened] = useState(false);

    const buttons: ButtonProps[] = [
        {
            key: "delete",
            text: "delete",
            onClick: () => {
                alert("cliqué");
            },
            styles: {
                style: {
                    backgroundColor: "blue",
                    color: "white",
                },
            },
        },
    ];

    return (
        <div>
            <button onClick={() => setIsOpened(!isOpened)}>Open modal</button>
            <Modal
                open={isOpened}
                buttonProps={buttons}
                styles={{
                    dialog: {
                        style: {
                            backgroundColor: "violet",
                        },
                    },
                }}
            >
                <>
                    <p>je suis le children</p>
                </>
            </Modal>
        </div>
    );
}
