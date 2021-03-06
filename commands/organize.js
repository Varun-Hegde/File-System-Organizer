const fs = require('fs');
const path = require('path');
const utility = require('../utility');
function organizeFn(dirPath) {
	//TASKS:
	// 1. input -> directory path given
	// 2. create -> organized_files -> directory
	// 3. identify categories of all the files present in that input directory
	// 4. copy files to that organized directory inside of any of category folder

	//1.
	if (!dirPath) {
		//If no path is given use current working directory
		dirPath = process.cwd();
		return;
	}
	let doesExist = fs.existsSync(dirPath);
	if (!doesExist) {
		console.log('Please enter the correct path');
		return;
	}

	//2.
	let destPath = path.join(dirPath, 'organized_files');
	if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);

	//3.
	let childNames = fs.readdirSync(dirPath);

	for (let i = 0; i < childNames.length; i++) {
		let childAddress = path.join(dirPath, childNames[i]);
		let isFile = fs.lstatSync(childAddress).isFile();

		if (!isFile) {
			continue;
		}

		let category = getCategory(childNames[i]);
		console.log(childNames[i], 'BELONGS to --> ', category);

		//4.
		sendFiles(childAddress, destPath, category);
	}
}

function getCategory(name) {
	let ext = path.extname(name); //Returns extension of file
	ext = ext.slice(1);
	for (let type in utility.types) {
		let curType = utility.types[type];
		for (let i = 0; i < curType.length; i++) {
			if (ext === curType[i]) {
				return type;
			}
		}
	}
	return 'others';
}

function sendFiles(src, dest, category) {
	let categoryPath = path.join(dest, category);
	if (!fs.existsSync(categoryPath)) fs.mkdirSync(categoryPath);

	let fileName = path.basename(src); //Get last part of filename
	let destFilePath = path.join(categoryPath, fileName);
	fs.copyFileSync(src, destFilePath); //Copy file
	//fs.unlinkSync(src); //Delete src file => USe this for cut paste operation
	console.log(fileName, 'COPIED to -->', category);
}

module.exports = {
	organizeKey: organizeFn,
};
