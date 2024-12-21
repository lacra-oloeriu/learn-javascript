//const Person = (name, age, eyes) => {
    //let ths = {}
       // ths.name = name;
       // ths.age  = age;
       // ths.eyes = eyes
    

   // ths.talk = (words) => {
      //  console.log(`I am ${ths.name} and ${words}`)
  //  }

  //  return ths;
//}

//let alex = Person("Alex", 18, "green");
 //alex.talk("I am a student");
 //let mary = Person("Mary", 54, "blue");
// mary.talk("I am human!!");
// let frank = Person("Frank", 46, "black");
// frank.talk("Hi there!")

 //console.log (`Alex is ${alex.age}, Mary's ${mary.age}, Frank's ${frank.age}`);

 // the same code but using class constructor

 class Person {
    constructor(name, age, eyes) {
        this.name = name;
        this.age = age;
        this.eyes = eyes;
    }

    talk(words) {
        console.log(`I am ${this.name} and ${words}.`)
    }
 }

 let alex = new Person("Alex", 16 , "green");
 let mary = new Person("Mary" , 34, "blue");
 let frank = new Person("Frank" , 56 , "blue");
 alex.talk("These are some words");
 mary.talk("I am human");
 frank.talk("I am a Student");