// ✅ 추상 클래스 (Abstract Class)
// 다른 클래스가 상속받을 수 있는 클래스
// 😔 하지만 이 클래스는 직접 새로운 인스턴스를 만들 수는 없다 ⬇
abstract class User {
  constructor(
    // private firstName: string,
    // private lastName: string,
    // private nickname: string
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  // ✅ 추상 메소드
  // 구현이 되어 있지 않은(코드가 없는) 메소드
  // call signature만 갖고 있음
  // 함수 이름과, argument를 안받을 때도 있지만
  // argument를 받을 경우 argument의 이름과 타입, 그리고 함수의 리턴타입을 정의함
  abstract getNickName(): void;

  // 메소드도  private 가능
  // private getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }
  // ✨ 추상 메소드를 만들려면, 메소드를 클래스 안에서 구현하지 않으면 돼
  // 이 부분 다시 정리 해야함
  getFullName() {
    // 이 부분을 작성하지 않으면 돼
    // 이 부분이 메소드의 implementation(구현)이야
    return `${this.firstName} ${this.lastName}`;
  }
  // 그리고 만약 추상 클래스에서 getFullName의 예시처럼 메소드를 구현한다면
}

// ----------------------------------------------------
// ✅ 타입스크립트로 class 를 만드는 방법
// class Player {
//   constructor(
//     private firstName: string,
//     private lastName: string,
//     public nickname: string
//   ) {}
// }

class Player extends User {
  // ✨ 추상 메소드가 있는 경우, 추상 클래스를 상속받는 클래스에서
  // 추상 메소드를 구현해줘야 한다
  getNickName() {
    console.log(this.nickname);
  }
}

// const nico = new User('nico', 'las', '니꼬'); ⬅
const nico = new Player('nico', 'las', '니꼬');

// nico.getFullName(); // private으로 만들면 더 이상 작동하지 않음
nico.getFullName(); // 상속 받는 Player 클래스는 getFullName을 호출할 수 있게 된다

// ----------------------------------------------------
// ✨ private, protected, public 차이
// 🔸 public
// 기본적으로 모든 것은 public (public 메소드 public 함수...) public이라고 적어도 되고 안적어도 됨
// 선언한 클래스, 상속 받은 클래스, 인스턴스 내에 모두 사용 가능

// 🔸 private
// private은 선언한 클래스 내에서만 사용 가능

// 🔸 protected
// 선언한 클래스, 상속 받은 클래스 내에서 사용 가능
