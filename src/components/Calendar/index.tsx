import React, { useState } from 'react';
import moment from 'moment';
import "moment/locale/ru"
import styles from "./index.module.scss"
import { createDaysOfMonth } from '../../utils';
import { daysOfTheWeek } from '../../mocks';
import { useCalendarControl } from './useCalendarControl';

moment.locale("ru")

export interface CalendarProps {
    eventsData: {
        id: number,
        event: string,
        date: string
    }[]
}

const Calendar: React.FC<CalendarProps> = ({ eventsData }) => {

    const { calendarState, prevMonth, nextMonth, handleClickCell } = useCalendarControl({ eventsData })

    return (
        <div style={{ maxWidth: "1028px" }}>

            <h2>Календарь</h2>

            <div style={{ position: "relative" }}>
                <button style={{ position: "absolute" }} className={styles.pagingButton} onClick={prevMonth}>&lt;</button>
                <button style={{ position: "absolute", right: "0" }} className={styles.pagingButton} onClick={nextMonth}>&gt;</button>
            </div>

            <table className={styles.calendarWrapper}>
                <caption className={styles.caption}>{calendarState.currentDate.format('MMMM YYYY')}</caption>
                <tbody>
                    <tr className={styles.calendarContainer}>
                        {daysOfTheWeek.map((el) => (
                            <th className={styles.dayHeader} key={el}>{el}</th>
                        ))}

                        {createDaysOfMonth(calendarState.currentDate).map(({ date, opacity, color, value }) => {
                            return <td
                                key={date}
                                style={{ opacity, color }}
                                className={styles.day}>
                                {value}
                                <span style={{ color: "red" }}
                                    onClick={() => handleClickCell(date)}
                                >{calendarState.eventsData.find((event) => event.date === date)?.event}
                                </span></td>
                        })}
                    </tr>
                </tbody>
            </table></div>);
}

export default Calendar;
