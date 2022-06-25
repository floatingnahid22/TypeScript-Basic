"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const masrafee = new Player("Masrafee", 35, "Bangladesh");
const sakib = new Player("Sakib", 33, "Bangladesh");
const players = [];
players.push(masrafee);
players.push(sakib);
