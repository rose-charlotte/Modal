import { ReactNode, forwardRef, useCallback, useImperativeHandle, useRef } from "react";
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
            <div className={style.container}>
                <h1>{props.title}</h1>
                <div>{props.children}</div>
                {props.buttonProps &&
                    props.buttonProps.map(button => (
                        <button aria-label={button.text} style={button.style} key={button.key} onClick={button.onClick}>
                            {button.text}
                        </button>
                    ))}
                {!props.hideCloseButton && (
                    <button aria-label="close button" className={style.closeBtn} onClick={close}>
                        close
                    </button>
                )}
            </div>
        </dialog>
    );
});

export interface ModalProps {
    title?: string;
    onClose?: () => boolean;
    children?: ReactNode;
    buttonProps?: ButtonProps[];
    hideCloseButton?: boolean;
}

export interface ModalHandle {
    close: () => void;
    show: () => void;
}

export interface ButtonProps {
    key: string;
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
}
