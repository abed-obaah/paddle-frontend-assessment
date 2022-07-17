import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs){
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    return{
        seconds:getRemainingSeconds(nowDayjs, timestampDayjs),
        minutes:getRemainingMinutes(nowDayjs, timestampDayjs),
        hours:getRemainingHours(nowDayjs, timestampDayjs),
        days:getRemainingDays(nowDayjs, timestampDayjs)
    };
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    // -> 80 -> 1m 20s
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, timestampDayjs) {
    // -> 80 -> 1hr 20min
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, timestampDayjs) {
    // -> 25 -> 1day 1hr
    const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return padWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, timestampDayjs) {
     // -> 400d -> 1yr xyzdays
     const days = timestampDayjs.diff(nowDayjs, 'days') % 7;
     return days.toString();
}

function padWithZeros(number, minLength) {
    const numberString = number.toString();
    if(numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString
}