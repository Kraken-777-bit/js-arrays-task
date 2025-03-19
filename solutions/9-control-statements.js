import { slice } from "lodash";

// BEGIN
const getTotalAmount = (money, kurs) => {
    let result = 0;
    for (let index = 0; index < money.length; index++) {
        if (kurs === money[index].slice(0, 3)) {
            let myBuffer = money[index].slice(4);
            result += Number(myBuffer);
        }
    }
    return result;
}

export default getTotalAmount;
// END