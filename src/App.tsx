import React from 'react';
import Calendar from './components/Calendar';

function App() {
  const events = [{ id: 6, event: " выборы", date: "13/10/2022" },
  { id: 7, event: " выходной", date: "17/10/2022" },
  { id: 8, event: " встреча", date: "3/11/2022" }]

  return (
    <Calendar events={events} />
  )
}

export default App;
