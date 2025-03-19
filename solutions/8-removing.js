// BEGIN
const getSameParity = (myArr) => {
    if(myArr.length === 0){
        const result = [];
        return result;
    }
    
    const result = [];
    if (Math.abs(myArr[0]) % 2 === 0) {
        for (let index = 0; index < myArr.length; index++) {
            if (myArr[index] % 2 === 0) {
                result.push(myArr[index]);
            }
        }
        return result;
    }else{
        for (let index = 0; index < myArr.length; index++) {
            if (myArr[index] % 2 !== 0) {
                result.push(myArr[index]);
            }
        }
        return result;
    }
}

export default getSameParity;
// END