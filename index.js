import moment from "moment";

export const fillArrayDate = (arrayToFill, endDate = new Date()) => {
    let currentElement = arrayToFill[0];
    let currentDate = moment.utc(currentElement.date);

    let i = 0;
    while (currentDate.isSameOrBefore(moment.utc(endDate))) {
        currentElement = arrayToFill[i];
        currentDate = moment.utc(currentElement.date);
        currentDate = currentDate.add(1, "M").startOf("day");

        if (
            arrayToFill.findIndex(arr =>
                moment
                    .utc(arr.date)
                    .startOf("day")
                    .isSame(currentDate)
            ) === -1
        ) {
            arrayToFill.splice(
                i + 1,
                0,
                Object.assign({}, currentElement, {
                    date: currentDate.clone().toDate()
                })
            );
        }
        i += 1;
    }

    return arrayToFill;
};
