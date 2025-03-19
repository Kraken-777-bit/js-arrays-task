// BEGIN
const countUniqChars = (str) => {
    const result = [];

    for (const element of str) {
        if (!result.includes(element)) {
            result.push(element);
        }
    }

    return result.length;
}

export default countUniqChars;
// END