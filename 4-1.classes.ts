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

// 🔸 Dict 클래스
// 여러 단어와 정의를 관리하는 사전 역할
// words라는 객체에 단어를 저장하고 조회하는 기능을 제공
class Dict {
  // 🔸 words를 initializer(초기화) 없이 선언해주고
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
      // this.words 객체의 word.term 키에 word.def 값을 할당하는 역할
      // 할당 연산자(=)는 오른쪽의 값을 왼쪽의 키에 저장하는 역할
    }
  }
  // 🔸 term을 사용해 def를 찾는 불러오는 메소드
  def(term: string) {
    return this.words[term];
  }
}

// 🔸 Word 클래스
// ✨ 단어(term)와 정의(def)를 포함하는 객체를 생성하는 역할
// 이 객체는 Word 클래스의 인스턴스로, 단어와 정의를 하나의 구조화된 형태로 제공
// Word 클래스는 단어와 그 정의를 캡슐화하는 역할을 하며,
// 이 인스턴스를 Dict 클래스의 메서드에 전달하여 단어 사전에 추가하거나 조회할 때 사용
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word('kimchi', '한국의 음식');
const bibimbap = new Word('bibimbap', '한국의 밥 요리');

const dict = new Dict();

console.log(dict);
// // 초기화 됨
// Dict: {
//   "words": {}
// }

dict.add(kimchi);
dict.add(bibimbap);
dict.def('kimchi');

console.log(kimchi);
// // 단어(term)와 정의(def)를 포함하는 객체를 생성
//  Word: {
//   "term": "kimchi",
//   "def": "한국의 음식"
// }

console.log(dict);
// Dict: {
//   "words": {
//     "kimchi": "한국의 음식",
//     "bibimbap": "한국의 밥 요리"
//   }
// }
