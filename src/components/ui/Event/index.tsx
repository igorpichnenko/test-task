import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './index.module.scss';
import { spliceEvent } from '../../../utils';
import { EventsDataType } from '../../Calendar/type';

export interface EventPropsType {
  date: string;
  handleClickEvent: (id: number, currentEvents?: EventsDataType) => void;
  eventsData: EventsDataType[];
  past?: boolean;
}

export const Event = ({
  date,
  eventsData,
  handleClickEvent = () => {},
  past,
}: EventPropsType) => {
  const isDesktopWidth1200 = useMediaQuery({ query: '(max-width: 1200px)' });
  const currentEvents = eventsData.find((event) => event.date === date);
  const events = currentEvents?.event ?? [];

  if (!events || !events.length) return null;

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el) => {
        const event = spliceEvent(el, isDesktopWidth1200);

        return (
          <span
            role="button"
            tabIndex={0}
            onClick={() => handleClickEvent(event.id, currentEvents)}
            onKeyDown={() => handleClickEvent(event.id, currentEvents)}
            key={el.id}
            style={{ opacity: `${past && 0.5}` }}
            className={styles.event}
          >
            {event.subtitle}
          </span>
        );
      })}
    </span>
  );
};
