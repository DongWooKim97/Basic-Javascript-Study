# Class Field

<br>

## 📚 1. 클래스 필드란

- 클래스 필드(class field)는 클래스에 프로퍼티를 추가할 수 있는 문법이다.<br>
  아래와 같이 직접 프로퍼티를 직접 추가할 수 있으며, 정적 메소드와는 다르다.

```javascript
class User {
name = 'John'

method = () => {
}
```

- 또한 클래스 필드는 프로토타입에 저장되는 것이 아니라 개별 인스턴스에 저장된다.

<br>

## 📚 2. 프라이빗 클래스 필드

- class 의 속성(property)들은 기본적으로 public 하며 class 외부에서 읽히고 수정될 수 있다.<br>
  하지만, ES2019 에서는 해쉬 `#` prefix 를 추가해 private class 필드를 선언할 수 있게 되었다.

```javascript
class ClassWithPrivateStaticField {
	static #PRIVATE_STATIC_FIELD;

	static publicStaticMethod() {
		ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
		return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
	}
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

- Private static 필드는 class evaluation 시 class 생성자(class constructor)에 추가된다.

- Private static 필드는 해당 필드를 선언한 class 에서만 접근할 수 있다.

- 이는 this 를 사용함에 있어 예상치 못한 동작을 야기할 수 있다.

```javascript
class BaseClassWithPrivateStaticField {
	static #PRIVATE_STATIC_FIELD;

	static basePublicStaticMethod() {
		this.#PRIVATE_STATIC_FIELD = 42;
		return this.#PRIVATE_STATIC_FIELD;
	}
}

class SubClass extends BaseClassWithPrivateStaticField {}

let error = null;

try {
	SubClass.basePublicStaticMethod();
} catch (e) {
	error = e;
}

console.assert(error instanceof TypeError)``;
```

- 여기서 `console.assert()`는 ()안의 값이 false일때만 에러룰 출력하는 출력문이다
  - 반대로 `true`일떄는 출력 및 반응 ❌

<br>

## 📚 3. 프라이빗 클래스 메소드 (Private static methods)

- private static 메소드는 public static 메소드처럼 인스턴스가 아닌 class 로부터 호출된다.
- 그리고 private static 필드처럼 class 선언문 내부에서만 접근 가능하다.

```javascript
//private static 메소드는 generator, async 그리고 async generator 함수가 될 수 있다.

class ClassWithPrivateStaticMethod {
	static #privateStaticMethod() {
		return 42;
	}

	static publicStaticMethod1() {
		return ClassWithPrivateStaticMethod.#privateStaticMethod();
	}

	static publicStaticMethod2() {
		return this.#privateStaticMethod();
	}
}

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
```

- 또한 `모든 Private 필드는 소속된 클래스에 고유한 스코프를 갖는다.`라는 성질을 갖는다.

```javascript
class Human {
	#age = 10;

	getAge() {
		return this.#age;
	}
}

class Person extends Human {
	#age = 20;

	getFakeAge() {
		return this.#age;
	}
}

const p = new Person();
console.log(p.getAge()); // 10
console.log(p.getFakeAge()); // 20
```

<br>

- 동일하게 this.#age에 접근하는 getAge()와 getFakeAge()의 결과가 다르다.

- #age 즉 private 속성은 그동안 우리가 알고 있던 this 의 그 컨텍스트와는 다른 방식으로 저장된다. 기존처럼 인스턴스별로 독립적인 공간을 갖지만, 추가로 클래스 별로 독립적인 공간을 갖는 것이다.

<br>

- 쉽게 말하면 Human 클래스 스코프의 #age와 Person 클래스 스코프의 #age는 다르다는 것이다. 그러므로 Human 클래스에 속한 getAge()가 실행될때는 Human의 #age에 접근하고 Person의 getFakeAge()가 실행될 때는 Person의 #age에 접근하는 것이다.
  - 두 개 이상의 클래스가 같은 private fields를 가지고 있고 같은 이름을 참조하고 있다면, 실행되는 함수나 클래스의 스코프에 맞춰 실행 !

<br>

[출처] : <https://ui.toast.com/weekly-pick/ko_20200312>

[출처] : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields>
