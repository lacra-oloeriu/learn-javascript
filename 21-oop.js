
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
let alex = Person("Alex", 16, "green");
let mary = Person("Mary", 90, "blue");
let jon = Person("Jon",35, "brown");
let joseph = Person("Joseph", 19, "green");
let anne = Person("Anne", 16,"blue");
let zed = Person("Zed", 45, "green");
// and see how they can talk without repetition?


alex.talk ("Hi there!");
alex.walk("200m", "north");
mary.talk("Hello");
mary.walk("150m", "sud");
jon.talk("I am new!");
jon.walk("450m", "Vest");
joseph.talk("I am from Gent!");
joseph.walk("700m", "Vest");
anne.talk("I am from Drongen!");
anne.walk("700m", "Est");
zed.talk("I am from Gent!");
zed.walk("700m", "Vest");
