import React from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import styles from './index.module.scss';
import { daysOfTheWeek } from '../../mocks';
import { useCalendarControl } from './hooks/useCalendarControl';
import { Event } from '../ui/Event';
import { EventForm } from '../EventForm';
import { EventPopup } from '../EventPopup';
import { CalendarPropsType } from './type';

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
    currentEvent,
    isEventPopup,
    setEventPopup,
    handleDeleteEvent,
  } = useCalendarControl({ eventsData });

  return (
    <section className={styles.wrapper}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <h2 className={styles.title}>Календарь</h2>

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
                  <th className={styles.dayHeader} key={el}>
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
                        className={styles.day}
                        onClick={() => handleClickCell(calendarDays, date)}
                        role="presentation"
                      >
                        <span
                          className={styles.dayNumber}
                          style={{ backgroundColor, opacity, color }}
                        >
                          {value}
                        </span>
                        <Event
                          past={past}
                          handleClickEvent={handleClickEvent}
                          date={date}
                          eventsData={calendarState.eventsData}
                        />
                      </td>
                    ),
                  )}
              </tr>
            </tbody>
          </table>
        </div>
        <EventForm
          onSubmit={handleSubmit}
          currentCheckedDate={currentCheckedDate}
        />
      </div>

      {currentEvent && currentEvent.event.length > 0 && (
        <EventPopup
          isEventPopup={isEventPopup}
          handleDeleteEvent={handleDeleteEvent}
          setEventPopup={setEventPopup}
          currentEvent={currentEvent}
        />
      )}
    </section>
  );
};

export default Calendar;
