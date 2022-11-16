export type EventType = {
  text: string;
  subtitle: string;
  id: number;
};

export type EventsDataType = {
  id: number;
  event: EventType[];
  date: string;
};
export interface CalendarPropsType {
  eventsData: EventsDataType[];
}
