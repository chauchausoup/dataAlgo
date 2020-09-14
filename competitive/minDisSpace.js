'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    //city generators
    var a = new Array(n).fill("").map((e,i)=>e=i)
    console.log(a)
    

    // c = [0,4]
    //city index comparator and mapper of min distance from any index array
    var minDis = a.map((e,i,ar)=>{
        let b =[];
        c.forEach((e1,i1)=>{
            b.push(Math.abs(e-e1))
        })
        return b
        
    })
    console.log(minDis)

    //now 
    var min=Math.max(...c);
    var selected =0;
    var minDis2 = minDis;

    minDis2=minDis2.map((e,i)=>{
        
        
        if(e<min){
            min = e;
            selected = c[i]
        }

    })
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}





/* 

/* 

 var minDis = a.map((e,i,ar)=>{
        let b =[];
        var min =0;
        c.forEach((e1,i1)=>{
            var m= Math.abs(e-e1);
        
           if (m<min){
               min =m 
           }
        })

        b.push(min)
        return b
        
    })
https://www.hackerrank.com/challenges/flatland-space-stations/problem

 */
 






