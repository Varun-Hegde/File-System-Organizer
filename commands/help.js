function helpFn() {
	console.log(
		`\tList of all commands:
		node index.js tree <directory-path>
		node index.js organize <directory-path>
		node index.js help
		`
	);
}

module.exports = {
	helpKey: helpFn,
};
