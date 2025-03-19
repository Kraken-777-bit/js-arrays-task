// BEGIN
export const flatten = (arr) => {
    const result = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            result.push(...element);
        }else{
            result.push(element);
        }
    }

    return result;
}
// END