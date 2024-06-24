// ❓ 어떤 타입인지 모르는 변수는 Typescript에게 어떻게 말해줘야 할까?

// ✅ unknown - 어떤 타입인지 모른다면?
// 😀 void 다음 많이 사용
// 변수의 타입을 미리 알지 못할 때 unknown을 사용

let a: unknown;

// 어떤 작업을 하려면 이 변수의 타입을 먼저 확인해야 하는 방식으로 쓴다
// 예를 들어 let b = a + 1이라고 하면, Typescript는 허용해 주지 않음
// a의 타입이 unknown이기 때문
// 그래서 먼저 확인을 해야함. 확인하는 코드를 작성하면 문제 없이 작업 허용

// a의 타입이 'number'와 같다면?
if (typeof a === 'number') {
  // 이것이 참이니 a는 number이다
  let b = a + 1;
}
if (typeof a === 'string') {
  let b = a.toUpperCase();
}

///////////////////////////////////////////////////////////////////
// ✅ void - 아무것도 return하지 않는 함수를 대상으로 사용
// ✨ 제일 많이 사용
// void는 비어 있는 것
// 보통 void는 따로 지정해줄 필요 없음
// 타입스크립트는 이 함수가 아무것도 return하지 않는다는 것을 자동으로 인식함

function hello() {
  console.log('x');
}

///////////////////////////////////////////////////////////////////
// ✅ never
// 1. 함수가 절대 return하지 않을 때 발생
// 😂 거의 사용 안함
// 많이 사용되진 않음
// 함수에서 exception(예외)이 발생할 때
function hello1(): never {
  // return 'X' // 이건 오류
  throw new Error('xxx'); // 이건 return하지 않고 오류를 발생시키는 함수
}

// 2. 타입이 두 가지 일 수도 있는 상황에 발생
// 타입스크립트에게 name은 string이나 number라고 알려주고 둘 중에 하나가 실행 될 것임
// 그래서 만약 타입이 올바르게 들어온다면 else코드는 작동하지 않음
// 이건 절대 실행되면 안됨
function hello2(name: string | number) {
  if (typeof name === 'string') {
    name; // string
  } else if (typeof name === 'number') {
    name; // number
  } else {
    // 두 타입 모두 확인을 해줬기 때문에 여기에 뭘 쓰든지 그 타입은 never가 될 것임
    name; // never
  }
}
