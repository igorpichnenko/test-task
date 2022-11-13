import moment from "moment"
import { useEffect, useState } from "react"
import { CalendarProps } from "."
import { createDaysOfMonth } from "../../utils";

export interface CalendarDays {
    value?: number;
    past?: boolean;
    color?: string;
    id?: number;
    date?: string;
    backgroundColor?: string;
    opacity?: string;
    event?: string[];
    holiday?: boolean
}

export const useCalendarControl = ({ eventsData }: CalendarProps) => {

    const [calendarState, setCalendarState] = useState({ currentDate: moment(), eventsData })
    const [calendarDays, setCalendarDays] = useState<CalendarDays[]>()

    useEffect(() => {
        const calendarDays = createDaysOfMonth(calendarState.currentDate)
        setCalendarDays(calendarDays)
    }, [calendarState])

    return {
        prevMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.subtract(1, 'month') })
        },
        nextMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.add(1, 'month') })
        },
        handleClickEvent: (events: string[], date?: string,) => {
            console.log(events, date, "events, date",)
        },
        handleClickCell: (calendarDays: CalendarDays[], date?: string) => {
            const activeEvent = calendarDays.find((el) => el.date === date)

            calendarDays.forEach((el) => {
                el.backgroundColor = ""
                let color = ""

                if (el.holiday) {
                    color = "var(--color-text-calendar-date-primary-holiday)"
                }
                else if (el.past) {
                    color = "var(--color-text-calendar-date-primary-past)"
                }
                el.color = color
            })
            const index = calendarDays.findIndex(el => el.date === date);

            if (index !== -1) {
                calendarDays.splice(index, 1);
            }
            calendarDays.splice(index, 0, { ...activeEvent, backgroundColor: "var(--color-background-calendar-date-primary-hover)", color: "var(--color-background-body-primary)" })

            setCalendarDays([...calendarDays])
        },

        calendarState,
        setCalendarState,
        calendarDays
    }
}