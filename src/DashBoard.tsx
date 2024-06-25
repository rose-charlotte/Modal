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
            style: { backgroundColor: "red", color: "white" },
        },
    ];

    return (
        <div>
            <button onClick={() => setIsOpened(!isOpened)}>Open modal</button>
            <Modal open={isOpened} title="Modale ouverte" buttonProps={buttons}>
                <>
                    <p>je suis le children</p>
                </>
            </Modal>
        </div>
    );
}
