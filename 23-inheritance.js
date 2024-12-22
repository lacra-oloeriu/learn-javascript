class Guitar {
    constructor (color, name, wood) {
        this.color = color;
        this.name = name;
        this.wood = wood;
    }

    play(note) {

        //console.log("Playing", note)
        console.log(`${this.name}: ${this.color}: ${this.wood}: plays ${note}`)
    }
}



class Telecaster extends Guitar {
    volum(level) {
        console.log("Volume", level)
    }
    tone(level) {
        console.log("Tone", level)
    }
}


let g1 = new Guitar();
g1.play("A");
let t1 = new Telecaster
t1.volum ("L")
t1.tone("L1")

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


class Musician extends Person {
    play(instrument, sheet_music) {
        for(let note of sheet_music) {
            instrument.play(note)
        }
    }
}

let alex = new Musician("Alex" , 16 , "green" )
alex.talk("I am playing some tones")

