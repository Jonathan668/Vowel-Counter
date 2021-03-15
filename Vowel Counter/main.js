function countVowel() {
    let str = document.getElementById("text").value;
    let vowels = "aeiouAEIOU";
    let count = 0;
    
    // loop through string to test if each character is a vowel
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++){
            if(str[i] == vowels[j]){
                count++;
            }
        }
    }
    // return number of vowels
    document.getElementById("display").innerHTML = count;
}
