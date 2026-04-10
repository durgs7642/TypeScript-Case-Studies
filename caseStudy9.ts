
type CustomerID = string;

type Customer = {
    id:CustomerID,
    name:string,
    email?: string,
}


type OrderStatus = "pending" | "shipped" | "delivered" | "cancelled";

type ProcessOrder = (orderId: number, callback:(status: OrderStatus)=> void) => void;

let processOrder: ProcessOrder = (orderId, callback)=>{
    console.log(`Processing order ${orderId}`);
    callback("shipped");
}

type Container<T> = {value: T, timestamp: Date};

let customer1 : Customer = {
    id: "101",
    name: "John Doe",
    email: "John@gmail.com",
}
let customerContainer : Container<Customer> = {value: customer1, timestamp: new Date()};

processOrder(123, (status)=> {
    console.log(`Order status: ${status}`);
});

console.log(customerContainer);