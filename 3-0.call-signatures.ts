// ✅ call signatures
// 함수 구현 전에 타입을 만들고 함수가 어떻게 작동하는지 서술해 둘 수 있다
// 함수의 타입 설명 => 코드 구현
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
