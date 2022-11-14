import React from 'react';
import { Calendar } from '../components/Calendar';
import { eventsData } from '../mocks';

function TestPage() {

  return (
    <div style={{ padding: "20px 5px" }}>
      <Calendar eventsData={eventsData} />
    </div>
  )
}

export default TestPage;
