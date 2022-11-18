import moment from 'moment';
import { useEffect, useState } from 'react';
import { createDaysOfMonth } from '../../../utils';
import { CalendarPropsType, EventType } from '../types';

export interface CalendarDaysType {
  value: number;
  id: number;
  date: string;
  past?: boolean;
  color?: string;
  backgroundColor?: string;
  opacity?: string;
  event?: string[];
  holiday?: boolean;
}

export const useCalendarControl = ({ eventsData }: CalendarPropsType) => {
  const [calendarState, setCalendarState] = useState({
    currentDate: moment(),
    eventsData,
  });
  const [calendarDays, setCalendarDays] = useState<CalendarDaysType[]>();
  const [currentCheckedDate, setCurrentCheckedDate] = useState('');
  const [currentEvents, setCurrentEvents] = useState<EventType[]>();
  const [isEventPopup, setEventPopup] = useState(false);

  useEffect(() => {
    const calendarDays = createDaysOfMonth(calendarState.currentDate);
    setCalendarDays(calendarDays);
  }, [calendarState]);

  return {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const events = calendarState.eventsData;

      const date = moment(e.currentTarget.date.value, 'DD/MM/YY').format(
        'DD/MM/YY',
      );

      const subtitle = e.currentTarget.subtitle.value;
      const id = Math.random();
      const text = e.currentTarget.text.value;

      if (date) {
        const oldEvent = events.find((el) => el.date === date);

        const newEvent = {
          event: [{ subtitle, text, id }],
          date,
          id,
        };

        if (oldEvent) {
          events.map((el) => {
            if (el.date === date) {
              return el.event.push(...newEvent.event);
            }
            return el;
          });
          setCalendarState({
            ...calendarState,
            eventsData: [...calendarState.eventsData, newEvent],
          });
        } else {
          setCalendarState({
            ...calendarState,
            eventsData: [...calendarState.eventsData, newEvent],
          });
        }
      }
    },
    prevMonth: () => {
      setCalendarState({
        ...calendarState,
        currentDate: calendarState.currentDate.subtract(1, 'month'),
      });
    },
    nextMonth: () => {
      setCalendarState({
        ...calendarState,
        currentDate: calendarState.currentDate.add(1, 'month'),
      });
    },
    handleClickEvent: (id: number, events: EventType[]) => {
      setCurrentEvents(events);
      setEventPopup(true);

      const currentEvent = events.find((el) => el.id === id);
      // eslint-disable-next-line no-console
      console.info(currentEvent, 'currentEvent');
    },
    handleDeleteEvent: (id: number) => {
      const events = calendarState.eventsData;
      const indexArray = events.findIndex(
        (el) => el.date === currentCheckedDate,
      );

      const oldEvent = events.find((el) => el.date === currentCheckedDate);
      if (oldEvent) {
        const index = oldEvent?.event.findIndex((el) => el.id === id);
        if (index !== -1) {
          oldEvent?.event.splice(index, 1);
          if (indexArray !== -1) {
            events.splice(indexArray, 1);
          }
          events.splice(indexArray, 0, oldEvent);
          setCalendarState({ ...calendarState, eventsData: events });

          if (!oldEvent?.event.length) {
            setEventPopup(false);
          }
        }
      }
    },
    handleClickCell: (calendarDays: CalendarDaysType[], date: string) => {
      if (date) {
        setCurrentCheckedDate(date);
      }
      const activeEvent = calendarDays.find((elem) => elem.date === date);
      if (activeEvent) {
        calendarDays.forEach((el) => {
          const element = el;
          element.backgroundColor = '';
          let color = '';

          if (element.holiday) {
            color = 'var(--color-text-calendar-date-primary-holiday)';
          } else if (element.past) {
            color = 'var(--color-text-calendar-date-primary-past)';
          }
          element.color = color;
        });
        const index = calendarDays.findIndex((el) => el.date === date);

        if (index !== -1) {
          calendarDays.splice(index, 1);
        }
        calendarDays.splice(index, 0, {
          ...activeEvent,
          backgroundColor:
            'var(--color-background-calendar-date-primary-hover)',
          color: 'var(--color-background-body-primary)',
        });

        setCalendarDays([...calendarDays]);
      }
    },
    calendarState,
    setCalendarState,
    calendarDays,
    currentCheckedDate,
    currentEvents,
    isEventPopup,
    setEventPopup,
  };
};
