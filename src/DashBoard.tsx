import { useState } from "react";
import { Modal } from "./Modal";

export function DashBoard() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    console.log(isOpen);
    return (
        <div>
            {!isOpen && <button onClick={toggleModal}>Open modal</button>}
            <Modal isOpen={isOpen} onClose={toggleModal} />
        </div>
    );
}
