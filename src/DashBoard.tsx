import { useRef } from "react";
import { Modal, ModalHandle } from "./Modal";
import { FooterBtn } from "./Commons/Btn/FooterBtn";

export function DashBoard() {
    const modalRef = useRef<ModalHandle>(null);

    const toggleModal = () => {
        modalRef.current?.show();
    };

    const onFooterBtnClick = () => {
        console.log("cliqué");
        modalRef.current?.close();
    };

    return (
        <div>
            <button onClick={toggleModal}>Open modal</button>
            <Modal ref={modalRef} title="Modale ouverte">
                <div>
                    <p>je suis le children</p>
                    <FooterBtn text="cancel" onClick={onFooterBtnClick} isSelected={true} />
                    <FooterBtn text="validated" onClick={() => console.log("validé")} isSelected={false} />
                </div>
            </Modal>
        </div>
    );
}
