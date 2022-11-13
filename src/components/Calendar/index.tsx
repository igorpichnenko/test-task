import React from 'react';
import moment from 'moment';
import "moment/locale/ru"
import styles from "./index.module.scss"
import { createDaysOfMonth } from '../../utils';
import { daysOfTheWeek } from '../../mocks';
import { useCalendarControl } from './useCalendarControl';
import { Event } from '../ui/Event';

moment.locale("ru")

export interface CalendarProps {
    eventsData: {
        id: number,
        event: string[],
        date: string
    }[]
}

const Calendar: React.FC<CalendarProps> = ({ eventsData }) => {

    const { calendarState, prevMonth, nextMonth, handleClickCell } = useCalendarControl({ eventsData })

    return (
        <section className={styles.calendar}>
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

                        {createDaysOfMonth(calendarState.currentDate).map(({ date, opacity, color, value, backgroundColor, past }) => {
                            return <td
                                key={date}
                                className={styles.day}>
                                <span className={styles.dayNumber} style={{ backgroundColor, opacity, color }}>{value}</span>
                                <Event past={past} handleClickCell={handleClickCell} date={date} calendarState={calendarState} />
                            </td>
                        })}

                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Calendar;
