import React from 'react';
import moment from 'moment';
import "moment/locale/ru"
import { daysOfTheWeek } from '../../mocks';
import { useCalendarControl } from './useCalendarControl';
import { Event } from '../ui/Event';
import { EventForm } from '../EventForm';
import { EventPopup } from '../EventPopup';

import styles from "./index.module.scss"

moment.locale("ru")

export interface eventsData {
    id: number;
    event: { text: string, subtitle: string, id: number }[];
    date: string;
}
export interface CalendarProps {
    eventsData: eventsData[]
}

export const Calendar: React.FC<CalendarProps> = ({ eventsData }) => {

    const {
        calendarState, prevMonth,
        nextMonth, handleClickEvent,
        handleClickCell, calendarDays,
        handleSubmit, currentCheckedDate,
        currentEvent, isEventPopup,
        setEventPopup, handleDeleteEvent
    } = useCalendarControl({ eventsData })

    return (
        <section className={styles.wrapper}>
            <div className={styles.calendar}>
                <h2 className={styles.title}>Календарь</h2>

                <div>
                    <button className={styles.pagingButton} onClick={prevMonth}> <i className={styles.icon}></i></button>
                    <button className={styles.pagingButton} onClick={nextMonth}> <i className={styles.icon}></i></button>
                </div>

                <table>
                    <caption className={styles.caption}>{calendarState.currentDate.format('MMMM YYYY')}</caption>
                    <tbody>
                        <tr className={styles.calendarBody}>
                            {daysOfTheWeek.map((el) => (
                                <th className={styles.dayHeader} key={el}>{el}</th>
                            ))}

                            {calendarDays && calendarDays.map(({ date, opacity, color, value, backgroundColor, past }) => (
                                <td
                                    key={date}
                                    className={styles.day} onClick={() => handleClickCell(calendarDays, date)}>
                                    <span className={styles.dayNumber} style={{ backgroundColor, opacity, color }}>{value}</span>
                                    <Event past={past} handleClickEvent={handleClickEvent} date={date} calendarState={calendarState} />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
            <EventForm onSubmit={handleSubmit} currentCheckedDate={currentCheckedDate} />
            <EventPopup isEventPopup={isEventPopup} handleDeleteEvent={handleDeleteEvent} setEventPopup={setEventPopup} currentEvent={currentEvent} />
        </section>
    );
}




