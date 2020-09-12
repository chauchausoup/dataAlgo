//iterations

/* function fibonacci(n) {

    var a= 0;
    var b =1;

   for(var i =0; i < n;i++){
       
    console.log(b)
    c=a+b

    a=b;
    b=c;
   }
}

fibonacci(9); */


//using recursion

function fibo(n){
    if(n==0 || n==1){
    // console.log(1)
        return 1;
    }else{  
    console.log(n)       
    return fibo(n-1)+fibo(n-2);
}

}
console.log(fibo(5))





