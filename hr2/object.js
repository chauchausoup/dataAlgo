/* function pickingNumbers(a) {
    // Write your code here
    var b1=[]
    for(var i =0; i <a.length;i++){
    var recent=a[i];

        var b=[];

        var ob={};
        var k =[];


        for(var j =0; j <a.length;j++){

             if(Math.abs(a[i]-a[j])<=1 &&  ){
                
                 b.push(a[j])
                   
             }
    }
    b1.push(b)
    }
    console.log(b1)
    var b11 = b1.map((e,i)=>e.length)
    return Math.max(...b11)
  
}

var str = "4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4".split(' ');

//console.log(str)

console.log(pickingNumbers(str))

 */



 console.log(['b','b'].indexOf('b'))
 