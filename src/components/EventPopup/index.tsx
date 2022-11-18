import React from 'react';
import { EventType } from '../Calendar/types';
import { Button } from '../ui/Button';
import { Popup } from '../ui/Popup';
import { Typography } from '../ui/Typography';
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
                  <Typography as="p">
                    {date} Событие:{' '}
                    <Typography className={styles.subtitle}>
                      {el.subtitle}
                    </Typography>
                  </Typography>
                  <Typography as="p">
                    Подробности:{' '}
                    <Typography className={styles.text}>{el.text}</Typography>
                  </Typography>{' '}
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
