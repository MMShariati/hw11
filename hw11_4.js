
const fs = require('fs');
// reading in the names and numbers 
const names = fs.readFileSync('./hw11_4_tools/names.txt', 'utf8').split('\r\n');
// remove the last element that is ''
names.splice(-1);

const numbers = fs.readFileSync('./hw11_4_tools/numbers.txt', 'utf8').split('\r\n');
numbers.splice(-2);

console.log(numbers);
// console.log(names[0].split('-')[0]);
// create a new file
fs.writeFileSync('./hw11_4_tools/mergeNameNumber.txt', "");
var flag;
let data = '';
// match the id of names and numbers
for (let i = 0; i < names.length; i++) {
	flag = 0;
	var nameOf = names[i].split(' - ');
	console.log('i = ', i); 
	for (let j = 0; j < numbers.length; j++) {		
		var numberOf = numbers[j].split(' - ');
		 	
		// if ids are identical 
		if (nameOf[0] === numberOf[0]) {
			// one phone number
			data = `${nameOf[1]}'s phone number is ${numberOf[1]}`;
			console.log(data);
			flag += 1;
			j += 1;
			for (let k = j; k < numbers.length; k++) {
				
				var numberOf2 = numbers[k].split(' - ');
				// two phone numbers
				if (nameOf[0] === numberOf2[0]) {
					console.log("two phones");
					data = `${nameOf[1]}'s phone numbers are ${numberOf[1]}, ${numberOf2[1]}`;
					console.log(data);
					
					flag += 1;
					//i += 1;
					
					//j += 1;
					break;					
				}

			}
			// two phone numbers


			
		}				
			
		// no phone number
		if (flag === 0) {
			data = `${nameOf[1]} hasn't any phone number`;
			console.log(data);
		}	

		
	}

	// write into file
	fs.appendFileSync('./hw11_4_tools/mergeNameNumber.txt', `${data}\n`);
};

	
	