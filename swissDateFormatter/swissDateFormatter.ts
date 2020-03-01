/**
 * This (helper) function takes any Date object and returns a string in the format
 * usually used in Switzerland. Warning! Work in progress!
 * @param date Date() object.
 */

function swissDateFormatter(date: Date): string{
    const day = date.getDate().toString();
    const monthOneDigit = (date.getMonth()+1).toString();
    const month = monthOneDigit.padStart(2,'0');
    const year = date.getFullYear();
    const swissDate = `${day}.${month}.${year}`
    return swissDate;
}
