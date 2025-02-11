const sleeper = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE') , timeout);
    })
}

let wait1 = sleeper(100);
wait1.then(x => console.log("Done,", x));

//the function gives us a timeout but return a Promise .

// next I will use promise to rewrite our code.

const fs = require('fs').promises;

// you have to do nested calls any time  you need the result.....

const read_file = (fname) => {
    fs.open(fname, 'r').then((fh) => {
        fh.stat().then((stat) => {
            let buf = Buffer.alloc(stat.size);

            fh.read(buf, 0, stat.size, null)
            .then((result) => {
                console.log(`Read ${result.bytesRead} bytes: ${result.buffer.toString()}`)
                
            }).catch((err) => {
                console.error(err);
            });
        }).catch((err) => console.error(err));

    }).catch((err) => console.error(err));
}

read_file('test.txt');

//let's try a simple metode

const is_promise = new Promise((res, rej) => {
    res(100);
})

const prints_number = new Promise((res ,rej) => {
    res(is_promise)
}).then( x => console.log(x))
