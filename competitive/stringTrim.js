/* //var a = "            mama black sheep";
/* var b =a.substring(0,2);

console.log(b)
//console.log(a.trim()) 


//console.log(a.split(" ").join(''));

 */

//errorhandling
//try catch finally 
function hey(a){
   
    var b=a+1;
    if(b==1){
        throw new Error("b==1?,no way");
    }else{
        return b;
    }
}
try{
    console.log(hey(0));
}catch(e){
    console.log(e);
}finally{
    console.log("in this way the session ends here");
}





