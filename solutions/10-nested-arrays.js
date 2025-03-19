// BEGIN
const getSuperSeriesWinner = (scores) => {
    let result = 0;
    for (let index = 0; index < scores.length; index++) {
        if(scores[index][0] === scores[index][1]) {continue;}
        if (scores[index][0] > scores[index][1]) {
            result++;
        } else {
            result--;
        }
    }
    if(result === 0) {return null;}
    if (result > 0) {
        return 'canada';
    } else {
        return 'ussr';
    }
}

export default getSuperSeriesWinner;
// END