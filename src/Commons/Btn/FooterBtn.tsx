import style from "./FooterBtn.module.scss";

export function FooterBtn(props: FooterBtnProps) {
    return (
        <>
            {props.isSelected && (
                <button className={style.btn} onClick={props.onClick}>
                    <p className={style.btnText}>{props.text}</p>
                </button>
            )}
        </>
    );
}

export interface FooterBtnProps {
    text: string;
    onClick: () => void;
    isSelected: boolean;
}
