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
