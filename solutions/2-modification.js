import { slice } from "lodash";

// BEGIN
const swap = (myArray) => {
    if(myArray.length < 2){
        return myArray;
    }else{
        const first = myArray[0];
        const last = myArray[myArray.length - 1];
        myArray[0] = last;
        myArray[myArray.length - 1] = first;
        return myArray;
    }

}

export {swap};
// END