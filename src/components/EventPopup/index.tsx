import { EventsDataType } from "../Calendar"
import { Button } from "../ui/Button"
import { Popup } from "../ui/Popup"
import styles from "./index.module.scss"

export interface EventPopupPropsType {
    isEventPopup: boolean;
    setEventPopup: (isEventPopup: boolean) => void;
    currentEvent: EventsDataType;
    handleDeleteEvent: (id: number, date: string) => void;
}

export const EventPopup = ({ isEventPopup, setEventPopup, currentEvent, handleDeleteEvent }: EventPopupPropsType) => {

    return (
        <>
            {isEventPopup && <Popup>
                <ul className={styles.popupContent}>
                    <div className={styles.buttonWrapper}>
                        <Button small onClick={() => setEventPopup(false)}>Закрыть</Button>
                    </div>

                    {currentEvent.event.map((el) => {
                        return <li key={el.id} className={styles.li}>
                            <p>Событие: <span className={styles.subtitle}>{el.subtitle}</span></p>
                            <p>Подробности: <span className={styles.text}>{el.text}</span></p> <Button small secondary onClick={() => handleDeleteEvent(el.id, currentEvent.date)} >Удалить</Button></li>

                    })}
                </ul>
            </Popup>}
        </>
    )
}