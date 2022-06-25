class Player {
  constructor(
    private name: string,
    public age: number,
    readonly country: string
  ) {}
  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const masrafee = new Player("Masrafee", 35, "Bangladesh");
const sakib = new Player("Sakib", 33, "Bangladesh");

// private access modifier use  korle class er baire theke property read kora  ba access kora jay nah
// console.log(sakib.name);
// public use korle kora jay
console.log(sakib.age);
// readonly korle just read korte parbe change nah
// sakib.country = "India" not possible
console.log(sakib.country);
const players: Player[] = [];

players.push(masrafee);
players.push(sakib);
