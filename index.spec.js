import moment from "moment";
import assert from "assert";
import { fillArrayDate } from "./index";

describe("fillArrayDate", function() {
    const endDate = new Date("2017-09-26");

    it("should fill one next date", function() {
        const arrayDate = [
            {
                str: "foo",
                date: new Date("2017-08-30")
            }
        ];

        const result = fillArrayDate(arrayDate, endDate);
        assert.equal(result.length, 2);
        assert.deepEqual(result[1], {
            str: "foo",
            date: new Date("2017-09-30")
        });
    });

    it("should fill multiple next date", function() {
        const arrayDate = [
            {
                str: "foo",
                date: new Date("2017-07-30")
            }
        ];

        const result = fillArrayDate(arrayDate, endDate);
        assert.equal(result.length, 3);
        assert.deepEqual(result[1], {
            str: "foo",
            date: new Date("2017-08-30")
        });
        assert.deepEqual(result[2], {
            str: "foo",
            date: new Date("2017-09-30")
        });
    });
});
