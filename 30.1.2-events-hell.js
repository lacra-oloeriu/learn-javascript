const fs = require('fs');

//the code is practicly the same but whit errors added conditionly

const read_file = (fname, events) => {
    let noop = () => {};
    let onError = events.onError || noop;
    let onStat = events.onStat || noop;
    let onOpen = events.onOpen || noop;
    let onRead = events.onRead || noop;


fs.stat(fname, (err, stats) => {
    if(err) {
        onError(err);
    }else {
        onStat(stats);

        fs.open(fname, 'r', (err, fd) => {
            if(err) {
                onError(err)
            } else {
                onOpen(fd);
                let inbuf = Buffer.alloc(stats.size);

                fs.read(fd, inbuf, 0, stats.size, null,  ( err, bytesRead, buffer ) => {
                    if(err) {
                        onError(err);
                    }else {
                        onRead(bytesRead, buffer)
                    }
                } )
            }
        })
    }
})
}

//test if is working

read_file( 'test.txt' , {
    onRead: (bytesRead, buffer) => {
        console.log (`Read ${bytesRead} bytes: ${buffer.toString()}`)
    },
    onStat: (stat) => {
        console.log(`Got stats , file is ${stat.size} size.`)
    },
    onOpen: (fd) => {
        console.log(`Open worked, fd is ${fd}`);
      },
      onError: (err) => {
        console.error(err);
      }

})

