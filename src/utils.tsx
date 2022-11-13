import moment from "moment";

export const createDaysOfMonth = (refDate: moment.Moment) => {

    const date = moment(refDate).endOf('month');
    const lastDate = date.date();

    let firstWeekday = date.startOf('month').day();
    if (firstWeekday === 0) firstWeekday = 7

    const calendarDays = [];

    const prev = moment()
    const prevDate = moment(prev.subtract(1, 'month')).endOf('month');
    const lastPrevDate = prevDate.date() + 1

    const prevMouth = moment(refDate.subtract(1, 'month'))
    const prevLastDate = prevMouth.endOf('month').date()

    for (let w = 1; w < firstWeekday; w++) {
        const up = lastPrevDate - firstWeekday + w
        if (prevLastDate === 31) {

            calendarDays.push({ value: up + 1, opacity: "0.5", id: up + 1, date: `${up + 1}/${prevMouth.format("MM/YYYY")}` });
        }
        else if (prevLastDate === 28) {
            calendarDays.push({ value: up - 2, opacity: "0.5", id: up + 1, date: `${up + 1}/${prevMouth.format("MM/YYYY")}` });
        }
        else if (prevLastDate === 29) {
            calendarDays.push({ value: up - 1, opacity: "0.5", id: up + 1, date: `${up + 1}/${prevMouth.format("MM/YYYY")}` });
        }
        else {
            calendarDays.push({ value: up, opacity: "0.5", id: up, date: `${up}/${prevMouth.format("MM/YYYY")}` });
        }
    }


    let mouth = Number(moment(refDate).format("MM")) + 1
    let year = refDate.year()

    if (mouth === 13) {
        mouth = 1
        year = year + 1
    }

    for (let d = 1; d <= lastDate; d++) {
        const length = calendarDays.length
        if (length % 7 !== 4
            && length % 7 !== 3
            && length % 7 !== 2
            && length % 7 !== 1
            && length % 7 !== 0) {

            calendarDays.push({ value: d, id: d, color: "#5CB85C", date: `${d}/${mouth}/${year}` });
        }
        else {
            calendarDays.push({ value: d, id: d, date: `${d}/${mouth}/${year}` });
        }
    }

    let nextMouth = Number(moment(refDate.add(1, 'month')).format("MM")) + 1
    let nextYear = refDate.year()

    if (nextMouth === 13) {
        nextMouth = 1
        nextYear = nextYear + 1
    }

    for (let m = 1; calendarDays.length % 7 !== 0; m++) {
        const length = calendarDays.length
        if (length % 7 !== 4
            && length % 7 !== 3
            && length % 7 !== 2
            && length % 7 !== 1
            && length % 7 !== 0) {

            calendarDays.push({ value: m, id: m, opacity: "0.5", color: "#5CB85C", date: `${m}/${nextMouth}/${nextYear}` });
        }
        else {
            calendarDays.push({
                value: m, id: m, opacity: "0.5", date: `${m}/${nextMouth}/${nextYear}`
            });
        }
    }

    return calendarDays;
}