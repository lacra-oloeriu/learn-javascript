const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = ( message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if (hp <= 0 ) {
        die("You died!");
    }else {
        return readline.question(prompt + '');
    }
   
    }
    //let's put some logic in here 
const rope = (hp) => {
    if (hp < 0 ) {
        die("You didn't make it.");
    }else {
        say("You made it!");
    }
}


const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    let next = ask(hp, "What do you do?");
    
    
}

//let hp = Math.floor(Math.random() * 10) + 1;

well(10);
