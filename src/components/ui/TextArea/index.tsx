import React from 'react';
import styles from './index.module.scss';

export interface TextAreaPropsType {
  placeholder?: string;
  required?: boolean;
  name?: string;
}

export const TextArea: React.FC<TextAreaPropsType> = ({
  placeholder,
  required,
  name,
}) => {
  return (
    <textarea
      required={required}
      className={styles.textArea}
      placeholder={placeholder}
      name={name}
    />
  );
};
