// new 연산자 사용
function structure(first, last) {
  this.first = first;
  this.last = last;
  this.printer = function () {
    return this.first + " " + this.last;
  };
}
var building = new structure("삼성", "빌딩");
console.log(building.printer());

// new 연산자 사용 x
function structure(first, last) {
  this.first = first;
  this.last = last;
  this.printer = function () {
    return this.first + " " + this.last;
  };
}
var building = structure("삼성", "빌딩");
console.log(printer()); // 전역객체로 되어있음
