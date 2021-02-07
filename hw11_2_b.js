let fs = require("fs");
let content = "";
data = fs.readFileSync('./hw11_2_tools/from.txt', 'utf8');
content = data;
console.log(content);
fs.writeFileSync('./hw11_2_tools/toSync.txt', content);




