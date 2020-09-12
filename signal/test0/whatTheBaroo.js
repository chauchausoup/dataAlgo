//graphical

//var a=Array(20).fill().map(() => Math.round(Math.random() * 40))


a=[1,3,5,6,4,2];

console.log(a);
var baroo=[];
function f(a){
    for(var i =0; i <a.length/2;i++){
        baroo.push(a[i])
        

        if(a.length%2 != 0 && (i== Math.floor(a.length/2)) ) {
            return baroo;
        }else{
            baroo.push(a[a.length-1-i])
        }
    }
    return baroo;
}

f(a);


console.log(baroo);


// now the real deal is with the ascending check
var baroo1=[...baroo];

baroo=baroo.join(',').split(',').join('')

console.log(baroo)


var asc=baroo1.sort((a,b)=>a-b).join('').split(',').join('');
console.log(asc)

if(asc== baroo){
    console.log("equal")
}else{
    console.log("not equal")
}

