import React from "react"
import styles from "./index.module.scss"

export interface ButtonProps {
    onClick?: () => void;
    children: string | JSX.Element;
    small?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    type?: "button" | "submit" | "reset"
}

export const Button: React.FC<ButtonProps> = ({ small, children, disabled, secondary, type, ...props }) => {
    return (
        <button type={type} disabled={disabled} className={`${styles.button}
         ${small && styles.smallButton}
         ${disabled && styles.disabledButton}
         ${secondary && styles.secondaryButton}
         `}
            {...props}>{children}</button>
    )
}