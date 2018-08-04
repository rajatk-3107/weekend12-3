var add = require('./abc')
    /**
     * add={
     *  sum: sum definition,
     *  subtract: subtract definition
     * }
     */
var func = (a, b, c) => {
    console.log("Main function")
    c(a, b)
}
add.subtract(2, 1);
add.sum(1, 2)
func(4, 5, add.subtract)