import React from 'react';
import { Calendar } from '../components/Calendar';
import { eventsData } from '../mocks';
import styles from "./index.module.scss"

function TestPage() {

  return (
    <section className={styles.testPage}>
      <Calendar eventsData={eventsData} />
    </section>
  )
}

export default TestPage;
