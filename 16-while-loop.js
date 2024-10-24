let count = 5 ;

while (count > 0) {
    console.log(`count down ${count}`);
    count--;
}

//lets make a wile loop of module 2

while( count < 10) {
    if( count % 2 == 0) {
        console.log(count, "EVEN");
    } else {
        console.log( count, "ODD");
    }

    count++; //if you count down here , you go in a infinite loop
}