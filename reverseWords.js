//reverse the characters of the word but not of the whole string

var str= "I love yyou !".split(' ');
var v=str.map((item,index)=>{
    return item.split('').reverse().join('')
})

console.log(v.join(' '))

