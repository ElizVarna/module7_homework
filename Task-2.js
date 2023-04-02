/* Задание 2 */
const obj = {
    number: 123,
    string: 'string',
    '': '',
}
const checkProp = (prop, obj) => {
    if (prop in obj) return true
    else return false;
}
console.log(checkProp('string', obj))