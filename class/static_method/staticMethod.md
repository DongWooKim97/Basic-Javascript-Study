# Class Static method

<br>

## 📚 1. Static method, 정적 메소드란?

- 우선 `static`는 클래스의 메소드를 정적으로 정의하는 키워드이다.
  정적메소드는 -> 인스턴스의 프로토타입 체인에 속하지 않는다. 그렇기 때문에 프로토타입 메소드와 아래와 같은 차이를 가진다.

  | <div style="color:blue">static method | <div style="color:red">prototype method |
  | :------------------------------------ | :-------------------------------------: |
  | 클래스로 호출                         |             인스턴스로 호출             |
  | 인스턴스 프로퍼티 참조 X              |        인스턴스 프로퍼티 참조 O         |

  </div>

<br>

- 아래 코드는 프로퍼티로 호출하지 않고 인스턴스로 호출하는 정적 메소드를 볼 수 있다.

```javascript
class ClassWithStaticMethod {
	static staticProperty = "someValue";
	static staticMethod() {
		return "static method has been called.";
	}
	static {
		console.log("Class static initialization block called");
	}
}

console.log(ClassWithStaticMethod.staticProperty);
// output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// output: "static method has been called."
```

<br>

## 📚 2. Static method의 호출

- 동일 클래스 내에 다른 정적 메소드를 호출하기 위해서는 `this`키워드를 사용할 수 있다.
- 이러한 경우는 하나의 정적 메소드가 다른 정적 메소드를 부를 떄만 가능하다.
  - 아래의 코드로 예시를 들면, `staticMethod()`라는 한 정적을 `anotherStaticMethod()`라는 다른 정적 메소드가 호출하고 있다.

<br>

```javascript
class StaticMethodCall {
	static staticMethod() {
		return "Static method has been called";
	}
	static anotherStaticMethod() {
		return this.staticMethod() + " from another static method";
	}
}
StaticMethodCall.staticMethod();
// 'Static method has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method has been called from another static method'
```

<br>

[출처] : <https://seo-tory.tistory.com/80>

[출처] : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static>
