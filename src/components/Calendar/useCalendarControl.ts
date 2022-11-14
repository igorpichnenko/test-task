import moment from "moment"
import { useEffect, useState } from "react"
import { CalendarProps, eventsData } from "."
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
    const [currentCheckedDate, setCurrentCheckedDate] = useState("")
    const [currentEvent, setCurrentEvent] = useState<eventsData>()
    const [isEventPopup, setEventPopup] = useState(false)

    useEffect(() => {
        const calendarDays = createDaysOfMonth(calendarState.currentDate)
        setCalendarDays(calendarDays)
    }, [calendarState])

    return {
        handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            const events = calendarState.eventsData
            const date = e.currentTarget.date.value
            const subtitle = e.currentTarget.subtitle.value
            const id = Math.random()
            const text = e.currentTarget.text.value

            if (date) {
                const oldEvent = events.find((el) => el.date === date)

                const newEvent = {
                    event: [{ subtitle, text, id }],
                    date,
                    id
                } as eventsData

                if (oldEvent) {
                    events.map((el) => {
                        if (el.date === date) {
                            return el.event.push(...newEvent.event)
                        }
                        return el
                    })
                    setCalendarState({
                        ...calendarState, eventsData:
                            [...calendarState.eventsData, newEvent]
                    })
                } else {
                    setCalendarState({
                        ...calendarState, eventsData:
                            [...calendarState.eventsData, newEvent]
                    })
                }
            }
        },
        prevMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.subtract(1, 'month') })
        },
        nextMonth: () => {
            setCalendarState({ ...calendarState, currentDate: calendarState.currentDate.add(1, 'month') })
        },
        handleClickEvent: (id: number, date?: string, detailedEvent?: eventsData) => {
            setCurrentEvent(detailedEvent)
            setEventPopup(true)

            const currentEvent = calendarState.eventsData.find((el) => el.date === date)?.event.find((el) => el.id === id)
            console.info(currentEvent, "currentEvent")
        },
        handleDeleteEvent: (id: number, date: string) => {
            const events = calendarState.eventsData
            const indexArray = events.findIndex(el => el.date === date);

            const oldEvent = events.find((el) => el.date === date)
            if (oldEvent) {
                const index = oldEvent?.event.findIndex(el => el.id === id);
                if (index !== -1) {
                    oldEvent?.event.splice(index, 1);
                    if (indexArray !== -1) {
                        events.splice(indexArray, 1);
                    }
                    events.splice(indexArray, 0, oldEvent)
                    setCalendarState({ ...calendarState, eventsData: events })

                    if (!oldEvent?.event.length) {
                        setEventPopup(false)
                    }
                }
            }
        },
        handleClickCell: (calendarDays: CalendarDays[], date?: string) => {
            if (date) {
                setCurrentCheckedDate(date)
            }
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
        calendarDays,
        currentCheckedDate,
        currentEvent,
        isEventPopup,
        setEventPopup
    }
}