const printPerson = (name, age) => {
    console.log(`Hi ${name}, you are ${age} years old.`);
};

printPerson('Lacra', 51);
printPerson('Bogdan', 46);
printPerson('Calin', 16);
printPerson('Cezar', 13);

console.log('-------------pets-----------');

const printPet = (owner_name, owner_age, pet_name, pet_age) => {
    printPerson(owner_name, owner_age);
    console.log(`That person owns ${pet_name} who is ${pet_age} years old`);
};

printPet('Lacra', 51, 'Mr.Scruffles' , 10);
printPet('Bogdan', 46, 'Crazy', 2);
printPet('Calin', 16, 'LizzyLizard', 1);
printPet('Cezar', 13, 'Kong The Donkey', 20);
 