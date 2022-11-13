import React from "react"
import styles from "./eventForm.module.scss"

export interface EventFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    currentCheckedDate: string
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit, currentCheckedDate }) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h4 className={styles.title}>Добавить событие</h4>
            <input className={styles.input} name="date" defaultValue={currentCheckedDate} />
            <input className={styles.input} name="event" />
            <textarea className={styles.textArea} name="text" />
            <button className={styles.button} type="submit">Добавить</button>
        </form>
    )
}