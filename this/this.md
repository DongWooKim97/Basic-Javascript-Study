# this

## 1. this 키워드란?

- 객체는 상태를 나타내는 프로퍼티와 동작을 나타내는 메서드를 하나의 논리적인 단위로 묶은 복합적인 자료구조다.<br>
  동작을 나타내는 메서드는 자신이 속한 객체의 상태, 즉 프로퍼티를 참조하고 변경할 수 있어야 한다. 이때, 메서드가 자신이 속한 객체의 프로퍼티를 참조하려면 먼저 _자신이 속한 개체를 가리키는 식별자를 참조할 수 있어야 한다._

<br>

- 이때, this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수다.
  this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.

#### 그렇다면 어떻게 this가 가리키는 값이 정해질까?

> this는 JS 엔진에 의해 암묵적으로 실행되며, this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 *동적*으로 결정

<br>

```javascript
const circle = {
	radius: 5,
	getDiameter() {
		return 2 * this.radius;
	},
};

console.log(circle.getDiameter());
```

<br>

- 위 코드에서는 객체 리터럴의 메서드 내부에서의 this는 메서드를 호출한 객체, 즉 `circle`을 가리킨다.

<br>

```javascript
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getDiameter = function () {
	return 2 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter());
```

<br>

- 위 코드에서는 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
- 이처럼 this는 상황에 따라 가리키는 대상이 다름.

<br>

## 2. 함수 호출 방식과 this바인딩

<br>

> - this 바인딩(this에 바인딩될 값)은 함수 호출 방식, 즉 함수가 어떻게 호출되었는지에 따라 동적으로 결정된다.
> - 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는this바인딩은 함수 호출 시점에 결정!

### 함수 호출 방식

<br>

|  1  |                         일반 함수 호출                         |
| :-: | :------------------------------------------------------------: |
|  2  |                          메서드 호출                           |
|  3  |                        생성자 함수 호출                        |
|  4  | Function.prototype.apply / call / bind 메서드에 의한 간접 호출 |

<br>

### 2.1 함수 호출 - 일반 함수 호출

<br>

- 기본적으로 `this`에는 전역 객체가 바인딩 된다.

```javascript
function foo() {
	console.log('hello', this); // if strict mode - window / not - undefined
	function bar() {
		console.log('fellow', this); // if strict mode - window / not - undefined
	}
	bar();
}
foo();
```

- 위 예저처럼 전역 함수는 물론이고 중첩 함수를 일반 함수로 호출하면 함수 내부의 this에는 전역 객체가 바인딩.
- **다만 this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이므로 객체를 생성하지 않는 일반함수에서 this는 의미가 없다!**

```javascript
var value = 1;

const obj = {
	value: 100,
	foo() {
		console.log("foo's this:", this); // {value : 100, foo : function}
		console.log("foo'sthis.value", this.value); // 100

		// 메서드 내에서 정의한 중첩함수
		function bar() {
			console.log("bar's this : ", this); // window
			console.log("bar's this.valie : ", this.value); // 1
		}

		bar();
	},
};

obj.foo();
```

> 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩 된다.

- 그렇기에 `fucntion bar()`에서의 `this`는 일반함수로 호출되었기 때문에 window가 출력된다.
- 즉, **어떠한 함수라도 일반 함수로 호출되면 this에 전역 객체가 바인딩 된다.**
