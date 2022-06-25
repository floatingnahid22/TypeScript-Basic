import { Player } from "./classes/Player.js";

const masrafee = new Player("Masrafee", 35, "Bangladesh");
const sakib = new Player("Sakib", 33, "Bangladesh");

console.log(sakib.age);
console.log(sakib.country);

const players: Player[] = [];

players.push(masrafee);
players.push(sakib);
