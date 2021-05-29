function helpFn() {
	console.log(
		`\tList of all commands:
		filemanager tree <directory-path>
		filemanager organize <directory-path>
		filemanager help
		`
	);
}

module.exports = {
	helpKey: helpFn,
};
