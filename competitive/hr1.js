function getStrength(password, weight_a) {
    // Complete the function
    
    var sum=0;
     password=password.toLowerCase();
    
    password.split("").forEach((e,i,ar)=>{
       // console.log(e)
        var value=(password.charCodeAt(i)-97)+weight_a;
        if(value>25){
            value=value-26;
        }
        //console.log(value)
        
        sum=sum +value ;
    })
    
    
    return sum;
}



console.log(getStrength('xnnpmuduhznoaquudhavrncwfwujycmiggjmcmkkbnjfeodxkgjgwxtrxingiqquhuwqhdswxxrxuzzfhkplwunfagppcoildagk',19));


