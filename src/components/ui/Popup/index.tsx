import React from 'react';
import styles from './index.module.scss';

export interface PopupProps {
  children: JSX.Element
};

export const Popup = ({ children }: PopupProps) => {
  return (
    <div className={styles.popup}>{children}</div>
  )
}

