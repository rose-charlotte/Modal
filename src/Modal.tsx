import { ReactNode, useCallback, useEffect, useRef } from "react";
import style from "./Modal.module.scss";

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

    const concatClassNames = (...classNames: (string | undefined)[]) =>
        classNames.reduce((previousClassName, className) => {
            if (!className) {
                return previousClassName;
            }

            if (!previousClassName) {
                return className;
            }

            return `${previousClassName} ${className}`;
        });

    useEffect(() => {
        if (open) {
            show();
        } else {
            close();
        }
    }, [open, close, show]);

    return (
        <dialog
            ref={dialogRef}
            className={concatClassNames(style.dialog, props.styles?.dialog?.className)}
            style={props.styles?.dialog?.style}
        >
            <div
                className={concatClassNames(style.container, props.styles?.container?.className)}
                style={props.styles?.container?.style}
            >
                {props.title && (
                    <h1
                        aria-label={props.title}
                        style={props.styles?.title?.style}
                        className={props.styles?.title?.className}
                    >
                        {props.title}
                    </h1>
                )}
                <div>{props.children}</div>
                {props.buttonProps &&
                    props.buttonProps.map(button => (
                        <button
                            aria-label={button.text}
                            style={button.styles?.style}
                            key={button.key}
                            onClick={button.onClick}
                            className={button.styles?.className}
                        >
                            {button.text}
                        </button>
                    ))}
                {!props.hideCloseButton && (
                    <button
                        aria-label="close"
                        className={concatClassNames(style.closeBtn, props.styles?.closeButton?.className)}
                        style={props.styles?.closeButton?.style}
                        onClick={close}
                    >
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
    styles?: ModalStyles;
}

export interface ButtonProps {
    key: string;
    text: string;
    onClick: () => void;
    styles?: CombinedStyles;
}

export interface ModalStyles {
    dialog?: CombinedStyles;
    container?: CombinedStyles;
    title?: CombinedStyles;
    closeButton?: CombinedStyles;
}

export interface CombinedStyles {
    className?: string;
    style?: React.CSSProperties;
}
