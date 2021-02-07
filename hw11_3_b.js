let fs = require("fs");

fs.writeFileSync('./hw11_3_tools/newFile.txt', "");


try {
    if(fs.existsSync('./hw11_3_tools/newFile.txt')) {
        console.log("The file exists.");
    } else {
        console.log('The file does not exist.');
    }
} catch (err) {
    console.error(err);
}




