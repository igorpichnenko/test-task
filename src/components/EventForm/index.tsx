import React from "react"
import { Button } from "../ui/Button"
import { TextArea } from "../ui/TextArea"
import { TextInput } from "../ui/TextInput"
import styles from "./index.module.scss"

export interface EventFormPropsType {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    currentCheckedDate: string
}

export const EventForm: React.FC<EventFormPropsType> = ({ onSubmit, currentCheckedDate }) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <h4 className={styles.title}>Добавить событие</h4>
            <TextInput required name="date" placeholder="ДД.ММ.ГГ" defaultValue={currentCheckedDate} />
            <TextInput required name="subtitle" placeholder="Укажите краткое название" />
            <TextArea required placeholder="Введите описание" name="text" />
            <div className={styles.buttonWrapper}>
                <Button type="submit">Добавить</Button>
            </div>
        </form>
    )
}