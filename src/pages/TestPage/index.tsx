import React from 'react';
import Calendar from '../../components/Calendar';
import { eventsData } from '../../mocks';

function TestPage() {
  return <Calendar eventsData={eventsData} />;
}

export default TestPage;
