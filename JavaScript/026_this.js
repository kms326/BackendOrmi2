// this는 파이썬에서 self와 유사합니다
// 그렇지만 this는 예외사항이 너무 많아서
// 논리적으로 이해하는 것이 거의 불가합니다.

// a를 호출한 것이 window이기 때문에 this는 window를 출력합니다.

// window.a()
function a(){ console.log(this)}
a();

let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

myObj.func1();