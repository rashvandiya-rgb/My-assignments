function findLastWordLength(str1){

    let words=str1.split(" ").filter(word => word !== ""); // split the statement in to words excluding spaces
    let NumberOfWords = words.length;
    let explanation = "The last word is \"" +words[NumberOfWords-1]+ "\" with length ";
    return explanation + words[NumberOfWords-1].length; // return length of the last word
}

function anagramCheck(word1, word2){
    let list1=word1.split("").sort().join("");
    let list2=word2.split("").sort().join("");
    if (list1 === list2){
        console.log(word1+" & "+word2+" are anagrams");
    } else {
        console.log(word1+" & "+word2+" are not anagrams");
    }
}
console.log(findLastWordLength("Hello World") );
console.log(findLastWordLength("   fly me   to   the moon  "));
anagramCheck("listen","silent");
anagramCheck("Hello","World");