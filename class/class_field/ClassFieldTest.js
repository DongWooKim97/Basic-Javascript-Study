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
