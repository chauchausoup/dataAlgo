var a = [ 1,20,3,4,45,6].sort((a,b)=>a-b)
console.log(a)
/* 
console.log(a[a.indexOf(a.unshift())])
console.log(a)
 */
/* var st = a.unshift()
console.log(st)
    for(var i = st;i<=16;i++){
        console.log(i)
    } */




//console.log(a.concat([1,23,4]))

/*
 * Complete the 'getTotalX' function below.
 * https://www.hackerrank.com/challenges/between-two-sets/problem 
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    a=a.sort((a,b)=>a-b)
    b=b.sort((a,b)=>a-b)
    console.log(a);
    console.log(b)
    var st=a[a.length-1]
    //console.log(st)
    var flag =0;
    var mai=[];

    var m = a.concat(b)
    for(var i = st;i<=b[0];i++){
        for(var j =0;j<m.length;j++){
             if(m[j]<=st){
                 if(i%m[j]==0){
                     flag=1;
                 }else{
                     flag=0;
                     break;
                 }
            
                }else{
                    if(m[j]%i==0){
                        flag=1;
                    }else{
                        flag=0;
                        break;
                    }
                }

        }
        if(flag==1){
           mai.push(i)
        }
       
    }
return mai.length;
}


//can we make it of single loop?

