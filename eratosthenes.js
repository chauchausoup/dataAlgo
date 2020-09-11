//for a given number find all the prime numbers from 0 to that number 



/* while(a<=g){
    console.log(a)
    
    a++
} */

/* var num =5;
var ar=[...Array(num)];
//var ar=[3,3,3,4];

ar=ar.map((e,i)=> i+1)

console.log(ar) */

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

var num=33;
var countPrime=0;

var ar=[...Array(num)];
ar=ar.map((e,i)=> i+1)



console.log(solePrimeChecker(12))


