/* //so here is the testing 

var a = "krishna".split("");

var c=a.shift()

console.log(c)

console.log(a)

a.unshift()

console.log(c)

console.log(a)
 */


/*  var te="krishna".split('');
 var a= te.splice(0,1)
 console.log(te)
 console.log(a) */
 
/* for(var i =0;i<te.length;i++){
    if(te[i-1]== undefined){
        console.log("mama")
    }else{
        console.log(te[i])
    }
} */

/* console.log(te[4])
console.log(te[1])
console.log(te[6])




console.log(1+"" +1)
console.log(1+1) */

/* function createCheckDigit(membershipId) {
    // Write the code that goes here.
   var inte = membershipId.split('');
    var res=inte.reduce((a,b)=>{
      return parseInt(a)+parseInt(b)
    })
    res=res+"";
    if(res.length == 1){
      return res;
    }
    return createCheckDigit(res);
  }
  
  console.log(createCheckDigit("55555"));
 */



/* var a="123123"

console.log(parseInt(a).split()) */