let fs = require("fs");
let content = "";

fs.readFile('./hw11_2_tools/from.txt', 'utf8', (err, data) => {
	if (err) {
		throw err;
	}
	content = data;
	fs.readFile('./hw11_2_tools/append.txt', 'utf8', (err, data) => {
		if (err) {
			throw err;
		} 	
		content += data;
		console.log(content);
		fs.writeFile('./hw11_2_tools/toAppend.txt', content, (err) => {
			if (err) throw err;
		})
	})

});




