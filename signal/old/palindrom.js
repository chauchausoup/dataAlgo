function pChecker(str){
    var state;
    console.log(str.split('').reverse())
    if(str.split('').join('') === str.split('').reverse().join('')){
        state=true
    }else{
        state=false;
    }
    return state;
}

console.log(pChecker("pxaaxp"))
