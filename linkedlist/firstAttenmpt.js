//her we will implement the JS linkedlist


/* 
so her is the linkedlist implementation finally by using JS and its funcitons

*/


// linkedlist has head

class LinkedList{
    constructor(head){
        this.head=head;
    }
}




class Node{
    constructor(data,next=null){// = says by default
        this.data=data;
        this.next=next;

        
    }
    getAll(){
        //this gets all the data from the linked list 
        var current = this;
        console.log(current);
        while(current.next!=null){
            console.log(current.data)
            current=current.next;
        }
        if(current.next== null){
            console.log(current.data)

        }
    }

    insertLast(data){
        //this inserts the data at the end of linked list
        var temp =this;

        while(temp.next != null){
        temp=temp.next;
        }
        if(temp.next== null){
            temp.next=new LinkedList(data)
        }
    }



   insertFirst(data){
        //this inserts the data at the beginning of the linked list
        var current = this;
        //console.log(current);


        var newHead= new LinkedList(data)
        newHead.next=current;
        this.next=newHead;

        
       
        
    }



    /* getNeighboursOfParticular(data){
        var current = this;

        if(current.data== data){
            console.log(data)
        }


    } 
    inserto(){
        //this inserts the data after specific node
    }

    insertFrom(){
        //this inserts the data before the specific node
    }

    delout(){
        //this deletes the specific node from the linked list having the given data
    } */
}





var node = new LinkedList(1);
node.insertLast(2)
node.insertLast(3)
node.insertLast(4)
node.insertFirst(5)
node.insertFirst(6)


node.getAll();



/* var nod1 = new LinkedList(1)
var nod2 = new LinkedList(2)
var nod3 = new LinkedList(3) */



/* nod1.next=nod2;
nod1.next.next=nod3;

nod1.get();
nod1.insertLast(4);
nod1.get(); */


/* current=nod1;

while(current.next!=null){
    console.log(current.data)
    current=current.next
}
 */