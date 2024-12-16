//data about a person named Frank

let frank = {
    name:"Frank",
    age: 34,
    eyes: "blue"

};

const frank_talk = ( who, worlds) => {
    console.log(` I am ${who.name} and ${worlds}`);
};

frank_talk(frank, "I am talking here!!");

//working with that data by putting function on it.

let mary = {
    name: "Mary",
    age: 44,
    eyes: "brown", 
    talk: ( who, worlds) => {
        console.log(`I am ${who.name} and ${worlds}.`)
    }
};

// now we taste it 

mary.talk(mary, "these are some worlds");