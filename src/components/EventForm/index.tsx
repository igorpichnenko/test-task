import React from "react"
import styles from "./eventForm.module.scss"

export interface EventFormProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    currentCheckedDate: string
}

export const EventForm: React.FC<EventFormProps> = ({ onSubmit, currentCheckedDate }) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h4>Добавить событие</h4>
            <input name="date" defaultValue={currentCheckedDate} />
            <input name="event" />
            <textarea name="text" />
            <button type="submit">Добавить</button>
        </form>
    )
}