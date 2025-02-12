let fs = require('fs').promises

const read_file = async (fname) => {
    try {
        let file = await fs.open(fname, 'r');
        let stat = await file.stat();
        
    } catch(err) {
        console,log("ERROR", err);
    }

}

read_file('test.txt');