var arr = [1,2,3,4,5,6,7];
var num =4;
var c=[]
var a,b;

for(var i =0; i < (Math.ceil((arr.length)/num));i++){
        b=(i+1)*num;
        a=b-num;
        var a=arr.slice(a,b);
        c.push(a);
}
console.log(c)




