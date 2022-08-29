
        //hosting

        //we have a  creation phase and exection phase

        // console.log(name); //define

        // let name; //

        // name="jugal sharma"

        
        // how it will be in output during creation phase

    //     var names=undefined;

    // console.log(names);

    // names="jugal sharma"



    //what is scope chain and lexical scoping in javascript;


    //lexical scope

    let a="jugal sharma" // global scope

    const first=()=>{

        let b="kanika sharma";

        const sec=()=>{

            let c="karan sharma"



        console.log(    a , b , c )
        }
      

        sec()
      
    //    const Lop =sec()


    //    console.log(Lop)
    }
    first()


    //closeures in javscript


    //a clousres is the combination of a function bundle together (enclosed)

    //with refersens to its surrounding state (the lexical enviromnet)

const outer=(a)=>{

    let b=10;

    const inerr=()=>{


        let sum = a +b;

        console.log(sum)

    }

    // inerr()

    return inerr;



}

let check=outer(5)

check()

// console.log(check())

console.dir(check())



//callback an function that  is passes as argumnet is called function


function sayhello(){


    console.log("hello")
}

function add(num1 , num2 , callback){

    console.log(num1 , num2)

    callback()

}

add(30 , 32 , sayhello)

add(22 , 22 , function(){

    console.log("hi .....")


})


//json parran
// a JavaScript object...:
var myObj = { "name":"John", "age":31, "city":"New York" };

// ...converted into JSON:
var myJSON = JSON.stringify(myObj);


console.log(myJSON)

var obj = JSON.parse('{"firstName":"John", "lastName":"Doe"}');

console.log(obj)