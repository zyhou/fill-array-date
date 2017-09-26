import moment from "moment";
import assert from "assert";
import { fillArrayDate } from "./index";

describe("fillArrayDate", function() {
    it("should fill one next date", function() {
        const arrayDate = [
            {
                str: "foo",
                date: new Date("2017-08-30")
            }
        ];

        const result = fillArrayDate(arrayDate);
        assert.equal(result.length, 2);
        assert.deepEqual(result[1], {
            str: "foo",
            date: new Date("2017-09-30")
        });
    });
});
