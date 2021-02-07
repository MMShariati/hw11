let fs = require("fs");
data = fs.readFileSync('./hw11_2_tools/from.txt', 'utf8');
// write to file
fs.writeFileSync('./hw11_2_tools/toAppendSync.txt', data);
data = fs.readFileSync('./hw11_2_tools/append.txt', 'utf8');
// append to file
fs.appendFileSync('./hw11_2_tools/toAppendSync.txt', data);

