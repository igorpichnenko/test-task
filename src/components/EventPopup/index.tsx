import { eventsData } from "../Calendar"
import { Popup } from "../ui/Popup"
import styles from "./index.module.scss"

export interface EventPopupProps {
    isEventPopup: boolean
    setEventPopup: (isEventPopup: boolean) => void
    currentEvent?: eventsData
}

export const EventPopup = ({ isEventPopup, setEventPopup, currentEvent }: EventPopupProps) => {

    return (
        <>
            {isEventPopup && <Popup>
                <ul className={styles.popupContent}>
                    <button onClick={() => setEventPopup(!isEventPopup)}>закрыть</button>

                    {currentEvent && currentEvent.event.length > 0 && currentEvent.event.map((el, i) => {
                        return <li key={`${i}${el.subtitle}`} className={styles.li}>
                            <p>Событие: <span className={styles.subtitle}>{el.subtitle}</span></p>
                            <p>Подробности: <span className={styles.text}>{el.text}</span></p></li>
                    })}
                </ul>
            </Popup>}
        </>
    )

}