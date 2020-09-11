/* //string reversal
var str="krishna".split('')
str.splice(0,1)
console.log(str) */

//brute forcing
/* var r=[];
var r1=[];

str.split('').forEach((value,index)=>{
r.push(value)
})

for(var i =r.length-1;i>=0;--i){
    r1.push(r[i])
}
console.log(r1.toString().split(',').join('')) */

//array reverse
//console.log(str.split('').reverse().join(''))



//using for of

/* var p=[];
var p1=[];

for(const item of str){
    p.push(item)
}
for(const item in p){
    p1.push(p[item])
}



console.log(p1.join(''))

 */


 //using array.reduce
/*  var a=[];
var l = str.length-1;

var reducedValue= str.split('').reduce((acc,current,index,array)=>{
    
    acc=array[l]
    l--
    a.push(acc)
    if(l<0){
        return a;
    }
 
})
console.log(reducedValue) */



/* var c = "abcabcabc".split('');
console.log(c.sort()) */
/* 

var ob={
    a:1,
    b:2,
    c:3
}
var item = "a";

if( item in ob){
    console.log(item)
}

 */

/* function range(num){
    var ar=new Array(num);
   // var ar=[3,3,3,4];

   ar=ar.map((e,i)=>{
        //return e=i+1
    })
    return ar;
}

console.log(range(5))
 */



/*     var ar=[1,1,1,1,1];
   ar=ar.map((e,i)=> e=i+1)
console.log(ar) */


/* var num =5;
var ar=[...Array(num)];
//var ar=[3,3,3,4];

ar=ar.map((e,i)=> i+1)

console.log(ar) */


 //console.log([...Array(10)].map((a, b) => b))



 //here finding prime numbers by erathosthenes method

//var num = 20;

//first generate an array from 2 to num

/* var ar=[...Array(num)];
ar=ar.map((e,i)=> i+1)
ar.splice(0,1)
console.log(ar)

var special=[];

var arT=ar.fill(true)
console.log(arT)


 */




 //here finding prime numbers by erathosthenes method

/* var num = 8;

//first generate an array from 2 to num

var ar=[...Array(num)];
ar=ar.map((e,i)=> i+1)
ar.splice(0,1)
//console.log(ar)

var special=[];
var arT=ar.map((e,i)=>true)

for(var i =0 ; i<ar.length;i++){
    //console.log(special)
    if(!special.includes(ar[i])&& arT[i]){
        special.push(ar[i])
        console.log(special)

}}
 */

/* 
var a=[1,2,3,4,5]
console.log(a.reduce((a,b)=>a+b))


 */

 