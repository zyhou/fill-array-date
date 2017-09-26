import moment from "moment";
import assert from "assert";
import { fillArrayDate } from "./index";

describe("fillArrayDate", function() {
    it("should return -1 when the value is not present", function() {
        assert.equal(-1, [1, 2, 3].indexOf(4));
    });
});
