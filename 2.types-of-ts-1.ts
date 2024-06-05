// let a: number = 1;
// let b: string = 'i1';
// let c: boolean = true;

let a: number[] = [1, 2];
let b: string[] = ['i1', '1'];
let c: boolean[] = [true];

//////////////////////////////////////////////////////////////
// ✅ Alias(별칭) 타입을 생성할 수 있음 - 재사용
// 타입 별칭(Type Alias)은 타입에 대한 새로운 이름을 만드는 데 사용
type Player = {
  name: string;
  age?: number;
};

type StringAlias = string;
let myString: StringAlias = '안녕하세요, 세상!';

/* 
이 예시에서 StringAlias는 string 타입에 대한 타입 별칭입니다. 
새로운 타입을 생성하는 것이 아니라, 기존 타입에 대한 새로운 이름을 만드는 것입니다. 
이는 복잡한 타입을 다룰 때나 타입에 더 의미 있는 이름을 주고 싶을 때 특히 유용합니다.
*/

// 이렇게 과하게는 아니지만 이렇게도 할 수 있음
// type Age = number
// type Name = string
// type Player = {
//   name: Name;
//   age?: Age;
// };

// ✅ object의 타입을 명시적으로 정해주는 방법
// ✅ optional parameter(선택적 변수)
// age는 있을 수도 있고 없을 수도 있음
// const playerNico: {
//   name: string;
//   age?: number;
// } = {
//   name: 'nico',
// };

// Alias(별칭) 타입을 쓰면 아래처럼 쓸 수 있음
const nico1: Player = {
  name: 'nico',
};
const lynn: Player = {
  name: 'lynn',
  age: 12,
};

//////////////////////////////////////////////////////////////
// ✨ : 타입, : 타입 이런식
// ✅ argument(인수)의 타입 지정 - (name: string)
// ✅ 함수 return값의 타입지정
// string 타입으로 name을 받고 player 타입을 return 하는 함수

// 🔸 문자열 배열을 반환하는 함수
function name(): string[] {
  // 함수 구현
}

function getStringArray(): string[] {
  return ['안녕하세요', '세상'];
}

function playerMaker(name: string): Player {
  return {
    // name:name //뒤에 name 생략가능
    name,
  };
}

// ✅ 화살표 함수
const playerMaker1 = (name: string): Player => ({ name });

const nico = playerMaker('nico');
nico.age = 12;
