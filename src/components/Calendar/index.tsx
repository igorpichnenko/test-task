import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './index.module.scss';
import { daysOfTheWeek } from '../../mocks';
import { Event } from '../ui/Event';
import { EventPopup } from '../EventPopup';
import { CalendarPropsType } from './types';
import { getEvents } from '../../utils';

moment.locale('ru');

const Calendar: React.FC<CalendarPropsType> = ({
  calendarState,
  prevMonth,
  nextMonth,
  handleClickEvent,
  handleClickCell,
  calendarDays,
  currentCheckedDate,
  currentEvents,
  isEventPopup,
  setEventPopup,
  handleDeleteEvent,
  calendarEvent,
  children,
}) => {
  return (
    <section className={styles.wrapper}>
      <div
        className={`${styles.calendar} ${calendarEvent && styles.calendarDate}`}
      >
        <div className={styles.header}>
          {!calendarEvent && <h2 className={styles.title}>Календарь</h2>}

          <div>
            <button
              type="button"
              className={styles.pagingButton}
              onClick={prevMonth}
            >
              <i className={styles.icon} />
            </button>
            <button
              type="button"
              className={styles.pagingButton}
              onClick={nextMonth}
            >
              <i className={styles.icon} />
            </button>
          </div>

          <table>
            <caption className={styles.caption}>
              {calendarState.currentDate.format('MMMM YYYY')}
            </caption>
            <tbody>
              <tr className={styles.calendarBody}>
                {daysOfTheWeek.map((el) => (
                  <th
                    className={`${styles.dayHeader} ${
                      !calendarEvent && styles.dayHeaderDate
                    }`}
                    key={el}
                  >
                    {el}
                  </th>
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
                      <td
                        key={date}
                        className={`${styles.day}  ${
                          !calendarEvent && styles.dayDate
                        }`}
                        onClick={() => handleClickCell(calendarDays, date)}
                        role="presentation"
                      >
                        <span
                          className={styles.dayNumber}
                          style={{ backgroundColor, opacity, color }}
                        >
                          {value}
                        </span>
                        {!calendarEvent && (
                          <Event
                            past={past}
                            handleClickEvent={handleClickEvent}
                            events={getEvents(calendarState.eventsData, date)}
                          />
                        )}
                      </td>
                    ),
                  )}
              </tr>
            </tbody>
          </table>
        </div>
        {children}
      </div>

      {currentEvents && !calendarEvent && currentEvents.length > 0 && (
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
