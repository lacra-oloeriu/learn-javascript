
const Person = (name, age, eyes) => {
    //making an obj for the data
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }
    // then attach our function to it
    obj.talk = (words) => {
        //obj here will keep a reference 
        console.log(`I am ${obj.name}, I am ${obj.age}, and  ${words}.`);
    }

    obj.walk = (distance, direction) => {
        console.log(`${obj.name} walked`, distance, "in the direction of", direction);
    }
    //and return our new person
    return obj;
}

// let's use that to make someone named alex
let people  =[ 
Person("Alex", 16, "green"),
 Person("Mary", 90, "blue"),
 Person("Jon",35, "brown"),
 Person("Joseph", 19, "green"),
 Person("Anne", 16,"blue"),
 Person("Zed", 45, "green"),
];

// constructing a for loop  using people

for ( let human  of people) {
    human.talk("I am human!");
    human.walk("400m", "sud");
}

