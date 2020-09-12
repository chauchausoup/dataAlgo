//graphical

var a=Array(20).fill().map(() => Math.round(Math.random() * 40))
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


