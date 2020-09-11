//array chunking

var arr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];
var num =3;
var f=new Array(Math.ceil(arr.length/num));
console.log(f.length)
//console.log(f)

/* 
for(var i =0;i<Math.ceil(arr.length/num);i++){
    f[i]= new Array(num);

} */


var ae=0;

for(var each in arr){
    
    f[ae%num].push(arr[each])
    
    if(each%num==0){
        
        if(ae>=Math.ceil(arr.length/num)){
            return;
        }
        ae++;
    }

    
}

console.log(f)



