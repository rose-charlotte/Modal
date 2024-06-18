import style from "./Modal.module.scss";

export function Modal(props: ModalProps) {
    return (
        <div className={props.isOpen ? style.show : style.hide}>
            <span>Modale ouverte</span>
            <div>Children</div>
            <div>
                <button>Edit</button>
                <button>Cancel</button>
                <button>Validate</button>
            </div>
            <button onClick={props.onClose}>close</button>
        </div>
    );
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
