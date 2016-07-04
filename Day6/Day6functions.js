function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum += numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade>60 && grade<70) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade > 80 && grade < 90) {
        return 'B';
    }
    else if(grade > 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num > 1) {
        return num + " " + noun + "s";
    } else if (num = 1) {
        return num + " " + noun; 
    } else {
        return num + " " + noun + "es";
    }
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength = 0;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
         if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    var length = word.length;
    for (var i=0; i<length/2; i++) {
        var firstLetter = word[i];
        var lastLetter = word[length - i - 1];
            if (firstLetter !== lastLetter) {
                return "no";
            }
        }
    return "yes";
}


function letterCounter(phrase, letter) {
    var currCount = 0;
    for(var i = 0; i < phrase.length; i++) {
             if(phrase[i] === letter) {
                currCount++;
             }
        }
    return currCount;
}


function longestPalindrome(sentence) {
    var word = longestWord(sentence); 
    if (palindrome(word) === "yes") {
        return  word + " is a palindrome";
    }
    else {
        return word + " is not a palindrome";
    }
}

function areAnagrams (sentence1, sentence2) {
    var string1 = sentence1.toLowerCase().split("").sort().join(" ").trim();
    var string2 = sentence2.toLowerCase().split("").sort().join(" ").trim();
    if (string1 === string2) {
        return "yes";
    }
    else {
        return "no";
    }
}
