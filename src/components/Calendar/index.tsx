import React, { useState } from 'react';
import moment from 'moment';
import "moment/locale/ru"
import styles from "./index.module.scss"
import { createDaysOfMonth } from '../../utils';

moment.locale("ru")

export interface CalendarProps {
    events: {
        id: number,
        event: string,
        date: string
    }[]
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {


    const [state, setState] = useState({ date: moment().add(3, 'month') })

    const prevMonth = () => {
        setState({ date: state.date.subtract(1, 'month') })
    }

    const nextMonth = () => {
        setState({ date: state.date.add(1, 'month') })
    }

    return (
        <div style={{ maxWidth: "1028px" }}>

            <h2>Календарь</h2>

            <div style={{ position: "relative" }}>
                <button style={{ position: "absolute" }} className={styles.pagingButton} onClick={prevMonth}>&lt;</button>
                <button style={{ position: "absolute", right: "0" }} className={styles.pagingButton} onClick={nextMonth}>&gt;</button>
            </div>

            <table className={styles.calendarWrapper}>
                <caption className={styles.caption}>{state.date.format('MMMM YYYY')}</caption>
                <tbody>
                    <tr className={styles.calendarContainer}>
                        <th className={styles.dayHeader}>MON</th>
                        <th className={styles.dayHeader}>TUE</th>
                        <th className={styles.dayHeader}>WED</th>
                        <th className={styles.dayHeader}>THUR</th>
                        <th className={styles.dayHeader}>FRI</th>
                        <th className={styles.dayHeader}>SUN</th>
                        <th className={styles.dayHeader}>SAT</th>
                        {createDaysOfMonth(state.date).map((el, i) => {
                            return <td onClick={() => console.log("day", el.date)}
                                key={`${el.id}-${i}`}
                                style={{ opacity: el.opacity, color: el.color }}
                                className={styles.day}>
                                {el.value}
                                <span style={{ color: "red" }}
                                    onClick={() => console.log(events.find((event) => event.date === el.date)?.event)}
                                >{events.find((event) => event.date === el.date)?.event}
                                </span></td>
                        })}
                    </tr>
                </tbody>
            </table></div>);
}

export default Calendar;
