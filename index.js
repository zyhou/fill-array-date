import moment from 'moment';

export const fillArrayDate = (arrayToFill, endDate = new Date()) =>  {
    const lastElement = arrayToFill[arrayToFill.length - 1];
    let lastDate = moment.utc(lastElement.date);

    while (lastDate.isSameOrBefore(moment.utc(endDate))) {
        lastDate = lastDate.add(1, 'M');
        arrayToFill.push(Object.assign({}, lastElement, { date: lastDate.clone() }));
    }

    return arrayToFill;
};