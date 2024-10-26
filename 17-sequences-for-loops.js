let pigments = ["perinone", "cadmium","titanium", "ultramarine", "napthol" ];

let i = 0;
while (i < pigments.length) {
    console.log(`while ${i}=${pigments[i]}`);
    i++;
}

//let's try somthing else

for(let i = 0; i < pigments.length; i++ ) {
    console.log(`for ${i}=${pigments[i]}`);
}

// what about that??

for(let paint of  pigments) {
    console.log(`for-of ${paint}`);
}

let count = 5;
label1:
//label2;
while(count > 0) {
    console.log("in while", count);
    if(count > 2) {
        for(i = 0; i < 4; i++) {
            console.log("in for", i);
            if(i == 2) {
                count--;
                continue label1;
            }
        }
    }else if(count == 2) {
        count -= 2;
        console.log("continue in while");
        continue label1;
    } else {
        break;
    }
    count--; 
}

//label2;
console.log("Done.");