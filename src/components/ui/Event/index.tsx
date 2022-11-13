import React from 'react';
import styles from './index.module.scss';

interface EventPropsTypes {
  text?: string;
  placeholder?: string;
  disabled?: boolean;
  onFocus?: () => void;
}
export type { EventPropsTypes };

export const Event = ({
  text,
  placeholder,
  disabled,
  onFocus = () => { },
}: EventPropsTypes) => {
  return (
    <span onFocus={onFocus} className={styles.event}>{text}</span>
  );
};

