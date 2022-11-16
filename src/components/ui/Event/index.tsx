import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './index.module.scss';
import { spliceEvent } from '../../../utils';
import { EventType } from '../../Calendar/types';

export interface EventPropsType {
  handleClickEvent: (id: number, events: EventType[]) => void;
  events: EventType[];
  past?: boolean;
}

export const Event = ({
  events,
  handleClickEvent = () => {},
  past,
}: EventPropsType) => {
  const isDesktopWidth1200 = useMediaQuery({ query: '(max-width: 1200px)' });

  if (!events || !events.length) return null;

  return (
    <span className={styles.eventsWrapper}>
      {events.map((el) => {
        const event = spliceEvent(el, isDesktopWidth1200);

        return (
          <span
            role="button"
            tabIndex={0}
            onClick={() => handleClickEvent(event.id, events)}
            onKeyDown={() => handleClickEvent(event.id, events)}
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
