// ✅ concrete type
// number,boolean,string...Void, unknown

// ✅ generic type
// call signature를 작성할 때, 여기 들어올 확실한 타입을 모를 때 사용
// 타입스크립트는 placeholder에서 타입스크립트가 여기에 알아낸 타입으로 대체 해줌

// call signature
type SuperPrint = {
  // (arr: number[]): void;
  // (arr: boolean[]): void;
  // (arr: string[]): void;
  // (arr: (number | boolean)[]): void;

  // <TypePlaceholder>(arr: TypePlaceholder[]): void; // void 리턴 안함
  // <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder; // 보통 짧게 아래처럼 씀

  // arr: T[] = arr의 타입의 배열이 될 것이라는 것을 인지하고
  // : T; = 타입 중 하나를 리턴
  <T>(arr: T[]): T;

  // SuperPrint 제네릭을 하나 더 추가
  // <T, > 제네릭을 사용할거라고 얘기해주고
  // < , M> 어디에서 이 제네릭을 사용할 것인지 얘기함
  // 여기서는 제네릭이 함수의 두 번째 인자를 사용한다고 함
  // T : 함수의 첫 번째 파라미터로 배열이 올 거라고 말해주고
  // M :  두 번째 파라미터로 들어온다고 얘기하는 것임
  <T, M>(arr: T[], b: M): T;
};

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => {
//     console.log(i);
//   });
// };

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 'x');
const b = superPrint([true, false, true], 1);
const c = superPrint(['a', 'b', 'c'], false);
const d = superPrint([1, 2, true, false, 'hello'], []);
