// BEGIN (write your solution here)
const getWeekends = (arrayOfDaysOff = 'long') => {
    if(arrayOfDaysOff === 'short'){
        return ['sat', 'sun'];
    }else{
        return ['saturday', 'sunday'];
    }
}
export {getWeekends};
// END
