// map =is apply a caclulation on each element
// reduce - turn a sequance into a final calculation
//find - search for an element in a sequence
//filter - filter out selected elements from a sequence
//

class Thing {
    doit() {
        //does the stuff
    }
}

let that = new Thing();
that.doit();

let x = [ 1, 2, 3, 4];
y = x.map((i) => i + 10);
console.log(x)
console.log(y)

 z = x.reduce ((acc, i) => acc *= i);
 console.log(z)
  
 v = x.find((i) => i ==4)
 console.log(v);

  w = x.filter((i) => i % 2 == 0);

  console.log(w);

   x.forEach((i) => console.log("I got" , i ))

//Searchimg an array of objects to calculate new things

let pets = [
    {name: 'Yeller', type: 'Dog', age: 12},
    {name: 'Akumano', type: 'Japese Bobtail catan', age: 2},
    {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
    {name: 'James', type: 'Gecko', age: 2},

];

let ages_only = pets.map(pet => pet.age)
console.log(ages_only);

let total_age = ages_only.reduce((acc, age) => acc += age);
console.log(total_age);

let meaw = pets.find(pet => pet.name == 'Meaw Peesard');
console.log(meaw);


let old_animals = pets.filter(pet => pet.age > 10);
let young_animals = pets.filter( pet => pet.age <= 10);

console.log( " Animal Ages:" , ages_only);

console.log("Total Age:", total_age);

console.log("Meaw is:", meaw.age);

console.log("\nOld Animals:");
old_animals.forEach(pet => {
  console.log(`\t${pet.name} is a ${pet.age} old ${pet.type}.`);
});

console.log("\nYoung Animals:");
for(let pet of young_animals) {
  console.log(`\t${pet.name} is a ${pet.age} old ${pet.type}.`);
}