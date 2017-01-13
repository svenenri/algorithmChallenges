function newString(string){
	var newStr = ""
	var l = string.length
	for(var i = l-1; i >=0; i--){
		newStr = newStr + string[i]
	}

	return newStr
}

var str = "z, y, x, w, v, u, t, s, r, q, p, o, n, m, l, k, j, i, h, g, f, e, d, c, b, a"

console.log(newString(str))
