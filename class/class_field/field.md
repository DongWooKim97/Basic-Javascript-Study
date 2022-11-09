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
