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


//let g1 = new Guitar();
//g1.play("A");

let t1 = new Telecaster
t1.volum ("L")
t1.tone("L1")
