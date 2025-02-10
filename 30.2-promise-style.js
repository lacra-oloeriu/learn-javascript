const sleeper = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE') , timeout);
    })
}

let wait1 = sleeper(100);
wait1.then(x => console.log("Done,", x));

//the function gives us a timeout but return a Promise .

// next I will use promise to rewrite our code.

const fs = require('fs').promoses;

// you have to do nested calls any time  you need the result.....

const read_file = (fname) => {
    fs.open(fname, 'r').then((fh) => {
        fh.stat().then((stat) => {
            let buf = Buffer.alloc(stat.size);
            
        })

    })
}
