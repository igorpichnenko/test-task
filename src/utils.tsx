import moment from "moment";

export const createDaysOfMonth = (refDate: moment.Moment) => {

    const date = moment(refDate).endOf('month');
    const lastDate = date.date();
    const currentDay = new Date().getDate()
    const currentMouth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()

    let firstWeekday = date.startOf('month').day();
    if (firstWeekday === 0) firstWeekday = 7

    const calendarDays = [];

    const prev = moment()
    const prevDate = moment(prev.subtract(1, 'month')).endOf('month');
    const lastPrevDate = prevDate.date() + 1

    const prevMouth = moment(refDate.subtract(1, 'month'))
    const prevLastDate = prevMouth.endOf('month').date()

    for (let day = 1; day < firstWeekday; day++) {
        const up = lastPrevDate - firstWeekday + day
        if (prevLastDate === 31) {
            calendarDays.push({ value: up, past: true, color: "var(--color-text-calendar-date-primary-past)", id: up, date: `${up}/${prevMouth.format("MM/YY")}` });
        }
        else if (prevLastDate === 28) {
            calendarDays.push({ value: up - 3, past: true, color: "var(--color-text-calendar-date-primary-past)", id: up - 3, date: `${up - 3}/${prevMouth.format("MM/YY")}` });
        }
        else if (prevLastDate === 29) {
            calendarDays.push({ value: up - 2, past: true, color: "var(--color-text-calendar-date-primary-past)", id: up - 2, date: `${up - 2}/${prevMouth.format("MM/YY")}` });
        }
        else {
            calendarDays.push({ value: up - 1, past: true, color: "var(--color-text-calendar-date-primary-past)", id: up - 1, date: `${up - 1}/${prevMouth.format("MM/YY")}` });
        }
    }

    let mouth = Number(moment(refDate).format("MM")) + 1
    let year = refDate.year()

    if (mouth === 13) {
        mouth = 1
        year = year + 1
    }

    for (let day = 1; day <= lastDate; day++) {
        const length = calendarDays.length

        let formatDay = String(day)

        if (Number(formatDay) <= 9) {
            formatDay = `0${formatDay}`
        }

        let formatMouth = String(mouth)

        if (Number(formatMouth) <= 9) {
            formatMouth = `0${formatMouth}`
        }

        if (length % 7 !== 4
            && length % 7 !== 3
            && length % 7 !== 2
            && length % 7 !== 1
            && length % 7 !== 0) {

            if (currentDay === day && currentYear === year && currentMouth === mouth) {
                calendarDays.push({ value: day, id: day, holiday: true, backgroundColor: "var(--color-background-calendar-date-primary-hover)", color: "var(--color-background-body-primary)", date: `${formatDay}/${formatMouth}/${String(year).slice(2)}` });
            } else {
                calendarDays.push({ value: day, id: day, holiday: true, color: "var(--color-text-calendar-date-primary-holiday)", date: `${formatDay}/${formatMouth}/${String(year).slice(2)}` });
            }
        } else if (currentDay === day && currentYear === year && currentMouth === mouth) {
            calendarDays.push({ value: day, id: day, backgroundColor: "var(--color-background-calendar-date-primary-hover)", color: "var(--color-background-body-primary)", date: `${formatDay}/${formatMouth}/${String(year).slice(2)}` });
        }
        else {
            calendarDays.push({ value: day, id: day, date: `${formatDay}/${formatMouth}/${String(year).slice(2)}` });
        }
    }

    let nextMouth = Number(moment(refDate.add(1, 'month')).format("MM")) + 1
    let nextYear = refDate.year()

    if (nextMouth === 13) {
        nextMouth = 1
        nextYear = nextYear + 1
    }

    for (let day = 1; calendarDays.length % 7 !== 0; day++) {

        let formatDay = String(day)

        if (Number(formatDay) <= 9) {
            formatDay = `0${formatDay}`
        }

        let formatMouth = String(nextMouth)

        if (Number(formatMouth) <= 9) {
            formatMouth = `0${formatMouth}`
        }

        const length = calendarDays.length
        if (length % 7 !== 4
            && length % 7 !== 3
            && length % 7 !== 2
            && length % 7 !== 1
            && length % 7 !== 0) {

            calendarDays.push({ value: day, id: day, past: true, holiday: true, opacity: "0.5", color: "var(--color-text-calendar-date-primary-holiday)", date: `${formatDay}/${formatMouth}/${String(nextYear).slice(2)}` });
        }
        else {
            calendarDays.push({
                value: day, id: day, past: true, color: "var(--color-text-calendar-date-primary-past)", date: `${formatDay}/${formatMouth}/${String(nextYear).slice(2)}`
            });
        }
    }

    return calendarDays;
}