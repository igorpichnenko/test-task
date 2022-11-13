import React from 'react';
import { CalendarProps } from '../../Calendar';
import styles from './index.module.scss';

interface EventPropsTypes {
  date?: string;
  handleClickEvent: (events: string[], date?: string) => void;
  calendarState: CalendarProps,
  past?: boolean;
}
export type { EventPropsTypes };

export const Event = ({
  date,
  calendarState,
  handleClickEvent = () => { },
  past,
  ...props
}: EventPropsTypes) => {

  let events = calendarState.eventsData.find((event) => event.date === date)?.event ?? []

  if (!events || !events.length) return null

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el, i) => {
        let event = el
        if (el.length >= 16) {
          event = `${el.slice(0, 16)}...`
        }
        return <span onClick={() => handleClickEvent(events, date)} key={`${el}${i}`} style={{ opacity: `${past && 0.5}` }} className={styles.event} {...props}>{event}</span>
      })}

    </span>
  );
};

