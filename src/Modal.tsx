import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import style from "./Modal.module.scss";

export const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(props: ModalProps, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { onClose } = props;

    const close = useCallback(() => {
        const canClose = onClose?.();
        if (canClose ?? true) {
            dialogRef.current?.close();
        }
    }, [dialogRef, onClose]);

    const show = useCallback(() => {
        dialogRef.current?.showModal();
    }, [dialogRef]);

    useImperativeHandle(
        ref,
        () => {
            return {
                close,
                show,
            };
        },
        [close, show]
    );

    return (
        <dialog ref={dialogRef}>
            <div className={style.mainContent}>
                <h1>Modale ouverte</h1>
                <div>Children</div>
            </div>
            <div className={style.btnContainer}>
                <button>Edit</button>
                <button>Cancel</button>
                <button>Validate</button>
            </div>
            <button className={style.closeBtn} onClick={close}>
                close
            </button>
        </dialog>
    );
});

export interface ModalProps {
    onClose?: () => boolean;
}

export interface ModalHandle {
    close: () => void;
    show: () => void;
}
