import classnames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

export interface ButtonPropsType {
  onClick?: () => void;
  children: string | JSX.Element;
  small?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
  isDefault?: boolean;
}

export const Button: React.FC<
  ButtonPropsType & React.HTMLAttributes<HTMLButtonElement>
> = ({
  small,
  children,
  disabled,
  secondary,
  type = 'submit',
  className,
  onClick,
  isDefault = true,
}) => {
  const classNames = classnames(className, {
    [styles.smallButton]: small,
    [styles.disabledButton]: disabled,
    [styles.secondaryButton]: secondary,
    [styles.button]: isDefault,
  });
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={disabled}
      className={classNames}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
