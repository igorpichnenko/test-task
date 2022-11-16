import React from 'react';
import styles from './index.module.scss';

export interface ButtonPropsType {
  onClick?: () => void;
  children: string | JSX.Element;
  small?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<ButtonPropsType> = ({
  small,
  children,
  disabled,
  secondary,
  type = 'submit',
  onClick,
}) => {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={`${styles.button}
         ${small && styles.smallButton}
         ${disabled && styles.disabledButton}
         ${secondary && styles.secondaryButton}
         `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
