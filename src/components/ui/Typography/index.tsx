import classnames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

export const TypographyDefaultAsType = 'span' as const;

export type TypographyPropsType = {
  children: React.ReactNode;
  as?: React.ElementType;
  sm?: boolean;
  lg?: boolean;
  md?: boolean;
};

export const Typography: React.FC<
  TypographyPropsType & React.HTMLAttributes<HTMLElement>
> = ({
  children,
  as,
  className,
  lg,
  sm,
  style,
  md,
  onClick,
  onKeyDown,
  tabIndex,
  role,
}) => {
  const classNames = classnames(className, {
    [styles.small]: sm,
    [styles.large]: lg,
    [styles.medium]: md,
  });

  const Tag = as || TypographyDefaultAsType;

  return (
    <Tag
      style={style}
      className={classNames}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      role={role}
    >
      {children}
    </Tag>
  );
};
