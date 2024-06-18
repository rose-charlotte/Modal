import { useRef } from "react";
import { Modal, ModalHandle } from "./Modal";

export function DashBoard() {
    const modalRef = useRef<ModalHandle>(null);

    const toggleModal = () => {
        modalRef.current?.show();
    };

    return (
        <div>
            <button onClick={toggleModal}>Open modal</button>
            <Modal ref={modalRef} />
        </div>
    );
}
