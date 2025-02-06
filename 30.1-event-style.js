const fs = require('fs');

const read_file = (fname, events) => {
    let noop = () => {}
    let onStat = events.onStat || noop;
    let onOpen = events.onOpen|| noop;
    let onRead = events.onRead || noop;
    
    fs.stat(fname, (err, stats) => {
        onStat(stats);
    
        fs.open(fname, 'r', (err, fd) => {
          onOpen(fd);
          let inbuf = Buffer.alloc(stats.size);
    
          fs.read(fd, inbuf, 0, stats.size, null, (err, bytesRead, buffer) => {
            onRead(bytesRead, buffer);
          });
        });
      });



}


   