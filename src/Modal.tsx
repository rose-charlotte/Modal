import { ReactNode, useCallback, useEffect, useRef } from "react";
// import style from "./Modal.module.scss";

export function Modal(props: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { onClose, open } = props;

    const close = useCallback(() => {
        const canClose = onClose?.();
        if (canClose ?? true) {
            dialogRef.current?.close();
        }
    }, [dialogRef, onClose]);

    const show = useCallback(() => {
        dialogRef.current?.showModal();
    }, [dialogRef]);

    useEffect(() => {
        if (open) {
            show();
        } else {
            close();
        }
    }, [open, close, show]);

    return (
        <dialog ref={dialogRef}>
            <div className={/*style.container */ undefined}>
                <h1>{props.title}</h1>
                <div>{props.children}</div>
                {props.buttonProps &&
                    props.buttonProps.map(button => (
                        <button aria-label={button.text} style={button.style} key={button.key} onClick={button.onClick}>
                            {button.text}
                        </button>
                    ))}
                {!props.hideCloseButton && (
                    <button aria-label="close" className={/*style.closeBtn*/ undefined} onClick={close}>
                        close
                    </button>
                )}
            </div>
        </dialog>
    );
}

export interface ModalProps {
    open: boolean;
    title?: string;
    onClose?: () => boolean;
    children?: ReactNode;
    buttonProps?: ButtonProps[];
    hideCloseButton?: boolean;
}

export interface ButtonProps {
    key: string;
    text: string;
    onClick: () => void;
    style?: React.CSSProperties;
}
