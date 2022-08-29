const array=["jugal" , "kanika" , "karan" , "anku"]

let[top1 , top2 , top3 , top4]=array

// let [topfirst ,,, toplast]=array;

console.log(top1)
console.log(top4)

//object 


const obj={
    name:"jugals",
    classs:"10th",
    gender:"male",
    age:"22",

    hoob:{

        names:"karan",
        video:"youtube.com/weatch"
    }
}

let {name:myname , classs , gender , age , hoob}=obj;


console.log(myname , classs , hoob.video) 

//swape;

let a=10;

let b=5;

console.log(a , b)
let temp=a;
a=b;
b=temp;
console.log(a , b)


//fat arrow function

const one=(a , b)=>{


    return a*b
    


}

// let a=10;
// let b=20;

// const three=()=> a +b

const two=one(10 , 10)

console.log(two)



//defulate parameter

// function mul(a, b){


//     console.log(a*b)
// }

// mul(4)


function mul(a, b=2){

   // b=(typeof b!=='undefind') ? b : 4

   //es6 



    console.log(a*b)
}

mul(4)

const mult=(a , b=5)=>{


}

mult(4)

//NAN FULLFORM IS not a number

//rest parameter in javascript


function rest(...iner){ //definde

    // console.log(a +b)

    console.log(iner)

    let total=0
    for(let i of iner){

        total+=i
    }

    console.log(total)

}

rest(1 , 2 , 3 , 4 , 5)

// call parameter


//spread operator in use a array  es6


function sun(a , b ,c){

    console.log(a+b+c)

}

var arravl=[5 , 6 , 7]

sun(...arravl)


let arr1=[1 , 2 , 3 , 4]

let arr2=[5 , 6 , 7 ,8];

arr1=arr1.concat(arr2)

arr1=[...arr1 , ...arr2]

console.log(arr1)

console.log(arr1)



let show = function() {
    console.log('Anonymous function');
};

show();


(function () {
    console.log('Immediately invoked function execution');
})()