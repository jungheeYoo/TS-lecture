// ✅ readonly - 수정할 수 없음. 오류 남.
/* 
TypeScript의 readonly 수정자는 JavaScript로 컴파일되지 않습니다. 
TypeScript의 readonly 수정자는 초기화된 후에 속성을 다시 할당할 수 없음을 나타내지만, 
이는 타입 검사 기능일 뿐입니다. 
컴파일 타임에 타입 안전성을 보장하기 위해 사용되며, 생성된 JavaScript 코드에는 존재하지 않습니다.
readonly 수정자는 JavaScript 코드에는 나타나지 않습니다. 
이는 개발 중 불변성과 관련된 오류를 잡는 데 도움이 되는 순수한 컴파일 타임 기능이며, 
런타임에는 아무런 영향을 미치지 않습니다.
*/
type Age = number;
type Name = string;
type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker('nico');
nico.age = 12;
// nico.name = 'las'; // 오류

const number: readonly number[] = [1, 2, 3, 4];
// numbers.push(1) // 오류
const names: readonly string[] = ['1', '2'];
// names.push('3') // 오류, 하지만 map은 가능 새로운 배열을 만들기 때문

///////////////////////////////////////////////////////////////////
// ✅ Tuple
// array를 생성할 수 있게 함. 특정 위치에 특정 타입 있어야함.
// ✨ 어디에 사용? 이걸 사용하면 항상 정해진 갯수의 요소를 가져야하는 array를 지정할 수 있다
// 그리고 원하는 순서에 맞는 타입을 가져야함
/* 
TypeScript에서 튜플(Tuple)은 길이와 각 위치의 타입이 고정된 배열을 지정하는 데 사용됩니다. 
이는 배열의 각 요소 타입과 위치가 정확히 알려지고 강제되는 정밀한 타입 정의를 가능하게 합니다.
*/
const Player: [string, number, boolean] = ['nico', 1, true];
// Player[0] = 1; // 오류 : TS가 첫 번째 index는 항상 string이어야 한다는 것을 알기 때문

// 🔸 readonly도 같이 쓸 수 있음
const Player1: readonly [string, number, boolean] = ['nico', 1, true];
// Player1[0] = 'hi'; // 오류

///////////////////////////////////////////////////////////////////
// ✅ any
// 비어있는 값들을 쓰면 기본값이 any가 됨
// 타입스크립트로부터 빠져나오고 싶을 때 쓰는 타입
// 타입스크립트의 보호장치들을 완전히 비활성화 시킴 (자바스크립트 됨)
// 그래서 되도록이면 any를 사용하지 말자 💩
const a: any[] = [1, 2, 3, 4];
const b: any = true;

a + b;
