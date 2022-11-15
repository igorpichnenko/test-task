import React from 'react';
import styles from './index.module.scss';

export interface TextInputPropsType {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  defaultValue?: string;
}

export const TextInput: React.FC<TextInputPropsType> = ({
  placeholder,
  disabled,
  required,
  name,
  defaultValue,
  ...props
}) => {

  return (
    <input
      required={required}
      className={styles.textInput}
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      defaultValue={defaultValue}
      {...props}
    />
  );
};

