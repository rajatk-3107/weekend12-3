var rw = require('random-words')
var fs = require('fs')

// console.log(rw())
// fs.writeFile('xyz.txt', 'gfshjkdgjk', (err, data) => {
//     if (err) {
//         console.log("err", err)
//     } else {
//         console.log(data)
//     }
// })
// fs.open('abc.txt', 'w', (err, data) => {
//     if (err) {
//         console.log("err", err)
//     } else {
//         console.log(data)
//     }
// })

fs.unlink('xyz.txt', (err, data) => {
    console.log('done')
})