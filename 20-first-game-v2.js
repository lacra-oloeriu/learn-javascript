
const say = (prompt) => {
    console.log(prompt);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    //let's put some logic in here 
    if(hp <= 0) {
        die("you died!");
    } else {
        return (prompt)
    }
}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    let next = ask(hp, "What do you do?");
    if ( next === "climb") {
        say("You climb down the rope.");
        rope (hp);
    }
    
}

well(10);
