const luxon = require("luxon");

const dt = luxon.DateTime.now();
const then = dt.plus({ hours: 10, minutes: 10, seconds: 10 });
const distance = then.diff(dt, ['hours', 'minutes', 'seconds']).toObject();
const remaining = luxon.Duration.fromObject(distance)
console.log(dt >= then)

console.log(distance)