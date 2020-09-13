/* class Polygon{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
};

console.log("Polygon",Polygon);
var p = new Polygon(1,2);
console.log(p);

 */



 //static methods are relevant to all the instances of the class
 class Home{
     constructor(food,sleep){
         this.food=food;
         this.sleep=sleep;
     }
     eat(){
         console.log(this.food)
     }
     static sleep(sleep){
         console.log("we sleep a lot in out home , total:",+(sleep)+" hrs.")
     }
 }


 var h = new Home("Chicken",6)
 
 console.log(Home.sleep(-1))
