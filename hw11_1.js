// call back function
function fullName (first, last, cb) {
	let full = first + " " + last;
	cb(full);
};

const NAME = " Ali ";
const LAST_NAME = " Ahmadi ";

fullName(NAME, LAST_NAME, function(d){
	console.log(d);
});
	
	