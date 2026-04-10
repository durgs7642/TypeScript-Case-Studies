

function processTransaction (amount:number, description:string | undefined, isCredit:boolean): void {
    if(amount < 0 ) throw new Error("Amount cannot be negative");

    if(description === undefined) description = "No description provided";
    
    console.log(`Processing transaction: ${description}, Amount: ${amount}, Type: ${isCredit ? "Credit" : "Debit"}`);
}

processTransaction(100, "Salary", true);
processTransaction(0, undefined, false);