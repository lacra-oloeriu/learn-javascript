const readline = require('readline-sync');
//prompt method allows you to display a dialog ox to the user and prompt them for imput.It takes as parameter the message that you want to diaplay

const say = (prompt) => {
    console.log(prompt);
}

const die = (message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if(hp <= 0) {
        die("You died!");
    } else {
        return readline.question( prompt + ' ');
    }
}

//const door = (hp) => {
   // }
    //they have to open the door to get the gold
    //what kind of puzzel will thwy solve?'

const spider = (hp) => {
    say("")
    say("You enter here and you find a spider.");
    say("The spider take you 10 hp.");
    hp = hp - 10;
    if ( hp >= 0) {
        say("you manage to escape");
        rope(hp);
    } else {
        say("You died")

    }

    //They enter here, annd the spider takes 10 hits points.
    //if they live then theey can run away
}

const gold = (hp) => { 
    //they have to open the door to get the gold
    //what kind of puzzel will thwy solve?'
    //end of the game they win if they get the gold
}

const rope = (hp) => {
    say("")
    say("You are at the botton pg the well.");
    say("You see two doors");
    let next = ask(hp, "Wich one do you chose? The left or the right?")
    if (next === "left") {
        spider(hp);
    } else  if (next ==="right") {
        gold(hp);
    }
    
    //they are at the bottom of the well
    //they can go through the door to the gold
    //or go take a wrong turn to the spider
}

const well = (hp) => {
    say("")
    say("You are walking through the woods and see a well.");
    say("Walking up to it and looking down");
    say("you see a shiny thing at the bottom.");
    let next = ask(hp, "What do you do?");

    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } else {
        say("You can't do that here.");
        well(hp);
    }
}

// setup hit points
let hp = Math.floor(Math.random() * 10) + 1;

// this starts the game
well(20)
