// 복습
// return 타입을 굳이 적지 않아도 됨 :number
// function add(a: number, b: number): number {
//   return a + b;
// }

// ✅ call signatures
// ✨ 많이 쓰임
// 내가 원하는 함수만의 타입을 만들고 싶을 때, 여기서는 Add 함수만의 타입
// 함수 구현에서 타입을 작성하지 않는 것!
// call signatures는 함수 위에 마우스를 올렸을 때 보게 되는 걸 말한다
// 이것은 함수를 어떻게 호출해야하는지, 반환 타입도 알려줌
// 함수의 타입, 인자(arguments)타입, 함수의 반환 타입 알려줌
// 함수 구현 전에 타입을 만들고 함수가 어떻게 작동하는지 서술해 둘 수 있다
// 함수의 타입 설명하고 => 코드 구현
// 타입 선언할 때 코드를 구현하면서 같이 썼어야 했지만 이 과정을 분리해서구 구현하는 것
type Add = (a: number, b: number) => number;

// 긴 버젼
type Add = {
  (a: number, b: number): number;
};

// call signatures를 작성해두면 타입을 지정할 필요가 없다
// const add: Add = (a: number, b: number) => a + b;
const add: Add = (a, b) => a + b;
