

type Transaction = {
    id: number;
    type: "checkout" | "return" | "cancelled" | "priority";
};

const transactions: Transaction[] = [
    { id: 1, type: "checkout" },
    { id: 2, type: "cancelled" },
    { id: 3, type: "return" },
    { id: 4, type: "priority" },
    { id: 5, type: "checkout" }
];

const inventory: { [title: string]: number } = {
    "The Hobbit": 3,
    "1984": 5,
    "TypeScript Guide": 2
};

const visitors: string[] = ["Alice", "Bob", "Carol"];

let count = {
    checkout: 0,
    return: 0,
    cancelled: 0,
    priority: 0 ,
}

for(let i =0; i< transactions.length; i++){
    count[transactions[i].type]++;
}

console.log("Transaction counts : ", count);

let i = 0;
while(true){
   let tx = transactions[i];
    if(tx.type === "priority"){
        console.log("Priority transaction encountered, stopping.");
        break;  
    }
    console.log(` Processing transaction ${tx.id} of type ${tx.type} `) ;
    i++;

}


let queue : Transaction[] = [...transactions];
let idx = 0;
do {
    const tx = queue[idx];
    if (tx.type === "return") {
        console.log(`Handling return transaction ${tx.id}`);
        queue.push({ id: 99, type: "return" });
    }
    idx++;
} while (idx < transactions.length);


console.log("Final transaction queue : ", queue);


for(let key in inventory ){
    inventory[key] = 0;
}

console.log("Reset  inventory : ", inventory);

for(let i = visitors.length - 1; i >= 0; i--){
    console.log(` Visitor : ${visitors[i]} `);
}

