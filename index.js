class One{

    constructor(name , gender , age, address){

        this.name=name;
        this.gender=gender;
        this.age=age;
        this.address=address
        

        // this.asya=function(){

        //     alert("hello")
        // }



    }

    push(ages){

      return  this.age+=ages;

    }
   

}

One.prototype.AGES=function(ammount){

    this.ammount=ammount;

// alert("this is my account bank" + this.ammount)
}


const one=new One("jugal" , "male", 44 , "bantalab" )

one.push(22)


// one.asya()
// console.log(AGES)
console.log(one);
one.AGES(1000);






