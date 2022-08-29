// // program to implement queue data structure

// class Queue {
//     constructor() {
//         this.items = [];
//     }
    
//     // add element to the queue
//     enqueue(element) {
//         return this.items.push(element);
//     }
    
//     // remove element from the queue
//     dequeue() {
//         if(this.items.length > 0) {
//             return this.items.shift();
//         }
//     }
    
//     // view the last element
//     peek() {
//         return this.items[this.items.length - 1];
//     }
    
//     // check if the queue is empty
//     isEmpty(){
//        return this.items.length == 0;
//     }
   
//     // the size of the queue
//     size(){
//         return this.items.length;
//     }
 
//     // empty the queue
//     clear(){
//         this.items = [];
//     }
// }

// let queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(4);
// queue.enqueue(8);
// console.log(queue.items);

// queue.dequeue();
// console.log(queue.items);

// console.log(queue.peek());

// console.log(queue.isEmpty());

// console.log(queue.size());

// queue.clear();
// console.log(queue.items);



// //last in 
// //first in and first out


 

        class Linked{

            constructor(data){

                this.head={
                    value:data,
                    next:null
                }

                this.tail=this.head;
                this.length=+1;
            }

            push(hate){

                const newnode={

                    value:hate,
                    next:null,
                }

            
                this.tail.next=newnode;
            
                this.tail=newnode;

                this.length ++;
            }

            unship(one){


                const newnode={

                    value:one,
                    next:null,
                }

                newnode.next=this.head;

                this.head=newnode;

                this.length ++;

            }

            //traversing function

            traverseing(){
            
        
                let count=0;
                 while(count<this.length)

                 console.log(count)
                 count ++;
            }

            pop(index){

                let counter=1;

                let lead=this.head;
                if(index ===1){
                    this.head=this.head.next;
                }else{
                    while(counter<index-1){
                   lead=lead.next;
                   counter++;
                    }

                    let nextnode=lead.next.next;
                    lead.next=nextnode;
                    console.log(lead)
                }



            }     
        

        }

        

        let list=new Linked(10);
    
    list.push(20)

    list.unship(5)
    list.push(30)
    list.pop(3)
    // list.traverseing()
        console.log(list)
   









        let x={name:"jugal sharma"}; //cope

        let y=x;

        
        y.name="kaikna";

    
        console.log(x)
