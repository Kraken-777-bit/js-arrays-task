import { result } from "lodash";

// BEGIN
const addPrefix = (names, str) => {
    if(names.length !== 0){
        const result = [];
        for(let i = 0; i < names.length; i++){
            result[i] = `${str} ${names[i]}`;
        }
        return result;
    }
    return names;
}

export default addPrefix;
// END