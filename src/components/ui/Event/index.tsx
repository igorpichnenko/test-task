import React from 'react';
import { EventsDataType } from '../../Calendar';
import { useMediaQuery } from 'react-responsive';
import styles from './index.module.scss';
import { spliceEvent } from '../../../utils';
export interface EventPropsType {
  date: string;
  handleClickEvent: (id: number, currentEvents?: EventsDataType) => void;
  eventsData: EventsDataType[],
  past?: boolean;
}

export const Event = ({
  date,
  eventsData,
  handleClickEvent = () => { },
  past,
  ...props
}: EventPropsType) => {

  const isDesktopWidth1200 = useMediaQuery({ query: "(max-width: 1200px)" });
  const currentEvents = eventsData.find((event) => event.date === date)
  const events = currentEvents?.event ?? []

  if (!events || !events.length) return null

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el) => {
        const event = spliceEvent(el, isDesktopWidth1200)

        return <span onClick={() => handleClickEvent(event.id, currentEvents,)}
          key={el.id} style={{ opacity: `${past && 0.5}` }}
          className={styles.event} {...props}>{event.subtitle}</span>
      })}
    </span>
  );
};

