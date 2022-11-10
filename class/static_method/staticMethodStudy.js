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

// ----------------------------------------------------

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
