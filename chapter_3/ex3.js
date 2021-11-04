function countBs(str){
    return countChar(str, "B");
}
function countChar(str, character){
    let total = 0;
    for(let i in str){
        if(str[i] === character) total++;
    }
    return total;
}