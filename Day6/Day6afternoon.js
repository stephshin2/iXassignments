// Return 'yes' if the sentence contains only unique characters, 'no' otherwise
function allUniqueCharacters(sentence) {
var sortedSentence = sentence.split(" ").sort().join("").trim();
	for (var i=0; i<sortedSentence.length; i++) {
		for (var j=i+1; j<sortedSentence.length; j++) {
			if (sortedSentence[i]===sortedSentence[j]) {
				return "no";
			}
		}
	}
	return "yes";
}

// One number 1-10 is missing. Return it!
function missingNum(numbers) {
	var sortedNumbers = numbers.sort(function(a, b){return a - b});
	for (i=1; i<=10; i++) {
		if (i !== sortedNumbers[i-1] ) {
				return i;
			}
		}
	return "none";
}

// Return 'yes' if array1 and array2 are rotated versions of each other, 'no' otherwise
// e.g. [1,2,3,6,7,8] and [3,6,7,8,1,2] are rotated versions of each other
function areRotatedVersions(array1, array2) {
	var sortedArray1 = array1.sort(function(a,b){return a - b});
	var sortedArray2 = array2.sort(function(a,b){return a - b});
	if (sortedArray1.length === sortedArray2.length) {
		return "yes";
	}
	return "no";
}

// Return a string of the first n prime numbers, separated by commas
// e.g. "1,2,3,4"
function nPrimeNums(n) {
	var counter = 0;
	var num = 2;
	var str = "";
	while(n>counter) {
		if (isPrime(num)) {
			str+=num + ",";
			counter++;
		}
		num++;
	}
	return str.substring(0,str.length-1);
}

function isPrime(n) {
    for(var i=2;i<n;i++) {
        if(n%i==0)
            return false;
    }
    return true;

}


// Return the output of running the function f twice
// e.g. doitTwice(function f() {return 1;}) === 2
function doItTwice(f) {
	var a = f ();
	return a + a;
}


// Return an object that has the properties: first name, last name, age, email, and favorite color
function objectFun(first, last, age, email, color) {
    var person = {
    	first_name: first,
    	last_name: last,
    	age: age,
    	email: email,
    	fav_color: color
    }
    return person;
}

// Return the number of "children" obj has
function numChildren(obj) {
	return obj.children.length

}

function greeting(name) {
    return "Hello, " + name + "!";
}

// Say hello! This function takes a function as a parameter (greet should be a function)
function sayHello(first, last, greet) {
	return greet(first + " " + last);
}
