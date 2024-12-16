//data about a person named Frank

let frank = {
    name:"Frank",
    age: 34,
    eyes: "blue"

};

const frank_talk = ( who, words) => {
    console.log(` I am ${who.name} and ${words}`);
};

frank_talk(frank, "I am talking here!!");

//working with that data by putting function on it.

let mary = {
    name: "Mary",
    age: 44,
    eyes: "brown", 
    talk: ( who, words) => {
        console.log(`I am ${who.name} and ${words}.`)
    }
};

// now we taste it 

mary.talk(mary, "these are some worlds");

// an elegant way to buikd these automatically

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
        console.log(`I am ${obj.name}, I am ${obj.age}, I have green eyes ,  ${words}`);
    }

    obj.walk = (distance, direction) => {
        console.log(`${obj.name} walked`, distance, "in the direction of", direction)
    }
    //and return our new person
    return obj
}

// let's use that to make someone named alex
let alex = Person("Alex", 16, "green");
// and see how they can talk without repetition?
alex.talk ("Hi there!");

alex.walk("200m", "north");