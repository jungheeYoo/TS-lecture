// ✅ 해시맵 만들기 (해싱 알고리즘을 씀)
// object의 Type을 선언 해야할 때 씀
// property에 대해서 미리 알진 못하지만 타입을 알고 있을 때 씀
// Words 이 오브젝트는 제한된 양의 property 혹은 key를 갖는 타입을 정의해주는 방법
// 인덱스 시그니처는 객체의 키가 어떤 타입의 값이어야 하는지를 정의하는데 사용
// 인덱스 시그니처는 객체의 속성이 특정 타입의 키와 특정 타입의 값으로 이루어져 있음을 나타냄

// 콜 시그니처는 함수 타입을 정의하는 데 사용
// 함수 타입을 정의할 때 함수의 매개변수와 반환 타입을 명시

// 🔸 Words 타입이 string만을 property로 가지는 오브젝트라는 것을 말해줌
type Words = {
  // [key:number]: string
  // [key:string]: string
  [key: string]: string;
};

// let dict :Words = {
//   1: 'food'
//   'potato': 'food'

// }

class Dict {
  // 🔸 wordsfmf initializer(초기화) 없이 선언해주고
  private words: Words;
  // 🔸 Constructor에서 수동으로 초기화
  constructor() {
    this.words = {};
  }
  // 🔸 단어 추가 메소드
  // 단어가 사전에 이미 존재하는 지 확인 후,
  // 존재하지 않으면 단어와 그 정의를 추가
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  // 🔸 term을 사용해 def를 찾는 불러오는 메소드
  def(term: string) {
    return this.words[term];
  }
}

// 🔸 Word 클래스
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');

const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi');
