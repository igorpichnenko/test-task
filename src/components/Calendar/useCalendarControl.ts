import moment from "moment"
import { useState } from "react"
import { CalendarProps } from "."


export const useCalendarControl = ({ eventsData }: CalendarProps) => {

    const [calendarState, setCalendarState] = useState({ currentDate: moment(), eventsData })

    return {
        prevMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.subtract(1, 'month') })
        },
        nextMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.add(1, 'month') })
        },
        handleClickCell: (date: string) => {
            console.log(calendarState.eventsData.find((event) => event.date === date)?.event)
        },
        calendarState,
        setCalendarState
    }
}