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

const door = (hp) => {
    say("You open the door and get the gold");
    say("A monster is guarding the goold");
    say("Use a shiny thing to bit the monster");
    //let after = ask(hp, "What do you do?");
    if ( next ==="spider") {
        say("you open the door.");
        (hp);
    }else if (next ==="bit the monster") {
        say("You bit the monster");
        hp= Math.floor(hp/2);
        (hp)
    }else {
        say("you can't do that here")
        (hp)
    }
    //they have to open the door to get the gold
    //what kind of puzzel will thwy solve?
}

const spider = (hp) => {
    //They enter here, annd the spider takes 10 hits points.
    //if they live then theey can run away
}

const gold = (hp) => {
    //end of the game they win if they get the gold
}

const rope = (hp) => {
    if (hp < 0) {
        die("You didn't make it");
    } else {
        say("You made it!");
    }
    ask( hp, "What's next?");
    //they are at the bottom of the well
    //they can go through the door to the gold
    //or go take a wrong turn to the spider
}

const well = (hp) => {
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
well(hp)
