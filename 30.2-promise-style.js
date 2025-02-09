const sleeper = (timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('DONE') , timeout);
    })
}

let wait1 = sleeper(100);
wait1.then(x => console.log("Done,", x));

//the function gives us a timeout but return a Promise .