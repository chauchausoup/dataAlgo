/* //hey lets do it
var a =[1,2,3,4,5,3,2,5,1,2,7,2]
var b =[1,2,3,4,5,3,2,5,1,2,7,2]


//lets make a counting object

function coun(arr){
    var ob={};

    arr.forEach((e,i)=>{
        if(e in ob){
            ob[e]++
        }else{
            ob[e]=1
        }
    })

    return ob;

}


console.log(coun(b))
console.log(coun(a))



console.log(coun(a)=== coun(b)); */

//returns false which made me a bit more confused
//lets try another idea here

// This creates a custom object named MyObject


class MyObject {
    // Each object of this type has an attribute named 'magic'
    constructor(magic) {
        this.magic = magic;
    }
    // We'll discuss this syntax in more detail later
}

// Create two objects
var variable1 = new MyObject(":)");
var variable2 = new MyObject(":)");

// Print the result of an equality comparison
console.log(
    variable1.magic +
    " == " +
    variable2.magic +
    " evaluates to " +
    (variable1 == variable2)
);

// Set variable1 to reference the same object as variable2
variable1 = variable2;
// Print the result of an equality comparison
console.log(
    variable1.magic +
    " == " +
    variable2.magic +
    " evaluates to " +
    (variable1 == variable2)
);



// what I learnt from here is that we need to refer the variable which will make us to equalify the results then

