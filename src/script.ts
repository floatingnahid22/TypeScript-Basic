// enums
enum RType {
  SUCCESS,
  FAILURE,
  UNAUTHENTICATED,
  FORBIDEN,
}

interface APIResponse<T> {
  status: number;
  type: RType;
  data: T;
}

const responseOne: APIResponse<string> = {
  status: 200,
  type: RType.FAILURE,
  data: "test",
};

console.log(responseOne);
