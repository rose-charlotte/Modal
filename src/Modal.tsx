import style from "./Modal.module.scss";

export function Modal(props: ModalProps) {
    return (
        <dialog className={props.isOpen ? style.show : style.hide}>
            <div className={style.mainContent}>
                <h1>Modale ouverte</h1>
                <div>Children</div>
            </div>
            <div className={style.btnContainer}>
                <button>Edit</button>
                <button>Cancel</button>
                <button>Validate</button>
            </div>
            <button className={style.closeBtn} onClick={props.onClose}>
                close
            </button>
        </dialog>
    );
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
