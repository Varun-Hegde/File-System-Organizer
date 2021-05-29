const fs = require('fs');
const path = require('path');

function treeFn(dirPath) {
	if (!dirPath) {
		//console.log('Please enter the path');
		//If no path is given use current working directory
		treeHelper(process.cwd(), '');
		return;
	}
	let doesExist = fs.existsSync(dirPath);
	if (!doesExist) {
		console.log('Please enter the correct path');
		return;
	}

	treeHelper(dirPath, '');
}

//Uses recursion
function treeHelper(dirPath, indent) {
	// is file or folder
	let isFile = fs.lstatSync(dirPath).isFile();
	if (isFile) {
		let fileName = path.basename(dirPath);
		console.log(indent + '├──' + fileName);
	} else {
		let dirName = path.basename(dirPath);
		console.log(indent + '└──' + dirName);
		let children = fs.readdirSync(dirPath);
		for (let i = 0; i < children.length; i++) {
			let childPath = path.join(dirPath, children[i]);
			treeHelper(childPath, indent + '\t');
		}
	}
}

module.exports = {
	treeKey: treeFn,
};
