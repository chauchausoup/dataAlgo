function marcsCakewalk(calorie) {
    var c = calorie.sort((a,b)=>b-a);
    var sum=0;
 
    console.log(typeof sum )


    for(var i =0; i<c.length;i++){
        console.log(sum)
        
        sum= sum+parseInt((2**i)*c[i])
        console.log(sum)

    }

    return sum;
}


console.log(marcsCakewalk([1,2,3]))

/* 
  c=c.reduce((a,b,i,ar)=>{
       return a=a+b
    })




*/


//console.log((3**0)*3)