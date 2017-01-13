function getDigits(string){
	var allDigits = ''
	for(var i = 0; i < string.length; i++){
		if(string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57){
			allDigits += string[i]
		}
	}
	return parseInt(allDigits);
}

//Test function
var someString = "a1b2c3"

var someNum = 123

var newNum = getDigits(someString)

if(newNum === someNum){
	console.log("yup")
}
else{
	console.log("nope")
}

var bookString = "0s1a3y5w7h9a2t4?6!8?0"

console.log(getDigits(bookString))

//________________________________________________________________________

// function getDigitsParse(string){
// 	var newParseString = ""
// 	for(var i = 0; i < string.length; i++){
// 		var parse = parseInt(string[i], 10)
// 		if(typeof parse == "number"){
// 			newParseString += string[i]
// 		}
// 	}
// 	return newParseString
// }
//
// console.log(getDigitsParse(someString))
