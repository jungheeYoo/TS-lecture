// ✅ concrete type
// number,boolean,string...Void, unknown

// ✅ 다형성 - polymorphism
// ✅ 제네릭 - generic type
// concrete type을 사용하는 것 대신 쓸 수 있다.
// 그니까 concrete type을 사용하지 않고 추론해서 함수 사용하게 하는 것
// 들어올 타입을 조합들을 일일이 작성하지 않고 추론해주는 것, 어떤 타입이라도 동작하게
// call signature를 작성할 때, 여기 들어올 확실한 타입을 모를 때 사용
// 타입스크립트는 placeholder에서 타입스크립트가 여기에 알아낸 타입으로 대체 해줌
// 제네릭은 기본적으로 placeholder를 사용해서 네가 작성한 코드의 타입 기준으로 바꿔준다
// 결론! 다른 조합의 경우 정의를 모든 call signature를 작성하지 않고 제네릭을 사용한다
// 제네릭은 내가 요구한 대로 signature를 생성해줄 수 있는 도구

// ✅ 제네릭 사용 방법
// 1. 먼저 알려야함. argument가 제네릭을 받는 다고 알려주는 것
// <TypePlaceholder>(arr: number[]): void;
// 2. number[] 이 부분 바꿔줌
// <TypePlaceholder>(arr: TypePlaceholder[]): void;
// 이렇게 제네릭 타입을 사용하면 기본적으로 그 유추한 타입으로 call signature 를 보여줌

// call signature
type SuperPrint = {
  // 🔸 concrete type 사용
  // (arr: number[]): void;
  // (arr: boolean[]): void;
  // (arr: string[]): void;
  // (arr: (number | boolean)[]): void;

  // 🔸 제네릭 타입 사용
  // <TypePlaceholder>(arr: TypePlaceholder[]): void; // void 리턴 안함
  // <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder; // 리턴하는 함수로 변경

  // 보통 짧게 씀
  // arr: T[] = arr의 타입의 배열이 될 것이라는 것을 인지하고
  // : T; = 타입 중 하나를 리턴
  <T>(arr: T[]): T;
};

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => {
//     console.log(i);
//   });
// };

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false, 'hello']);

/////////////////////////////////////////////////////////
// ✅ 두 번째 인자 사용 - 제네릭 타입 추가
type SuperPrint = {
  // SuperPrint 제네릭을 하나 더 추가
  // <T, > 제네릭을 사용할거라고 얘기해주고
  // < , M> 제네릭이 함수의 두 번째 인자를 사용한다고 함
  // T : 함수의 첫 번째 파라미터로 배열이 올 거라고 말해주고
  // M :  두 번째 파라미터로 들어온다고 얘기하는 것임
  <T, M>(arr: T[], b: M): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const a = superPrint([1, 2, 3, 4], 'x');
const b = superPrint([true, false, true], 1);
const c = superPrint(['a', 'b', 'c'], false);
const d = superPrint([1, 2, true, false, 'hello'], []);
