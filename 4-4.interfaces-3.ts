// ✅ 타입과 인터페이스 비교

// 📍 타입을 쓰고 싶다면, type 키워드를 씀
// 옵션 1. 오브젝트 모양을 설명
// 옵션 2. 타입 alias를 만드는 것
// 옵션 3. 타입을 특정된 값으로 만드는 것

//---------------------------------------------------------

// 🙆‍♀️ 둘 다 같은 목표 : 타입스크립트에게 오브젝트의 모양과 타입을 알려주는 것
// 타입스크립트에게 오브젝트의 모양을 알려주고 싶다면 타입과 인터페이스를 쓸 수 있음
// 과정 같음

// 🙅‍♀️ 타입 상속 방법 : 결과는 같지만 과정이 다름

//---------------------------------------------------------
// 🔸 type
type PlayerA = {
  name: string;
};
// 🔹 type 상속 방법
// PlayerAA 타입이 PlayerA 타입과 lastName을 가지는 오브젝트를 합친 거라고 알려줘야 함
// 🔹 property 를 타입에 추가
// 새 타입(type PlayerAA)을 만들고 PlayerA를 써 준 다음 남은 것들을 써줘야 해
type PlayerAA = PlayerA & {
  lastName: string;
};
// ❌ 이렇게는 안 됨. 왜냐하면 PlayerAA 타입이 이미 정의되어 있기 때문. 중복
// type PlayerAA = {
//   health: number;
// };

// PlayerAA를 쓰고, lastName을 추가해줘야 함
const PlayerA: PlayerAA = {
  name: 'nico',
  lastName: 'xxx',
};

//---------------------------------------------------------
// 🔸 interface
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
// 🔹 property 를 타입에 추가
interface PlayerBB {
  health: number;
}
// 🔹 interface 상속 방법
const PlayerB: PlayerBB = {
  name: 'nico',
  lastName: 'xxx',
  health: 1,
};

// // 이렇게도 가능
// interface PlayerB {
//   name: string;
// }
// interface PlayerB {
//   lastName: string;
// }
// interface PlayerB {
//   health: number;
// }
// // 🔹 interface 상속 방법
// const PlayerB: PlayerB = {
//   name: 'nico',
//   lastName: 'xxx',
//   health: 1,
// };

///////////////////////////////////////////////////
// ✅ 인터페이스와 타입 모두 추상 클래스를 대체해서 쓸 수 있음
// 둘 다 클래스가 상속(implements)해서 쓸 수 있음
type PlayerA = {
  firstName: string;
};
interface PlayerB {
  firstName: string;
}
// 타입
class User implements PlayerA {
  constructor(public firstName: string) {}
}
// 인터페이스
class User implements PlayerB {
  constructor(public firstName: string) {}
}

/* 
📍 💡 타입스크립트 커뮤니티에서는 클래스나 오브젝트의 모양을 정의하고 싶으면 인터페이스를 사용하고, 
다른 모든 경우에서는 타입을 쓰라고 하고 있음
타입스크립트를 생성해주는 큰 프로젝트를 해보면, 대부분은 네게 인터페이스를 만들어줄 것임
그 이유는 인터페이스를 상속시키는 방법이 직관적이기 때문에 (feat.nico)
수많은 인터페이스 정의를 합칠 수 있음..
*/

// 차이점
// 상속
// 새 property를 추가하기 위해 다시 선언될 수 없지만, 인터페이스는 항상 상속 가능
// 기존에 존재하는 인터페이스에 새로운 타입, 아니 필드를 추가
