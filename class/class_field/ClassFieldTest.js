// console.assert( ) => 기댓값이 false일때만 에러 도출/ true일 땐 아무일도 X

class ClassWithPrivateStaticField {
	static #PRIVATE_STATIC_FIELD;

	static publicStaticMethod() {
		ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
		return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
	}

	static a() {
		ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 41;
		return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
	}
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() !== 42);
console.log(ClassWithPrivateStaticField.a());

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

console.assert(error instanceof TypeError);

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
