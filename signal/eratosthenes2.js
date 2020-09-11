function solePrimeChecker(num){
    var c=0;
    var state=true;
    var ar=[...Array(num)];
    ar=ar.map((e,i)=> i+1)
    ar.forEach((e,i)=>{
        if((num%e)==0 ){
            c++;
        }
        if(c>2){
            return state=false;
        }
    })
    return state;
}

/* function PrimeSummer(num){
    var ar=[...Array(num)];
    ar=ar.map((e,i)=> i+1)
    var sum=0;
    ar.forEach((e,i)=>{
        if(solePrimeChecker(e)&&e>=2){
           // sum+=e

           console.log(e)
        }
    })

    return sum;


} */


//console.log(PrimeSummer(8))

//there is another more effiecient algorithm
