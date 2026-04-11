
// 1. Simple Declaration & Optional Parameter
function displayMember(id: number, name: string, email?: string): void {
    console.log(`ID: ${id}, Name: ${name}`);
    if (email) console.log(`Email: ${email}`);
  }

displayMember(1, "Alice");
displayMember(2, "Bob", "bob@example.com");

// 2. Rest Parameters for Fines Tally

function calculateFines(...fines: number[]): number {
    let total = 0;
    for (let fine of fines) total += fine;
    return total;
  } 

  console.log("Total fines : ",calculateFines(10, 5, 2.5)); 


// 3. Default Parameter for Discount
function membershipFee(price: number, discountRate: number = 0.1): number {
    return price - price * discountRate;
}

console.log(membershipFee(100)); 
console.log(membershipFee(100, 0.2)); 

// 4. Anonymous Function & Callback
function greetVisitor(visitor: string, formatter: (name: string) => void): void {
    formatter(visitor);
}
const vipGreet = (name: string) => console.log(`Welcome VIP ${name}!`);
type VisitorFormatter = (name: string) => void;
const consoleGreet : VisitorFormatter = (name) => console.log(`Hello ${name} , welcome to our library!`);
greetVisitor("Alice", vipGreet);
greetVisitor("Bob", consoleGreet);

// 5. Recursion: Factorial (for demonstration)
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log("Factorial of 5 : ", factorial(5));



// 6. Function Overloads for Report Generation
function generateReport(data: object[]): string;
function generateReport(data: object[], format: "json"): string;
function generateReport(data: any[], format?: string): string {
    if (format === "json") {
        return JSON.stringify(data, null, 2);
    }
    return data.map(item => item.toString()).join("\n");
}

let books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "1984", author: "George Orwell" }
];

console.log("Text Report: \n", generateReport(books));
console.log("JSON Report: \n", generateReport(books, "json")); 