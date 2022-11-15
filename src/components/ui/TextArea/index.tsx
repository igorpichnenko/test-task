import React from 'react';
import styles from './index.module.scss';

export interface TextAreaPropsType {
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    defaultValue?: string;
}

export const TextArea: React.FC<TextAreaPropsType> = ({
    placeholder,
    disabled,
    required,
    name,
    defaultValue,
    ...props
}) => {

    return (
        <textarea required={required} className={styles.textArea} placeholder={placeholder} name={name}  {...props} />
    );
};

