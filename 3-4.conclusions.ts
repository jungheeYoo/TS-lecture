// ✅ 실제로 제네릭을 어떻게 다루는 지?
// call signature 외에 타입 생성 외에 또 어디서 쓸 수 있는지?
// 타입 확장할 수 있음
// 코드 저장할 수 있음

// type SuperPrint = {
//   <T, M>(arr: T[], b: M): T;
// };

// 🔸 화살표 함수
// const superPrint: SuperPrint = (arr) => arr[0];

// 🔸 일반 함수로도 할 수 있음
function superPrint<T>(a: T[]) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false, true]);
const c = superPrint(['a', 'b', 'c']);
const d = superPrint([1, 2, true, false, 'hello']);

////////////////////////////////////////////////////////
type Player<E> = {
  name: string;
  extraInfo: E;
};

// const nico: Player<{favFood:string}> = {
//   name: 'nico',
//   extraInfo: {
//     favFood: 'Kimchi',
//   },
// };
// 아래처럼 쓸 수도 있음

type NicoExtra = {
  favFood: string;
};
type NicoPlayer = Player<NicoExtra>;

const nico: NicoPlayer = {
  name: 'nico',
  extraInfo: {
    favFood: 'Kimchi',
  },
};

const lynn: Player<null> = {
  name: 'lynn',
  extraInfo: null,
};

////////////////////////////////////////////////////////
// 제네릭은 함수에서만 쓰이는 것이 아님
// 이렇게 생긴 것도 많이 보게 될 것임
type A = Array<number>;

let a: A = [1, 2, 3, 4];

function printAllnumbers(arr: Array<number>);
