function serviceLane(cases,width) {
    console.log(cases)

    var b = cases.map((e,i,ar)=>{
        
        var entry = e[0];
        var exit = e[1];
        console.log(entry)
        console.log(exit)

        console.log(width)
       // var p =[];
        var v=exit+1;
       
       var p = width.slice(entry,v)
        console.log(p);


        var m =Math.min(...p)
        console.log(m)
        return m ;

    })

    console.log(b)

    return [1,2]
}

console.log(serviceLane([ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ],[ 2, 3, 1, 2, 3, 2, 3, 3 ]))





/* 
var wi=[1,2,3,4,5,6,7]



for(var i = 0 ;i<wi.length;i++){
    var p = wi.slice(0,3)
    console.log(p);


} */


/* var a=[1,2,3];

console.log(Math.min(...a)) */