/* 	Join function
	Takes in an array then merges array elements into a string.
	"," separating the array elements in the string is the default

	Add functionality to take in a separater input as a string */


function join(arr, char){
	var separate = ",";
	var string = "";

	if(char){
		separate = char;
	}

	for(var i = 0; i < arr.length; i ++){
		if(i ==  0){
			string += arr[i];
		}
		else if(i > 0){
			string = string + separate + arr[i];
		}
	}

	return string;
}

var array = ["I", "can't", "stand", "the", "rain", "...", "against", "my", "window"];

console.log(join(array))
