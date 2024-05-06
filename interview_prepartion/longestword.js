function findlongestword(sentance) {
    const words = sentance.split(' ');
    let longestword= '';

    for(let i = 0; i < words.length; i++) {
        if(words[i].length>longestword.length){
            longestword = words[i]
        }
    }
    return longestword
}
console.log('findlongestword', findlongestword('my name is prashant sriharsh welcome to my github repo'))