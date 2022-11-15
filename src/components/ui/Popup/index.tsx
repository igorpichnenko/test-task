import React from 'react';
import styles from './index.module.scss';

export interface PopupPropsType {
  children: JSX.Element
};

export const Popup = ({ children }: PopupPropsType) => {
  return (
    <div className={styles.popup}>{children}</div>
  )
}

