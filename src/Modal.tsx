import { ReactNode, useCallback, useEffect, useRef } from "react";
import style from "./Modal.module.scss";

export function Modal(props: ModalProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { open } = props;

    const close = useCallback(() => {
        dialogRef.current?.close();
    }, []);

    const show = useCallback(() => {
        dialogRef.current?.showModal();
    }, []);

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
                            disabled={button.disabled}
                            style={button.styles?.style}
                            key={button.key}
                            onClick={button.onClick}
                            className={button.styles?.className}
                        >
                            {button.text}
                        </button>
                    ))}
            </div>
        </dialog>
    );
}

export interface ModalProps {
    open: boolean;
    title?: string;
    children?: ReactNode;
    buttonProps?: ButtonProps[];
    styles?: ModalStyles;
}

export interface ButtonProps {
    key: string;
    disabled?: boolean;
    text: string;
    onClick: () => void;
    styles?: CombinedStyles;
}

export interface ModalStyles {
    dialog?: CombinedStyles;
    container?: CombinedStyles;
    title?: CombinedStyles;
}

export interface CombinedStyles {
    className?: string;
    style?: React.CSSProperties;
}
