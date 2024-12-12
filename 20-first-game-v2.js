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

const door = (hp) => {
     // they have to open the door to get the gold
    // what kind of puzzle will they solve?  
    say("You open the door and get the gold")
    ask(hp, "What now?: ")
};

const spider = (hp) => {
    say("")
    say ("You enter and you find a spider");
    say ("The spider takes you 10 hit points");
    let next = ask(hp, "What you can do now??")
    if(next  = "left") {
        say("The spider took you 10 hp and  kiled you.")
    } else if (next = "right") {
        say("You manage to run away this time, go right and find a door to the gold!!")
    }else {
        ask( hp, "Did you find the door?  ")
    }


        // they enter here, and the spider takes 10 hit points
        // if they live then they can run away
};




const rope = (hp) => {
    // they are at the bottom of the well
    // they can go through the door to the gold
    // or go take a wrong turn to the spider
    say("");
    say ("You are at the botton of the well.");
    say ("Go to the rihgt and find a door.")
    say (" Go left and find a spider.")
    let next = ask ( hp, "What's next?:  ");
    if (next ==="spider" ) {
        say("You go left and find a spider.");
    }else if (next === "door") {
        say("Go to the right and find a door.");
    }
    ask( hp, "What's next?:  ");
}


const well = (hp) => {
    say("");
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    let next = ask(hp, "What do you do?: ");
    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } 
    else if (next ==="spider") {
    say("The spider took you 10 hp.Run to save you life !");
        spider(hp);
  
    }
    else {
        say("You can't do that here.");
        well(hp);
    }

    
    
}

let hp = Math.floor(Math.random() * 10) + 1;

well(25);
