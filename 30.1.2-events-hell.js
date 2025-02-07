const fs = require('fs');

//the code is practicly the same but whit errors added conditionly

const read_file = (fname, events) => {
    let noop = () => {};
    let onError = events.onError || noop;
    let onStat = events.onStat || noop;
    let onOpen = events.onOpen || noop;
    let onRead = events.onRead || noop;
}

fs.stat(fname, (err, stats) => {
    if(err) {
        onError(err);
    }else {
        onStat(stats);
    }
})