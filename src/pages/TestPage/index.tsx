import React from 'react';
import Calendar from '../../components/Calendar';
import useCalendarControl from '../../components/Calendar/hooks/useCalendarControl';
import { EventForm } from '../../components/EventForm';
import { eventsData } from '../../mocks';

function TestPage() {
  const {
    calendarState,
    prevMonth,
    nextMonth,
    handleClickCell,
    calendarDays,
    handleSubmit,
    currentCheckedDate,
    handleClickEvent,
    handleDeleteEvent,
    setEventPopup,
    isEventPopup,
    currentEvents,
  } = useCalendarControl({ eventsData });

  return (
    <Calendar
      handleClickEvent={handleClickEvent}
      calendarState={calendarState}
      handleDeleteEvent={handleDeleteEvent}
      prevMonth={prevMonth}
      currentEvents={currentEvents}
      nextMonth={nextMonth}
      handleClickCell={handleClickCell}
      calendarDays={calendarDays}
      setEventPopup={setEventPopup}
      currentCheckedDate={currentCheckedDate}
      isEventPopup={isEventPopup}
    >
      <EventForm onSubmit={handleSubmit} />
    </Calendar>
  );
}

export default TestPage;
