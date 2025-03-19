// BEGIN
const makeCensored = (text, stopWord) => {
    const myBuffer = text.split(' '); 
    const result = [];
    for (const element of myBuffer) {
        result.push(stopWord.includes(element) ? '$#%!' : element);
    }

    return result.join(' '); 
}

export default makeCensored;
// END