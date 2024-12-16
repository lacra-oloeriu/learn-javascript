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
        console.log(`I am ${obj.name} and${words}`);
    }
    //and return our new person
    return obj
}