process.stdin.on('data', function (data) {
    
    setInterval(()=>{
        main(+(data));
    },1000)

    setInterval(()=>{
        main2(+(data));
    },500)


   
});
/**** Ignore above this line. ****/



function main(input) {

    for (var i = 1;; i++) {
        if (i > input) {
            break;
        }

       console.log(Math.random() + "$mama varible $234534234"+Math.random()*1000000);
    }
    
    
    console.log("PARSER")
}


function main2(input) {

    for (var i = 1;; i++) {
        if (i > input) {
            break;
        }

       console.log( "$mama varible $234534234"+Math.random() +"NEPAL"+Math.random()*1000000);
    }
    
    
    console.log("PARSER OVER PHASE BOOSTER")
}