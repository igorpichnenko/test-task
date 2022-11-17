import React, { useEffect, useState } from 'react';
import Calendar from '../Calendar';
import useCalendarControl from '../Calendar/hooks/useCalendarControl';
import { Button } from '../ui/Button';
import { TextArea } from '../ui/TextArea';
import { TextInput } from '../ui/TextInput';
import styles from './index.module.scss';

export interface EventFormPropsType {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const EventForm: React.FC<EventFormPropsType> = ({ onSubmit }) => {
  const [isDate, setIsDate] = useState(false);
  const {
    calendarState,
    prevMonth,
    nextMonth,
    handleClickCell,
    calendarDays,
    currentCheckedDate,
  } = useCalendarControl({ eventsData: [] });
  const handleFocus = () => {
    setIsDate(!isDate);
  };
  useEffect(() => {
    setIsDate(false);
  }, [currentCheckedDate]);

  return (
    <form
      onSubmit={onSubmit}
      className={styles.form}
      style={{ position: 'relative' }}
    >
      <h4 className={styles.title}>Добавить событие</h4>
      <div
        style={{
          width: '260px',
          position: 'absolute',
          display: `${isDate ? 'block' : 'none'}`,
          borderRadius: '25px',
          background: 'black',
        }}
      >
        <Calendar
          calendarState={calendarState}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          handleClickCell={handleClickCell}
          calendarDays={calendarDays}
          calendarEvent
        />
      </div>
      <TextInput
        required
        name="date"
        onFocus={handleFocus}
        placeholder="ДД.ММ.ГГ"
        value={currentCheckedDate}
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
