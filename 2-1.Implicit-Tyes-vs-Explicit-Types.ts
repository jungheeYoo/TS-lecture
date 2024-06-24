// ✅ Type Checker
// 1. 타입 추론
// 보통은 명시적 표현은 최소한으로 하고 추론하는 것이 낫다
// 2. 명시적으로 알려줌
let a = 'hello';
let b = false; // 추론
let c: number[] = []; // 이런식으로 아무것도 들어있지 않을 때는 명시적 표현이 좋다
c.push(1);
const player = {
  name: 'nico',
};
player.hello();
// 에러
// Property 'hello' does not exist on type '{ name: string; }'.ts
