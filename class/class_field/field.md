# Class Field

<br>

## π 1. ν΄λμ€ νλλ

- ν΄λμ€ νλ(class field)λ ν΄λμ€μ νλ‘νΌν°λ₯Ό μΆκ°ν  μ μλ λ¬Έλ²μ΄λ€.<br>
  μλμ κ°μ΄ μ§μ  νλ‘νΌν°λ₯Ό μ§μ  μΆκ°ν  μ μμΌλ©°, μ μ  λ©μλμλ λ€λ₯΄λ€.

```javascript
class User {
name = 'John'

method = () => {
}
```

- λν ν΄λμ€ νλλ νλ‘ν νμμ μ μ₯λλ κ²μ΄ μλλΌ κ°λ³ μΈμ€ν΄μ€μ μ μ₯λλ€.

<br>

## π 2. νλΌμ΄λΉ ν΄λμ€ νλ

- class μ μμ±(property)λ€μ κΈ°λ³Έμ μΌλ‘ public νλ©° class μΈλΆμμ μ½νκ³  μμ λ  μ μλ€.<br>
  νμ§λ§, ES2019 μμλ ν΄μ¬ `#` prefix λ₯Ό μΆκ°ν΄ private class νλλ₯Ό μ μΈν  μ μκ² λμλ€.

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

- Private static νλλ class evaluation μ class μμ±μ(class constructor)μ μΆκ°λλ€.

- Private static νλλ ν΄λΉ νλλ₯Ό μ μΈν class μμλ§ μ κ·Όν  μ μλ€.

- μ΄λ this λ₯Ό μ¬μ©ν¨μ μμ΄ μμμΉ λͺ»ν λμμ μΌκΈ°ν  μ μλ€.

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

- μ¬κΈ°μ `console.assert()`λ ()μμ κ°μ΄ falseμΌλλ§ μλ¬λ£° μΆλ ₯νλ μΆλ ₯λ¬Έμ΄λ€
  - λ°λλ‘ `true`μΌλλ μΆλ ₯ λ° λ°μ β

<br>

## π 3. νλΌμ΄λΉ ν΄λμ€ λ©μλ (Private static methods)

- private static λ©μλλ public static λ©μλμ²λΌ μΈμ€ν΄μ€κ° μλ class λ‘λΆν° νΈμΆλλ€.
- κ·Έλ¦¬κ³  private static νλμ²λΌ class μ μΈλ¬Έ λ΄λΆμμλ§ μ κ·Ό κ°λ₯νλ€.

```javascript
//private static λ©μλλ generator, async κ·Έλ¦¬κ³  async generator ν¨μκ° λ  μ μλ€.

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

- λν `λͺ¨λ  Private νλλ μμλ ν΄λμ€μ κ³ μ ν μ€μ½νλ₯Ό κ°λλ€.`λΌλ μ±μ§μ κ°λλ€.

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

- λμΌνκ² this.#ageμ μ κ·Όνλ getAge()μ getFakeAge()μ κ²°κ³Όκ° λ€λ₯΄λ€.

- #age μ¦ private μμ±μ κ·Έλμ μ°λ¦¬κ° μκ³  μλ this μ κ·Έ μ»¨νμ€νΈμλ λ€λ₯Έ λ°©μμΌλ‘ μ μ₯λλ€. κΈ°μ‘΄μ²λΌ μΈμ€ν΄μ€λ³λ‘ λλ¦½μ μΈ κ³΅κ°μ κ°μ§λ§, μΆκ°λ‘ ν΄λμ€ λ³λ‘ λλ¦½μ μΈ κ³΅κ°μ κ°λ κ²μ΄λ€.

<br>

- μ½κ² λ§νλ©΄ Human ν΄λμ€ μ€μ½νμ #ageμ Person ν΄λμ€ μ€μ½νμ #ageλ λ€λ₯΄λ€λ κ²μ΄λ€. κ·Έλ¬λ―λ‘ Human ν΄λμ€μ μν getAge()κ° μ€νλ λλ Humanμ #ageμ μ κ·Όνκ³  Personμ getFakeAge()κ° μ€νλ  λλ Personμ #ageμ μ κ·Όνλ κ²μ΄λ€.
  - λ κ° μ΄μμ ν΄λμ€κ° κ°μ private fieldsλ₯Ό κ°μ§κ³  μκ³  κ°μ μ΄λ¦μ μ°Έμ‘°νκ³  μλ€λ©΄, μ€νλλ ν¨μλ ν΄λμ€μ μ€μ½νμ λ§μΆ° μ€ν !

<br>

[μΆμ²] : <https://ui.toast.com/weekly-pick/ko_20200312>

[μΆμ²] : <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields>
