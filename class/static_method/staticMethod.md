# Class Static method

<br>

## π 1. Static method, μ μ  λ©μλλ?

- μ°μ  `static`λ ν΄λμ€μ λ©μλλ₯Ό μ μ μΌλ‘ μ μνλ ν€μλμ΄λ€.
  μ μ λ©μλλ -> μΈμ€ν΄μ€μ νλ‘ν νμ μ²΄μΈμ μνμ§ μλλ€. κ·Έλ κΈ° λλ¬Έμ νλ‘ν νμ λ©μλμ μλμ κ°μ μ°¨μ΄λ₯Ό κ°μ§λ€.

  | <div style="color:blue">static method | <div style="color:red">prototype method |
  | :------------------------------------ | :-------------------------------------: |
  | ν΄λμ€λ‘ νΈμΆ                         |             μΈμ€ν΄μ€λ‘ νΈμΆ             |
  | μΈμ€ν΄μ€ νλ‘νΌν° μ°Έμ‘° X              |        μΈμ€ν΄μ€ νλ‘νΌν° μ°Έμ‘° O         |

  </div>

<br>

- μλ μ½λλ νλ‘νΌν°λ‘ νΈμΆνμ§ μκ³  μΈμ€ν΄μ€λ‘ νΈμΆνλ μ μ  λ©μλλ₯Ό λ³Ό μ μλ€.

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

## π 2. Static methodμ νΈμΆ

- λμΌ ν΄λμ€ λ΄μ λ€λ₯Έ μ μ  λ©μλλ₯Ό νΈμΆνκΈ° μν΄μλ `this`ν€μλλ₯Ό μ¬μ©ν  μ μλ€.
- μ΄λ¬ν κ²½μ°λ νλμ μ μ  λ©μλκ° λ€λ₯Έ μ μ  λ©μλλ₯Ό λΆλ₯Ό λλ§ κ°λ₯νλ€.
  - μλμ μ½λλ‘ μμλ₯Ό λ€λ©΄, `staticMethod()`λΌλ ν μ μ μ `anotherStaticMethod()`λΌλ λ€λ₯Έ μ μ  λ©μλκ° νΈμΆνκ³  μλ€.

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

[μΆμ²] : <https://seo-tory.tistory.com/80>

[μΆμ²] : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/static>
