import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './index.module.scss';
import { daysOfTheWeek } from '../../mocks';
import { useCalendarControl } from './hooks/useCalendarControl';
import { Event } from '../ui/Event';
import { EventForm } from '../EventForm';
import { EventPopup } from '../EventPopup';
import { CalendarPropsType } from './types';
import { getEvents } from '../../utils';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

moment.locale('ru');

const Calendar: React.FC<CalendarPropsType> = ({ eventsData }) => {
  const {
    calendarState,
    prevMonth,
    nextMonth,
    handleClickEvent,
    handleClickCell,
    calendarDays,
    handleSubmit,
    currentCheckedDate,
    currentEvents,
    isEventPopup,
    setEventPopup,
    handleDeleteEvent,
  } = useCalendarControl({ eventsData });

  return (
    <section className={styles.wrapper}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <Typography as="h2" className={styles.title}>
            Календарь
          </Typography>

          <div>
            <Button
              isDefault={false}
              type="button"
              className={styles.navigateButton}
              onClick={prevMonth}
            >
              <i className={styles.icon} />
            </Button>
            <Button
              isDefault={false}
              type="button"
              className={styles.navigateButton}
              onClick={nextMonth}
            >
              <i className={styles.icon} />
            </Button>
          </div>

          <div>
            <h2 className={styles.caption}>
              {calendarState.currentDate.format('MMMM YYYY')}
            </h2>
            <div>
              <div className={styles.calendarBody}>
                {daysOfTheWeek.map((el) => (
                  <div className={styles.dayHeader} key={el}>
                    {el}
                  </div>
                ))}

                {calendarDays &&
                  calendarDays.map(
                    ({
                      date,
                      opacity,
                      color,
                      value,
                      backgroundColor,
                      past,
                    }) => (
                      <div
                        key={date}
                        className={styles.day}
                        onClick={() => handleClickCell(calendarDays, date)}
                        role="presentation"
                      >
                        <Typography
                          className={styles.dayNumber}
                          style={{ backgroundColor, opacity, color }}
                        >
                          {value}
                        </Typography>
                        <Event
                          past={past}
                          handleClickEvent={handleClickEvent}
                          events={getEvents(calendarState.eventsData, date)}
                        />
                      </div>
                    ),
                  )}
              </div>
            </div>
          </div>
        </div>
        <EventForm
          onSubmit={handleSubmit}
          currentCheckedDate={currentCheckedDate}
        />
      </div>

      {currentEvents && currentEvents.length > 0 && (
        <EventPopup
          date={currentCheckedDate}
          isEventPopup={isEventPopup}
          handleDeleteEvent={handleDeleteEvent}
          setEventPopup={setEventPopup}
          events={currentEvents}
        />
      )}
    </section>
  );
};

export default Calendar;
