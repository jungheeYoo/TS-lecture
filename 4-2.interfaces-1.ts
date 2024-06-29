// type Words = {
//   [key: string]: string;
// };

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }

//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.def;
//     }
//   }
//   def(term: string) {
//     return this.words[term];
//   }
// }

// // ✅ readonly : 값을 보여주는데 수정은 불가능, public이지만 더이상 변경할 수 없도록
// // 주로 누군가 데이터를 덮어쓰는 것을 방지하기 위해서 private, protected를 사용하지만
// // public으로 하고 읽기전용으로 만들면 수정하는 것으로부터 데이터를 보호할 수 있음
// class Word {
//   constructor(public readonly term: string, public readonly def: string) {}
// }

// const kimchi = new Word('kimchi', '한국의 음식');

// const dict = new Dict();

// dict.add(kimchi);
// dict.def('kimchi');

// ///////////////////////////////////////////////////////////
// // ✅ 복습

// // ✅ 타입 사용
// // 🔸 object의 모양을 알려주는 것
// // Player 타입 정의
// type Player = {
//   nickname: string;
//   healthBar: number;
// };
// // 타입스크립트의 보호 기능 사용
// const nico: Player = {
//   nickname: 'nico',
//   healthBar: 10,
// };

// // 🔸 타입이 string 이라고 알려줌
// type Food = string;

// const kimchi: Food = 'delicious';

// // 🔸 alias(대체명) 사용
// // nickname에 string 쓰는 대신 별칭 사용
// type Nickname = string;
// type Health = number;

// type Player = {
//   nickname: Nickname;
//   healthBar: Health;
// };

// // 🔸 Friends 타입이 string의 배열을 나타내도록 하기
// type Friends = Array<string>;

// // ✨ 매우 자주 볼 예정
// // 🔸 타입을 지정된 옵션으로만 제한할 수 있음 - 별칭
// // type Team = string 와 같은 concrete 타입을 썼어야 했지만
// // team이 일반적인 string이 아니라 특정 string이 되도록 한다
// // 즉, concrete 타입의 특정 값을 쓸 수 있다
// // Team이 "read", "blue", 혹은 "yellow"가 되도록 만들 수 있음
// type Team = 'read' | 'blue' | 'yellow';
// type Health = 1 | 5 | 10;

// type Player = {
//   nickname: string;
//   team: Team;
//   health: Health;
// };

// const nico: Player = {
//   nickname: 'nico',
//   // team: 'pink', // 허용되지 않음
//   team: 'yellow',
// };

///////////////////////////////////////////////////////////
// ✅ interfaces

type Team = 'read' | 'blue' | 'yellow';
type Health = 1 | 5 | 10;

// ✅타입스크립트에게 오브젝트의 모양을 알려주는 방법 두 가지

// 🔸 첫 번째
// 🔸 type을 쓰고 오브젝트 모양을 써주는 방법
// interfaces 키워드에 비해 좀 더 활용할 수 있는 것이 많다
// 오브젝트 모양, 특정 값들로만 제한, 타입 alias, ...
// interfaces와 문법 차이말고도, type이 좀 더 쓰임이 많다. 이것저것 할 수 있다
// type Player = {
//   nickname: string;
//   team: Team;
//   health: Health;
// };

// 🔸 두 번째
// 🔸 interfaces
// 오브젝트의 모양을 특정해주기 위한 것 (두 가지 방법)
// 오브젝트의 모양을 결정한다는 같은 역할을 함
// 😎 React.js를 이용해 작업할 때 많이 사용

// 오로지 오브젝트의 모양을 타입스크립트에게 설명해주기 위해서만 사용 됨
// 이 한가지 목적만 가짐
// 누군가 인터페이스를 쓴다면 그저 오브젝트의 모양을 타입스크립트에게 설명해주려고
// 객체지향 프로그램 개념 활용. 클래스를 다루는 듯한 느낌
// interface Hello = string 이런거 안 됨 ❌
// 타입스크립트에게 오브젝트의 모양을 알려줄때는 인터페이스 사용 선호 (니꼬썜)
interface Player {
  nickname: string;
  team: Team;
  health: Health;
}

const nico: Player = {
  nickname: 'nico',
  team: 'yellow',
  health: 10,
};

// 🌱 예제 - interfaces
interface User {
  // readonly name: string; // readonly 가능
  name: string;
}

// 만약 name:string을 다시 쓰기 싫다면?
// User 상속받을 수 있음
interface Player extends User {}

// name 쓸 수 있음
const nico: Player = {
  name: 'nico',
};

// nico.name = 'lalala'; // readonly 때문에 허용되지 않음

// ❓ 만약에 type이라면?
type User = {
  name: string;
};

// &는 and, |은 or
type Player = User & {};

const nico: Player = {
  name: 'nico',
};

///////////////////////////////////////////////////////////
// ✅ interfaces의 또 따른 특징
// property들을 축적시킬 수 있음
// 세 개의 인터페이스를 만듦
interface User {
  name: string;
}
interface User {
  lastName: string;
}
interface User {
  health: number;
}

// 인터페이스를 세 번 각각 만들기만 하면
// 타입스크립트가 알아서 하나로 합쳐줌
// 이걸 type로는 할 수 없음
const nico: User = {
  name: 'nico',
  lastName: 'n',
  health: 10,
};
