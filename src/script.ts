import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

let masrafee: IsPlayer;
masrafee = new Player("Masrafee", 35, "Bangladesh");

let sakib: IsPlayer;
sakib = new Player("Sakib", 33, "Bangladesh");

const players: IsPlayer[] = [];

players.push(masrafee);
players.push(sakib);

// interface RectangleOptions {
//   width: number;
//   length: number;
// }

// function drawRectangle(options: RectangleOptions) {
//   let width = options.width;
//   let length = options.length;
// }

// let threeDOptions = {
//   width: 20,
//   length: 10,
//   height: 10,
// };
// drawRectangle(threeDOptions);
