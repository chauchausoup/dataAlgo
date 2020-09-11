
class Node{
    constructor(data,next=null){// = says by default
        this.data=data;
        this.next=next;   
    }  
}

class LinkedList{
    constructor(head,tail=null){
        this.head=head;
        this.tail=tail;
    }
    nascentInsert(data){
        var node= new Node(data);
        this.head=node;
        node.next=this.tail;
    }

    insertLast(data){
        var node= new Node(data);
        while(this.head.next){
            this.head=this.head.next;
        }
        this.head.next=node;
        node.next=this.tail;   
    }
    insertFirst(data){
        var node=new Node(data);
       node.next=this.head;
       this.head=node;
    }
    getData(){
        while(this.head.next!=null){
            console.log(this.head.data) // unfortuanately the next points to null so the while loop stops and we cannot print our data
            this.head=this.head.next;
        }
        console.log(this.head.data)
    }
}


var ll = new LinkedList();
ll.nascentInsert(1);
ll.insertLast(2);
ll.insertFirst(3);
console.log(ll)
ll.getData();










    


/* getAll(){
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
} */

/* insertLast(data){
    //this inserts the data at the end of linked list
    var temp =this;

    while(temp.next != null){
    temp=temp.next;
    }
    if(temp.next== null){
        temp.next=new LinkedList(data)
    }
} */
  



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