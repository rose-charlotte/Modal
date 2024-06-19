import { useRef } from "react";
import { ButtonProps, Modal, ModalHandle } from "./Modal";

export function DashBoard() {
    const modalRef = useRef<ModalHandle>(null);

    const toggleModal = () => {
        modalRef.current?.show();
    };

    const buttons: ButtonProps[] = [
        {
            key: "delete",
            text: "delete",
            onClick: () => {
                console.log("cliqué");
            },
            style: { backgroundColor: "red", color: "white" },
        },
    ];

    return (
        <div>
            <button onClick={toggleModal}>Open modal</button>
            <Modal ref={modalRef} title="Modale ouverte" buttonProps={buttons}>
                <>
                    <p>je suis le children</p>
                </>
            </Modal>
        </div>
    );
}
