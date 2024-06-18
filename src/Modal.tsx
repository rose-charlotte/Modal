import { ReactElement, forwardRef, useCallback, useImperativeHandle, useRef } from "react";
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
                <h1>{props.title}</h1>
                <div>{props.children}</div>
            </div>
            <div className={style.btnContainer}></div>
            <button className={style.closeBtn} onClick={close}>
                close
            </button>
        </dialog>
    );
});

export interface ModalProps {
    title?: string;
    onClose?: () => boolean;
    children?: ReactElement;
}

export interface ModalHandle {
    close: () => void;
    show: () => void;
}
