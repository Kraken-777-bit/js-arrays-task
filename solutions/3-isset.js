// BEGIN
const get = (array, index, value = null) => {
    if(index >= 0 && index < array.length){
        return array[index];
    }else{
        return value;
    }
}
export {get};
// END