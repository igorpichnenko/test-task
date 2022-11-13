import React from 'react';
import Calendar from './components/Calendar';
import { eventsData } from './mocks';

function App() {

  return (
    <Calendar eventsData={eventsData} />
  )
}

export default App;
