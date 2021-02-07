let fs = require("fs");

fs.open('./hw11_3_tools/newFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 

fs.access('./hw11_3_tools/newFile.txt', (err) => {
    if (err) {
        console.log("The file does not exist.");
    } else {
        console.log("The file exists.");
    }
});




