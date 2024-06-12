// ✅ polymorphism (다형성)
// 다른 모양의 코드를 가질 수 있게 해줌
// 다형성을 이룰 수 있는 방법은 제네릭을 사용하는 것
// 제네릭은 placeholder 타입을 쓸 수 있도록 해줌
// concrete 타입이 아니라 placeholder 타입

// ✅ 로컬 스토리지 API 만듦. 제네릭 사용
// 자바스크립트에서 사용한 로컬 스토리지 API와 같은 API를 가지는 클래스를 만듦
// Storage는 타입스크립트에 의해 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스임
// 그래서 이름 다르게 함 SStorage
interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    //  key와 value를 스토리지에 저장
    this.storage[key] = value;
  }
  // remove는 string 형식의 key를 받아서 이걸 로컬 스토리지로부터 지움
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

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get('xxx');
booleansStorage.set('hello', true);
