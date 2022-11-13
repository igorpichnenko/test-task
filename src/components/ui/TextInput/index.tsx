import React from 'react';
import styles from './index.module.scss';

interface TextInputPropsTypes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export type { TextInputPropsTypes };

export const TextInput = ({
  value,
  placeholder,
  disabled,
  onChange = () => { },
}: TextInputPropsTypes) => {
  return (
    <input
      className={styles.textInput}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

