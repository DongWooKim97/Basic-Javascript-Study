# Class private method

<br>

## 📚 1. private method, 프라이빗 메소드란?

- 자바스크립트는 다른 언어와는 달리 생성자와 객체는 public, 공개되어있습니다. 왜냐하면 별도의 protected와 같은 선언형식이 없기 떄문입니다.
  프라이빗 메소드는 `#`식별자가 앞에 붙어 선언된다. 프라이빗 필드와 같이 외부나 별도로 만들어진 인스턴스를 통해 사용이 불가능하다.

  | <div style="color:blue">private method | <div style="color:red">prototype method |
  | :------------------------------------- | :-------------------------------------: |
  | 외부 호출 X                            |               외부 호출 O               |

  </div>

<br>

- 아래 코드는 외부에서 호출 시 에러가 나는 상황을 볼 수 있다. - error1

```javascript
class Test {
	#privateField;

	constructor(number) {
		this.#privateField = number;
	}

	#privateMethod() {}

	#getPrice() {
		return this.#privateField;
	}
}

const test = new Test(100);
console.log(test.#getPrice());
//error 1
```

위의 코드에 대한 해결법

```javascript
class Test {
	#privateField;

	constructor(number) {
		this.#privateField = number;
	}
	#getPrice() {
		return this.#privateField;
	}

	getPrice() {
		return this.#getPrice();
	}
}

const test = new Test(100);
console.log(test.getPrice());

// 프라이빗 필드를 외부로 배출하기 위해서는 다른 방법을 고수
// 프라이빗 메소드를 내부에서 거쳐 사용하도록 유도
```

<br>

## 📚 2. private static method의 사용

- 프라이빗 메소드(함수)를 static(전역)으로 선언하여 사용하는 경우도 있다.

```javascript
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
```

<br>

[출처] : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields>
