import React from 'react';
import { CalendarProps } from '../../Calendar';
import styles from './index.module.scss';

interface EventPropsTypes {
  date: string;
  handleClickCell: (date: string, events: string[]) => void;
  calendarState: CalendarProps,
  past?: boolean;
}
export type { EventPropsTypes };

export const Event = ({
  date,
  calendarState,
  handleClickCell = () => { },
  past,
  ...props
}: EventPropsTypes) => {

  let events = calendarState.eventsData.find((event) => event.date === date)?.event ?? []

  if (!events || !events.length) return null

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el) => {
        let event = el
        if (el.length >= 16) {
          event = `${el.slice(0, 16)}...`
        }
        return <span onClick={() => handleClickCell(date, events)} key={el} style={{ opacity: `${past && 0.5}` }} className={styles.event} {...props}>{event}</span>
      })}

    </span>
  );
};

