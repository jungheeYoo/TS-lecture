// ✅ polymorphism (다형성)
// 다른 모양의 코드를 가질 수 있게 해줌
// 다형성을 이룰 수 있는 방법은 제네릭을 사용하는 것
// 제네릭은 placeholder 타입을 쓸 수 있도록 해줌
// concrete 타입이 아니라 placeholder 타입
// 때가 되면, 타입스크립트가 placeholder 타입을 concrete 타입으로 바꾸어 줌

// ✅ 로컬 스토리지 API 만듦. 제네릭 사용
// 자바스크립트에서 사용한 로컬 스토리지 API와 같은 API를 가지는 클래스를 만듦
// Storage는 타입스크립트에 의해 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스임
// 그래서 이름 다르게 함 SStorage
interface SStorage<T> {
  // : T; => 이것은 key가 제한되지 않은 오브젝트를 정의하게 해줌
  [key: string]: T;
}

// constructor()를 사용하지 않아도 됨
// TypeScript에서는 클래스의 필드를 선언할 때 초기값을 직접 지정하면, 해당 값으로 자동으로 초기화된다.
// private storage: SStorage<T> = {};는
// storage 필드를 빈 객체로 초기화하는 코드
// 이 경우, 명시적인 생성자 없이도 필드가 적절하게 초기화 된다
// storage 객체 이름
class LocalStorage<T> {
  private storage: SStorage<T> = {};

  set(key: string, value: T) {
    //  key와 value를 스토리지에 저장
    this.storage[key] = value;
  }
  // remove는 string 형식의 key를 받아서 이걸 로컬 스토 리지로부터 지움
  remove(key: string) {
    delete this.storage[key];
  }
  // key를 받는 get도 필요. 이건 T를 리턴해줌
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    // clear는 그냥 스토리지를 비워줌
    this.storage = {};
  }
}

// LocalStorage 클래스 사용
// <string> 타입 명시
const stringsStorage = new LocalStorage<string>();

// stringsStorage.get()을 쓰면
// string을 보내주고, string을 받게 됨
// 제네릭을 바탕으로 call signature 를 만들어줌
// get(key: string): string
// get을 쓰면, string을 보내주고, T를 받음
stringsStorage.get('ket');
stringsStorage.set('hello', 'How are you');
console.log(stringsStorage);
// LocalStorage: {
//   "storage": {
//     "hello": "How are you"
//   }
// }

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx');
booleansStorage.set('hello', true);
console.log(booleansStorage);
// LocalStorage: {
//   "storage": {
//     "hello": true
//   }
// }
console.log(booleansStorage.get('hello')); // true
console.log(booleansStorage);
// LocalStorage: {
//   "storage": {}
// }
