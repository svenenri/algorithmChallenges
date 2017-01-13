function split(string, char, limit){
	var temp = "";
	var result = [];
	var counter = 0;

	for(var i = 0; i < string.length; i++){
		if(counter == limit){
			return result;
		}
		if(char == ""){
			result.push(string[i]);
		}
		else if(string[i] != char){
			temp += string[i];
		}
		else if(string[i] == char){
			result.push(temp);
			temp = "";
			counter++;
		}
	}

	if(temp != ""){
		result.push(temp);
	}

	return result;
}

var sample = "This  is Algo I";

console.log(split(sample, " "));

var me = "Sven Waweru"

console.log(me.split("e"))
