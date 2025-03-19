// BEGIN
const calculateAverage = (myArr) => {
    if(myArr.length === 0){
        return null;
    }
    let sum = 0;
    for (let index = 0; index < myArr.length; index++) {
        let element = myArr[index];
        sum += element;
    }
    const average = sum / myArr.length;
    return average;
}

export default calculateAverage;
// END