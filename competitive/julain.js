function dayOfProgrammer(year) {
    var f=0;
    var ob={};

    var o=[31,28,31,30,31,30,31,31];
    if(year%4==0){
        o[1]=29;
    }else{
        o[1]=28;
    }

    o=o.reduce((a,b)=>a+b)
    var op=256-o;
return `${op}.09.${year}`
}

console.log(dayOfProgrammer(2300))

