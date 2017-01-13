function whiteSpace(string){
	var newString = ""
	var len = string.length
	for(var i = 0; i < len; i++){
		if(string[i] != "\t" && string[i] != " "){
			newString += string[i]
		}
	}
	return newString
}

var someString = "B  O 		B"

console.log(whiteSpace(someString))
