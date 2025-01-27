let pets = [
    {name: 'Yeller' ,type: 'Dog', age: 12},
    {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
    {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
    {name: 'James', type: 'Gecko', age: 2}

]

const young_pets = (pet) => {
    return pet.age <=10;
}

const age_pets = (pet) => {
    return [pet.name, pet.age + 10];
}





