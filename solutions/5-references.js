// BEGIN
export const reverse = (myArr) => {
    for (let i = 0; i < Math.floor(myArr.length / 2); i++) {
        let myBuffer = myArr[i];
        myArr[i] = myArr[myArr.length - i - 1];
        myArr[myArr.length - i - 1] = myBuffer;
    }
    // return myArr;
}
// END