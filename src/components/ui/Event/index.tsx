import React from 'react';
import { CalendarProps, eventsData } from '../../Calendar';
import { useMediaQuery } from 'react-responsive';
import styles from './index.module.scss';
export interface EventProps {
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
}: EventProps) => {

  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  const detailedEvent = calendarState.eventsData.find((event) => event.date === date)
  const events = detailedEvent?.event ?? []

  if (!events || !events.length) return null

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el, i) => {
        let event = el
        if (!isTablet && el.subtitle.length >= 19) {
          event = { ...event, subtitle: `${el.subtitle.slice(0, 19)}...` }
        } else if (el.subtitle.length >= 13) {
          event = { ...event, subtitle: `${el.subtitle.slice(0, 13)}...` }
        }
        return <span onClick={() => handleClickEvent(event.id, date, detailedEvent,)} key={el.id} style={{ opacity: `${past && 0.5}` }} className={styles.event} {...props}>{event.subtitle}</span>
      })}

    </span>
  );
};

