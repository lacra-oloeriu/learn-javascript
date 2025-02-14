
let fs = require('fs').promises

const read_file = async (fname) => {
    try {
        let file = await fs.open(fname, 'r');
        let stat = await file.stat();
        let buffer = Buffer.alloc(stat.size);
        const result = await file.read(buffer, 0, stat.size, null);
        console.log(`Read ${result.bytesRead} bytes: ${result.buffer.toString()}`);

    } catch(err) {
        console.log("ERROR", err);
    }

}

read_file('test.txt');