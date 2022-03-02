var str = prompt("Enter a String");
var arr = str.split("");

var count = 0;

for (var i = 0; i <= arr.length; i++) {
    if (arr[i] == "a" || arr[i] == "A" || arr[i] == "i" || arr[i] == "I" || arr[i] == "u" || arr[i] == "U" || arr[i] == "e" || arr[i] == "E" || arr[i] == "o" || arr[i] == "O") {

        count++;
    }
}

console.log("Vowel Count= "+count);