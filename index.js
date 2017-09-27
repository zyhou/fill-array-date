import moment from "moment";

const getMissingMonths = (previous, monthdiff) => {
    const currentDate = moment.utc(previous.date);
    const arrayMissingMonths = [];

    for (let i = 1; i < monthdiff; i += 1) {
        arrayMissingMonths.push(Object.assign({}, previous, { date: currentDate.add(1, 'month').endOf('month').startOf('day').clone().toDate() }));
    }

    return arrayMissingMonths;
};

const getMonthsDiff = (startDate, endDate) => Math.round(moment.utc(endDate).diff(moment.utc(startDate), 'month', true));

export const fillArrayDate = (arrayToFill) => {
    const rangeDateArray = [...arrayToFill];

    // Fill gap inside range date
    const result = arrayToFill.reduce((filledArray, current, index) => {
        if (index === 0) {
            return [current];
        }

        const previous = rangeDateArray[index - 1];
        const monthdiff = getMonthsDiff(previous.date, current.date);
        if (monthdiff === 1) {
            return [...filledArray, current];
        }

        return [...filledArray, current, ...getMissingMonths(previous, monthdiff)].sort((a, b) => a.date - b.date);
    }, []);

    // Complete date until now
    const lastElement = result[result.length - 1];
    const todayDiff = getMonthsDiff(lastElement.date, moment.utc(new Date()));
    return [...result, ...getMissingMonths(lastElement, todayDiff + 1)];
};
