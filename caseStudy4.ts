let score:number = 50;
console.log("Outside the block score is:", score);  

if(true){
    let score:number = 100;
    console.log("Inside the block score is:", score);
}

const COUNTRY :string = "India";
console.log("The country is:", COUNTRY);

// COUNTRY = "Japan"; // This will give an error because COUNTRY is a constant

// let score:number = 24;  // This will give an error because score is already declared in the same scope