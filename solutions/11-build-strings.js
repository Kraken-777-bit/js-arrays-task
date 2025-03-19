// BEGIN
const buildDefinitionList = (definitions) => {
    if (definitions === undefined || definitions.length == 0) {
        return '';
    }else{
        let result = '<dl>'
        for (const element of definitions) {
            let myBuffer = element.join('</dt><dd>');
            result += `<dt>${myBuffer}</dd>`;
        }
        result = `${result}</dl>`;

        return result;
    }
}

export default buildDefinitionList;
// END