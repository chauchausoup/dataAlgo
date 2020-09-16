
var s1 ="krishna"
var count =0;
s=s1.split('')
console.log(s)





s.forEach((e,i,ar)=>{
    console.log(s1.charCodeAt(e))
    if(e>=65 && e<=90){
        count++
    }
})


console.log(count)

