# Class private method

<br>

## π 1. private method, νλΌμ΄λΉ λ©μλλ?

- μλ°μ€ν¬λ¦½νΈλ λ€λ₯Έ μΈμ΄μλ λ¬λ¦¬ μμ±μμ κ°μ²΄λ public, κ³΅κ°λμ΄μμ΅λλ€. μλνλ©΄ λ³λμ protectedμ κ°μ μ μΈνμμ΄ μκΈ° λλ¬Έμλλ€.
  νλΌμ΄λΉ λ©μλλ `#`μλ³μκ° μμ λΆμ΄ μ μΈλλ€. νλΌμ΄λΉ νλμ κ°μ΄ μΈλΆλ λ³λλ‘ λ§λ€μ΄μ§ μΈμ€ν΄μ€λ₯Ό ν΅ν΄ μ¬μ©μ΄ λΆκ°λ₯νλ€.

  | <div style="color:blue">private method | <div style="color:red">prototype method |
  | :------------------------------------- | :-------------------------------------: |
  | μΈλΆ νΈμΆ X                            |               μΈλΆ νΈμΆ O               |

  </div>

<br>

- μλ μ½λλ μΈλΆμμ νΈμΆ μ μλ¬κ° λλ μν©μ λ³Ό μ μλ€. - error1

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

μμ μ½λμ λν ν΄κ²°λ²

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

// νλΌμ΄λΉ νλλ₯Ό μΈλΆλ‘ λ°°μΆνκΈ° μν΄μλ λ€λ₯Έ λ°©λ²μ κ³ μ
// νλΌμ΄λΉ λ©μλλ₯Ό λ΄λΆμμ κ±°μ³ μ¬μ©νλλ‘ μ λ
```

<br>

## π 2. private static methodμ μ¬μ©

- νλΌμ΄λΉ λ©μλ(ν¨μ)λ₯Ό static(μ μ­)μΌλ‘ μ μΈνμ¬ μ¬μ©νλ κ²½μ°λ μλ€.

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

[μΆμ²] : <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields>
