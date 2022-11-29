function sleep(func, delay) {
	const delayUtil = Date.now() + delay;

	while (Date.now() < delayUtil);

	func();
}

function foo() {
	console.log('foo');
}

function bar() {
	console.log('bar');
}

sleep(foo, 3 * 1000);
bar();
