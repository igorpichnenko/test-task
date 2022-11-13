import React from 'react';
import Calendar from '../components/Calendar';
import { EventForm } from '../components/EventForm';
import { eventsData } from '../mocks';
import styles from "./testPage.module.scss"

function TestPage() {

  return (
    <section className={styles.main}>
      <Calendar eventsData={eventsData} />
      <EventForm />
    </section>
  )
}

export default TestPage;
