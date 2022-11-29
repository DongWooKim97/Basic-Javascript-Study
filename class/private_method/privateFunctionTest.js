// class Test {
// 	#privateField;

// 	constructor(number) {
// 		this.#privateField = number;
// 	}

// 	#privateMethod() {}

// 	#getPrice() {
// 		return this.#privateField;
// 	}
// }

// const test = new Test(100);
// console.log(test.#getPrice());

/// error 1

// class Test {
// 	#privateField;

// 	constructor(number) {
// 		this.#privateField = number;
// 	}
// 	#getPrice() {
// 		return this.#privateField;
// 	}

// 	getPrice() {
// 		return this.#getPrice();
// 	}
// }

// const test = new Test(100);
// console.log(test.getPrice());

// // 프라이빗 필드를 외부로 배출하기 위해서는 다른 방법을 고수
// // 프라이빗 메소드를 내부에서 거쳐 사용하도록 유도

class Test {
	static #privateStaticMethod() {
		return 42;
	}

	static publicStaticMethod1() {
		return Test.#privateStaticMethod();
	}

	static publicStaticMethod2() {
		return this.#privateStaticMethod();
	}
}

console.log(Test.publicStaticMethod1() === 42);
// true
console.log(Test.publicStaticMethod2() === 42);
// true
