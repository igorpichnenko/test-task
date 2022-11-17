export type EventType = {
  text?: string;
  subtitle?: string;
  id?: number;
};

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

export type EventsDataType = {
  id?: number;
  event: EventType[];
  date?: string;
};
export interface CalendarPropsType {
  children?: JSX.Element;
  calendarState: {
    currentDate: moment.Moment;
    eventsData: EventsDataType[];
  };
  prevMonth: () => void;
  nextMonth: () => void;
  handleClickEvent?: (id?: number, events?: EventType[]) => void;
  handleClickCell: (calendarDays: CalendarDaysType[], date: string) => void;
  calendarDays: CalendarDaysType[] | undefined;
  currentCheckedDate?: string;
  currentEvents?: EventType[] | undefined;
  isEventPopup?: boolean;
  setEventPopup?: (isEventPopup: boolean) => void;
  handleDeleteEvent?: (id?: number) => void;
  calendarEvent?: boolean;
}
