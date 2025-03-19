// BEGIN
export const calculateSum = (myArr) => {
    if(myArr.length === 0){
        return myArr.length;
    }
    let sum = 0;
    for (let i = 0; i < myArr.length; i++) {
        if((myArr[i] % 3) === 0){
            let myBufferElement = myArr[i];
            sum += myBufferElement;
        }
    }
    return sum;
}
// END