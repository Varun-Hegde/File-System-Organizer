#!/usr/bin/env node
const help = require('./commands/help');
const organize = require('./commands/organize');
const tree = require('./commands/tree');

let inputArr = process.argv.slice(2);

let command = inputArr[0];

switch (command) {
	case 'tree':
		tree.treeKey(inputArr[1]);
		break;
	case 'organize':
		organize.organizeKey(inputArr[1]);
		break;
	case 'help':
		help.helpKey();
		break;
	default:
		console.log('Please use right commands');
}
