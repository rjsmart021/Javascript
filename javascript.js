//Implement a conditional statement to check if a user is 
//logged in. This doesn't need to be anything complex, a simple let loggedIn = true will do.
let logged in = true
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

console.log('Items in cart');
const cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)','Tomato'];
for(const carts in cart){console.log(cart[carts]);}

let total = [20, 100, 5, 200, 3, 35, 1];


let sum = 0;
for (let i = 0; i < total.length; i++ ) {
  sum += total[i];
}
console.log(`The total price of items in cart: $${sum}`);}else{console.log("Please log in to view your cart")}
// create an array
let total = [20, 100, 5, 200, 3, 35, 1];
def deposit(current_balance, deposit_amount):
    """
    Function to handle deposits into a bank account.
    
    Parameters:
    current_balance (float): The current balance in the account.
    deposit_amount (float): The amount to be deposited.
    
    Returns:
    float: The updated balance after the deposit.
    """
    if deposit_amount <= 0:
        raise ValueError("Deposit amount must be positive.")
    
    updated_balance = current_balance + deposit_amount
    return updated_balance

# Example usage:
current_balance = 1000.0  # Example current balance
deposit_amount = 200.0    # Example deposit amount

new_balance = deposit(current_balance, deposit_amount)
print(f"New balance: ${new_balance:.2f}")

Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  // Method to deposit money into the account
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: $${amount}`);
    } else {
      console.log(`Insufficient balance. Cannot withdraw $${amount}`);
    }
  }

  // Method to display the current balance
  displayBalance() {
    console.log(`Account Balance: $${this.balance}`);
  }
}

// Example usage:
const myAccount = new BankAccount('123456', 1000);
myAccount.deposit(500); // Deposited: $500
myAccount.withdraw(300); // Withdrawn: $300
myAccount.displayBalance(); // Account Balance: $1200
myAccount.withdraw(1500); // Insufficient balance. Cannot withdraw $1500
myAccount.displayBalance(); // Account Balance: $1200

class BankAccount {
    constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    // Method to check the current balance
    checkBalance() {
      console.log(`Your current balance is: $${this.balance}`);
      return this.balance;
    }
  }
  
  // Create an instance of the BankAccount class
  const myAccount = new BankAccount('123456789', 1000);
  
  // Check the current balance and display it
  const currentBalance = myAccount.checkBalance();
  console.log(`You have $${currentBalance} left in your account.`);
