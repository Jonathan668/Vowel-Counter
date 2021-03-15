function countVowel() {
    var str = document.getElementById("text").value;
    var vowels = "aeiouAEIOU";
    var count = 0;
    
    // loop through string to test if each character is a vowel
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++){
            if(str[i] == vowels[j]){
                count++;
            }
        }
    }
    // return number of vowels
    document.getElementById("display").innerHTML = count;
}
