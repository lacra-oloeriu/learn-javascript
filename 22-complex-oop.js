const Person = (name, age, eyes) => {
    let ths = {}
        ths.name = name;
        ths.age  = age;
        ths.eyes = eyes
    

    ths.talk = (words) => {
        console.log(`I am ${ths.name} and ${words}`)
    }

    return ths;
}

let alex = Person("Alex", 18, "green");
 alex.talk("I am a student");
 let mary = Person("Mary", 54, "blue");
 mary.talk("I am human!!");
 let frank = Person("Frank", 46, "black");
 frank.talk("Hi there!")

 console.log (`Alex is ${alex.age}, Mary's ${mary.age}, Frank's ${frank.age}`);

 // the same code but using class constructor