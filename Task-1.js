/* Задание 1 */
const obj = {
  number: 123,
  string: 'string',
  '': '',
}
const ownProp = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      console.log(key, obj[key])
  }
}
ownProp(obj)