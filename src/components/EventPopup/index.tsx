import React from 'react';
import { EventType } from '../Calendar/types';
import { Button } from '../ui/Button';
import { Popup } from '../ui/Popup';
import styles from './index.module.scss';

export interface EventPopupPropsType {
  isEventPopup: boolean;
  setEventPopup: (isEventPopup: boolean) => void;
  events: EventType[];
  handleDeleteEvent: (id: number) => void;
  date: string;
}

export const EventPopup = ({
  isEventPopup,
  setEventPopup,
  events,
  handleDeleteEvent,
  date,
}: EventPopupPropsType) => {
  return (
    <>
      {isEventPopup && (
        <Popup>
          <ul className={styles.popupContent}>
            <div className={styles.buttonWrapper}>
              <Button small onClick={() => setEventPopup(false)}>
                Закрыть
              </Button>
            </div>

            {events.map((el) => {
              return (
                <li key={el.id} className={styles.li}>
                  <p>
                    {date} Событие:{' '}
                    <span className={styles.subtitle}>{el.subtitle}</span>
                  </p>
                  <p>
                    Подробности: <span className={styles.text}>{el.text}</span>
                  </p>{' '}
                  <Button
                    small
                    secondary
                    onClick={() => handleDeleteEvent(el.id)}
                  >
                    Удалить
                  </Button>
                </li>
              );
            })}
          </ul>
        </Popup>
      )}
    </>
  );
};
