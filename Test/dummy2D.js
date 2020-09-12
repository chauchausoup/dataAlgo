//lets create a dummy 2D array

var a=[];
var n=200;





for(var i = 0 ; i < n ; i ++ ){

a.push(new Array(50).fill().map(()=>(Math.round(Math.random()*100))))

}

console.log(a);

