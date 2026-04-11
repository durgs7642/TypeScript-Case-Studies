


interface PaymentGateway {
    processPayment(amount : number) : Promise<boolean>;
  }

class StripeGateway implements PaymentGateway {
    async processPayment(amount : number): Promise<boolean> {
        console.log(`Processing payment of $${amount} via Stripe.`);
        return true;
    }
}

class PaypalGateway implements PaymentGateway {
    async processPayment(amount: number) : Promise<boolean> {
        console.log(`Processing payment of $${amount} via PayPal.`);
        return true;
    }
  }

class BankTransferGateway implements PaymentGateway {
    async processPayment(amount : number): Promise<boolean> {
        console.log(`Mock processing payment of $${amount}.`);
        return true;
    }
}


class PaymentProcessor {
    constructor(private gateway : PaymentGateway) { }

    async pay(amount : number): Promise<void> {
        const success = await this.gateway.processPayment(amount);
        if (success) {
            console.log("Payment successful!");
        } else {
            console.log("Payment failed.");
        }
    }
  }

const bankGateway = new BankTransferGateway();
const processor = new PaymentProcessor(bankGateway);

processor.pay(500);


class MockGateway implements PaymentGateway {
    async processPayment(amount:number) : Promise<boolean> {
        console.log(` Mock processing payment of $${amount}. `);
        return false;
    }
}

const mockGateway = new MockGateway();
const testProcessor = new PaymentProcessor(mockGateway);
testProcessor.pay(50);