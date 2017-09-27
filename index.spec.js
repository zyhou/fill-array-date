import assert from "assert";
import sinon from "sinon";

import { fillArrayDate } from "./index";

describe('domain/user/computeMonthlyStatsFactory', () => {
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(new Date('2017-09-26').getTime());
    });

    it('should fill one next date', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-08-31'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 2);
        assert.deepEqual(result[1], {
            str: 'foo',
            date: new Date('2017-09-30'),
        });
    });

    it('should fill multiple next date', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-07-31'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 3);
        assert.deepEqual(result[1], {
            str: 'foo',
            date: new Date('2017-08-31'),
        });
        assert.deepEqual(result[2], {
            str: 'foo',
            date: new Date('2017-09-30'),
        });
    });

    it('should fill multiple next date with february case', () => {
        const arrayDate = [
            {
                date: new Date('2017-01-31'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 9);
        assert.deepEqual(result[1], {
            date: new Date('2017-02-28'),
        });
        assert.deepEqual(result[2], {
            date: new Date('2017-03-31'),
        });
    });

    it('should fill next date + keep rest object', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-07-31'),
            },
            {
                str: 'bar',
                date: new Date('2017-08-31'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 3);
        assert.deepEqual(result[2], {
            str: 'bar',
            date: new Date('2017-09-30'),
        });
    });

    it('should fill with inside gap', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-07-31'),
            },
            {
                str: 'bar',
                date: new Date('2017-09-30'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 3);
        assert.deepEqual(result[1], {
            str: 'foo',
            date: new Date('2017-08-31'),
        });
    });

    it('should fill with multiple inside gap', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-06-30'),
            },
            {
                str: 'bar',
                date: new Date('2017-09-30'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 4);
        assert.deepEqual(result[1], {
            str: 'foo',
            date: new Date('2017-07-31'),
        });
        assert.deepEqual(result[2], {
            str: 'foo',
            date: new Date('2017-08-31'),
        });
    });

    it('should fill with inside gap + next date', () => {
        const arrayDate = [
            {
                str: 'foo',
                date: new Date('2017-05-30'),
            },
            {
                str: 'bar',
                date: new Date('2017-08-31'),
            },
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 5);
        assert.deepEqual(result[1], {
            str: 'foo',
            date: new Date('2017-06-30'),
        });
        assert.deepEqual(result[2], {
            str: 'foo',
            date: new Date('2017-07-31'),
        });
        assert.deepEqual(result[4], {
            str: 'bar',
            date: new Date('2017-09-30'),
        });
    });

    afterEach(() => {
        if (clock) {
            clock.restore();
        }
    });
});
