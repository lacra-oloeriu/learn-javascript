const Person = (name, age, eyes) => {
    let obj = {
        name: name,
        age: age,
        eyes: eyes
    }

    obj.talk = (words) => {
        console.log(`I am ${obj.name} and ${words}`)
    }

    return obj;
}

let alex = Person("Alex", 18, "green");

alex.talk("I am human");