// BEGIN
export const getMax = (arr) => {
    if (arr.length === 0) {
        return null; 
    }

    const [first, ...rest] = arr;
    let max = first;

    for (const numbers of rest) {
        if (numbers > max) {
            max = numbers;
        }
    }

    return max;
}
// END