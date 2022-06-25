"use strict";
// enums
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDEN"] = 3] = "FORBIDEN";
})(RType || (RType = {}));
const responseOne = {
    status: 200,
    type: RType.FAILURE,
    data: "test",
};
console.log(responseOne);
