// doing simple things
//1.open a file.
//2.Get is size.
//3.Create a buffer for that size.
//4.Read the contents of the file into the buffe
// A buffer is a space in memory (typically RAM) that stores binary data. 
// In Node. js, we can access these spaces of memory with the built-in Buffer class.
//  Buffers store a sequence of integers, similar to an array in JavaScript. 
// Unlike arrays, you cannot change the size of a buffer once it is created.

//callbackstyle

const fs = require('fs') ;

const read_file = (fname, cb) => {
    fs.stat(fname, (err, stats) => {
        fs.open(fname, 'r', (err, fd) => {
            let inbuf = Buffer.alloc(stats.size);
            fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer ) => {
                cb(buffer);
            })
        })
    })
}


read_file('test.txt', (result) => {
    console.log(`Result is ${result.toString()}`);
  });