import React from 'react';
import { CalendarProps, eventsData } from '../../Calendar';
import styles from './index.module.scss';
export interface EventPropsTypes {
  date?: string;
  handleClickEvent: (id: number, date?: string, detailedEvent?: eventsData) => void;
  calendarState: CalendarProps,
  past?: boolean;
}

export const Event = ({
  date,
  calendarState,
  handleClickEvent = () => { },
  past,
  ...props
}: EventPropsTypes) => {


  const detailedEvent = calendarState.eventsData.find((event) => event.date === date)
  const events = detailedEvent?.event ?? []

  if (!events || !events.length) return null

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el, i) => {
        let event = el
        if (el.subtitle.length >= 16) {
          event = { ...event, subtitle: `${el.subtitle.slice(0, 16)}...` }
        }
        return <span onClick={() => handleClickEvent(event.id, date, detailedEvent,)} key={`${el}${i}`} style={{ opacity: `${past && 0.5}` }} className={styles.event} {...props}>{event.subtitle}</span>
      })}

    </span>
  );
};

