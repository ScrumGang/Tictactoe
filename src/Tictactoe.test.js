var Methods = require('./Tictactoe');
var hello = Methods.hello;

test("Returns 'Hello, World!'", () => {
	expect(hello()).toBe("Hello, World!");
});