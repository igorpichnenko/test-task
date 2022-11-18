import React from 'react';
import { useIMask } from 'react-imask';
import DATE_MASK from '../../consts';
import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';
import { TextInput } from '../ui/TextInput';
import styles from './index.module.scss';
import { Typography } from '../ui/Typography';

export interface EventFormPropsType {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  currentCheckedDate: string;
}

export const EventForm: React.FC<EventFormPropsType> = ({
  onSubmit,
  currentCheckedDate,
}) => {
  const { ref } = useIMask(DATE_MASK);

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Typography as="h4" className={styles.title}>
        Добавить событие
      </Typography>
      <TextInput
        ref={ref}
        required
        name="date"
        placeholder="ДД.ММ.ГГ"
        defaultValue={currentCheckedDate}
      />
      <TextInput
        required
        name="subtitle"
        placeholder="Укажите краткое название"
      />
      <TextArea required placeholder="Введите описание" name="text" />
      <div className={styles.buttonWrapper}>
        <Button type="submit">Добавить</Button>
      </div>
    </form>
  );
};
