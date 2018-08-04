var arg = process.argv;
var calc = require('./abc')
if (arg[2].indexOf('+') != -1) {
    var values = arg[2].split('+')
    calc.sum(parseInt(values[0]), parseInt(values[1]))
} else if (arg[2].indexOf('-') != -1) {
    var values = arg[2].split('-')
    calc.subtract(values[0], values[1])
} else if (arg[2].indexOf('*') != -1) {
    var values = arg[2].split('*')
    calc.multiply(values[0], values[1])
} else if (arg[2].indexOf('/') != -1) {
    var values = arg[2].split('/')
    calc.divide(values[0], values[1])
}