function fibo(n){
    if(n<=1){
        console.log(1)
        return;
    }else{
        console.log(n)
    }

    return fibo(n-1)+fibo(n)
}
fibo(5)