// 일반함수 예제 1
// function foo() {
// 	console.log('hello', this); // if strict mode - window / not - undefined
// 	function bar() {
// 		console.log('fellow', this); // if strict mode - window / not - undefined
// 	}
// 	bar();
// }
// foo();

//  일반함수 예제 2

var value = 20;

const obj = {
	value: 100,
	foo() {
		console.log("foo's this:", this); // {value : 100, foo : function}
		console.log("foo'sthis.value", this.value); // 100

		// 메서드 내에서 정의한 중첩함수
		function bar() {
			console.log("bar's this : ", this); // window
			console.log("bar's this.value : ", this.value); // 1
		}

		bar();
	},
};

obj.foo();
