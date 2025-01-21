const do_it = () => {
    console.log("did it!")
    do_it();
}

//while(true) {
    console.log("did it");
//

// simple recursive counting function

const counter = (i, upto) => {
    if(i < upto) {
        console.log("counter", i, upto);
        counter(i + 1, upto)
    }
}

// use counter to just print out
counter(1, 5)
