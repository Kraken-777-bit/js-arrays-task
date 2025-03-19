const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    const unique1 = _.uniq(arr1);
    const unique2 = _.uniq(arr2);
    let count = 0;
  
    for (const item1 of unique1) {
      for (const item2 of unique2) {
        if (item1 === item2) {
          count += 1;
          break; 
        }
      }
    }
  
    return count;
}

export default getSameCount;
// END