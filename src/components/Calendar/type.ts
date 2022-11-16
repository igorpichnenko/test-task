export interface EventType {
  text: string;
  subtitle: string;
  id: number;
}

export interface EventsDataType {
  id: number;
  event: EventType[];
  date: string;
}
export interface CalendarPropsType {
  eventsData: EventsDataType[];
}
