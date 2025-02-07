const fs = require('fs');

const read_file = (fname, events) => {
    let noop = () => {};
    let onError = events.onError || noop;
    let onStat = events.onStat || noop;
    let onOpen = events.onOpen || noop;
    let onRead = events.onRead || noop;
}