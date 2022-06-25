// generics

// const addID = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addID({
//   name: "Masrafee",
//   age: 35,
//   country: "Bangladesh",
// });

// addID(user);

// for interface- generics
interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

// object

const responseOne: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "Test",
    something: 300,
  },
};

// string

// const responseOne: APIResponse<string> = {
//   status: 200,
//   type: "good",
//   data: "test",
// };
