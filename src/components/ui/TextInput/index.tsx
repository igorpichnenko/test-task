import React, { forwardRef, LegacyRef } from 'react';
import styles from './index.module.scss';

export interface TextInputPropsType {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  defaultValue?: string;
}

export const TextInput = forwardRef(
  (
    { placeholder, disabled, required, name, defaultValue }: TextInputPropsType,
    ref: LegacyRef<HTMLInputElement> | undefined,
  ) => {
    return (
      <input
        required={required}
        className={styles.textInput}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
        ref={ref}
      />
    );
  },
);
