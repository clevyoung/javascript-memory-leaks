/**
 * 자바스크립트 메모리 누수
 * var 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 된다. 전역 객체는 클라이언트 사이드 환경(브라우저)에서는 window, 서버 사이드 환경(Node.js)
 * 에서는 global 객체를 의미한다. 브라우저 환경에서 전역 객체는 window이므로 브라우저 환경에서 var 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티다.
 * 전역 객체 window는 웹페이지를 닫기 전까지 유효하다. 따라서 브라우저 환경에서 var키워드로 선언한 전역 변수도 웹페이지를 닫기 전까지 유효하다.
 * 전역변수는 생명 주기가 길다
 */

var foo = 'global variable';

function bar() {
  baz = 'this is a hidden global variable'; // 의도치 않게 생성된 전역 변수
  this.variable = 'potential accidental global';
}

// bar 함수를 호출하면, this는 window 전역 객체를 가리키게 되고 variable은 window의 프로퍼티가 된다.
bar();
