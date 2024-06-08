// type SuperPrint = {
//   <T, M>(arr: T[], b: M): T;
// };

// const superPrint: SuperPrint = (arr) => arr[0];

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
