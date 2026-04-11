# 📘 Case Study 1: Introduction to TypeScript

## 🚀 Introduction

Imagine you are building a modern software system for a large company.  
The project is growing rapidly, and many developers are working together.

You need a language that helps you:
- Organize your code
- Catch mistakes early
- Scale your application as it grows

The goal is to make your code:
- Robust
- Maintainable
- Easy to understand for new developers

### ❓ The Challenge
How do you choose a programming language that:
- Supports large-scale development
- Prevents bugs
- Provides powerful tools for building applications (web, games, servers)

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Understand what TypeScript is
- Recognize key benefits of TypeScript
- Identify real-world use cases
- Know how to get started with TypeScript

---

## 🏗️ Concept Introduction (Analogy)

### 🏢 Building with Blueprints

Think of software development like constructing a skyscraper:

- Blueprints ensure everything is built correctly and safely  
- TypeScript acts like a **blueprint for your code**

✅ It helps you:
- Catch mistakes early  
- Maintain structure  
- Collaborate smoothly with teams  

👉 With TypeScript, you're building with **confidence and clarity**

---

## 🔍 Technical Deep Dive

### What is TypeScript?

TypeScript is a:
- Typed
- Object-oriented
- Superset of JavaScript

It helps developers build **large, scalable, and maintainable applications**.

---

### ✨ Key Features

- **Static Typing**  
  Define the type of variables, parameters, and return values

- **Optional Type Annotations**  
  Add types where needed for better clarity

- **Object-Oriented Programming**  
  Supports:
  - Classes
  - Interfaces
  - Inheritance

- **Early Error Detection**  
  Finds bugs before runtime

- **Modern JavaScript Features**  
  Supports latest ES features

- **Excellent Tooling**  
  - Autocompletion  
  - Refactoring  
  - IntelliSense  

- **Scalable for Large Projects**  
  Ideal for teams and enterprise applications

---

## 💻 Code Walkthrough

### Example: First TypeScript Program

```ts
let message: string = "Hello, World!";
console.log(message);
```

# 📘 Case Study 2: Basic Syntax in TypeScript

## 🚀 Introduction

Imagine you’re joining a new team to build a large and important software system.

Everyone needs to write code that is:
- Clear
- Consistent
- Easy to understand

The language you use must follow well-defined rules so that:
- Code remains readable
- Maintenance becomes easier
- Team collaboration improves

### ❓ The Challenge

How do you learn and apply the basic rules and structure of TypeScript so your code is:
- Professional
- Readable
- Reliable

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Understand basic TypeScript syntax
- Write code using:
  - Variables
  - Functions
  - Modules
  - Statements and expressions
- Use identifiers, keywords, and comments correctly
- Apply object-oriented programming concepts
- Compile and run TypeScript code

---

## 🧠 Concept Introduction (Analogy)

### 🗣️ Learning a New Language

Learning TypeScript syntax is like learning grammar in a spoken language:

- Words & sentences → Variables, functions, statements  
- Grammar → Syntax rules  
- Punctuation → Semicolons, indentation  
- Comments → Notes for better understanding  

👉 Clear syntax = Easy-to-read and understandable code

---

## 🔍 Technical Deep Dive

### 🏗️ TypeScript Program Structure

A TypeScript program includes:

- **Modules** → Organize code  
- **Functions** → Perform tasks  
- **Variables** → Store data  
- **Statements & Expressions** → Logic and operations  
- **Comments** → Explain code  

---

### 💻 Your First TypeScript Code

```ts
let message: string = "Hello World";
console.log(message);
```

# 📘Case Study 3: Variables in TypeScript

Learn how to declare, use, and manage variables in TypeScript effectively.

---

## 📌 1. Problem Statement

Imagine you're developing a software system for a large company.

You need to store data like names, scores, and settings in a way that is:
- Clear
- Safe
- Organized

Every piece of information must:
- Have a name
- Occupy a place in memory

### ❓ Challenge
How do you manage variables in TypeScript so your code is:
- Robust
- Readable
- Error-free?

---

## 🎯 2. Learning Objectives

By the end of this lesson, you will:

- Understand how to declare and use variables
- Apply naming rules and best practices
- Use type annotations and type inference
- Understand variable scope (global, class, local)
- Use type assertions
- Understand strong typing

---

## 🧠 3. Concept (Analogy)

### 🗂️ Labeled Drawers in an Office

Think of variables like labeled drawers:

- Each drawer has a **name (label)** and stores **specific data**
- Rules must be followed for labeling
- Some drawers are:
  - **Global** → accessible everywhere
  - **Local** → accessible only in certain areas
  - **Class-based** → belong to specific objects

👉 Proper organization prevents confusion and bugs.

---

## ⚙️ 4. Technical Deep Dive

### ✅ Naming Rules

- Can include: letters, numbers, `_`, `$`
- Cannot:
  - Start with a number
  - Contain spaces
  - Use special characters
  - Use reserved keywords
- Case-sensitive

| Valid       | Invalid     |
|------------|------------|
| firstName  | first name |
| first_name | 1number    |
| num1       | first-name |
| $result    | Var        |

---

### 📝 Variable Declaration

#### 1. Type + Value
```ts
var name: string = "mary";
```

# 📘Case Study 4: TypeScript Case Studies

This repository contains structured learning notes for:

- 🟦 Case Study 4: `let & const`
- 🟪 Case Study 5: `any` Type

---

# 🟦 Case Study 4: let & const in TypeScript

## 📌 Problem Statement

You are building a modern application where:

- Some values **change over time** (e.g., score, page)
- Some values **must never change** (e.g., constants)

### ❓ Challenge
How do you safely manage variables to:
- Prevent accidental changes
- Control scope
- Avoid bugs?

---

## 🎯 Learning Objectives

- Declare variables using `let` and `const`
- Understand block scope
- Learn when to use `let` vs `const`
- Avoid redeclaration and reassignment errors

---

## 🧠 Concept (Analogy)

### 🔐 Lockers vs Safes

- `let` → 🗄️ Locker (can change contents)
- `const` → 🔒 Safe (locked after assignment)

Both are accessible only within their **block (room)**.

---

## ⚙️ Technical Deep Dive

### 📝 let Declaration

```ts
let car_name: string = "Brezza";
let car_price: number = 1000000;
```

# 🟪Case study 5: Any Type in TypeScript

Learn how to use the `any` type in TypeScript, when to use it, and how to avoid its risks.

---

## 📌 1. Problem Statement

You are building a **dynamic survey system** for a large research organization.

- Survey questions and answers can change anytime
- Answers may include:
  - Numbers
  - Strings
  - Arrays
  - Objects
  - Open-ended responses

### ❓ Challenge

How do you design your system so that it:
- Handles **unknown and changing data types**
- Remains **flexible**
- Allows you to **gradually introduce type safety**

---

## 🎯 2. Learning Objectives

By the end of this lesson, you will:

- Understand the purpose of the `any` type
- Declare variables that accept any value
- Recognize risks and trade-offs of using `any`
- Learn how to transition to safer types

---

## 🧠 3. Concept (Analogy)

### 📥 The Universal Inbox

Imagine a universal inbox in an office:

- It accepts **anything** (letters, packages, keys, pizza 🍕)
- But you **don’t know what’s inside**

👉 Similarly, `any`:
- Accepts any data ✅
- Removes type safety ❌

---

## ⚙️ 4. Technical Deep Dive

### 🔹 What is `any`?

- Disables TypeScript type checking
- Allows any value assignment
- No compile-time validation

---

### 📝 Syntax

```ts
let answer: any;

answer = 42;
answer = "blue";
answer = [1, 2, 3];
```
# 🟦Case Study 6: Built-in Types in TypeScript

Learn how to use **TypeScript’s built-in types** to build safe, reliable, and error-free applications.

---

## 📌 1. Problem Statement

You are developing a **financial analytics dashboard** for a multinational company.

You need to handle different types of data:

- 💰 Numbers → balances, interest rates  
- 📝 Strings → account names, currencies  
- ✅ Booleans → active/inactive status  
- ⚠️ Missing values → null, undefined  
- 🔁 Functions → some return values, some don’t  

### ❓ Challenge

How do you:

- Use built-in types effectively  
- Validate all data correctly  
- Avoid runtime errors  
- Maintain strong type safety  

---

## 🎯 2. Learning Objectives

By the end of this lesson, you will:

- Understand all built-in types in TypeScript  
- Declare variables and functions with explicit types  
- Handle special values (`null`, `undefined`, `void`, `never`)  
- Use type-safe objects, arrays, and symbols  

---

## 🧠 3. Concept (Analogy)

### 🏦 Bank Vault with Specialized Lockers

Imagine a bank vault:

- 💰 Cash lockers → `number`  
- 📄 Document lockers → `string`  
- ✅ Yes/No lockers → `boolean`  
- 📭 Empty lockers → `void`  
- 🔐 Unique lockers → `symbol`, `never`  

👉 TypeScript ensures:
- You **never put the wrong item in the wrong locker**
- Everything remains **safe and organized**

---

## ⚙️ 4. Technical Deep Dive

### 📊 Built-in Types Table

| Data Type  | Keyword     | Description |
|------------|------------|------------|
| Number     | `number`   | Double precision 64-bit floating point values |
| String     | `string`   | Sequence of Unicode characters |
| Boolean    | `boolean`  | Logical values (`true` / `false`) |
| Void       | `void`     | Function returns nothing |
| Null       | `null`     | Intentional absence of value |
| Undefined  | `undefined`| Uninitialized variable |
| Symbol     | `symbol`   | Unique and immutable primitive |
| Object     | `object`   | Collections (arrays, functions, objects) |
| Never      | `never`    | Value that never occurs |

---

## 🔢 Number

```ts
let age: number = 30;
let marks: number = 30.5;
let hex: number = 0xff;
let binary: number = 0b1010;
```

# 🟩Case study 7: User-Defined Types in TypeScript

Learn how to use **User-Defined Types in TypeScript** to model real-world systems in a safe, scalable, and maintainable way.

---

## 📌 1. Problem Statement

You are building a **patient management system for a hospital**.

The system must handle:

- 👤 Patient personal details  
- ❤️ Vital signs  
- 📋 Medical history  
- 👨‍⚕️ Different staff roles (Doctors, Nurses, Admins)  

Each role has:
- Different permissions  
- Different data needs  

The system must also:
- Handle collections of patients  
- Manage structured records  
- Support specialized data like test results and medications  

---

### ❓ Challenge

How do you use TypeScript’s **user-defined types**:

- Arrays  
- Tuples  
- Enums  
- Interfaces  
- Classes  

to build a system that is:

- ✅ Type-safe  
- 🔄 Scalable  
- 🧩 Maintainable  

---

## 🎯 2. Learning Objectives

By the end of this lesson, you will:

- Create and use **arrays, tuples, and enums**
- Define custom types using **interfaces and classes**
- Model real-world data structures safely
- Organize and scale your codebase using user-defined types

---

## 🧠 3. Concept (Analogy)

### 🗂️ The Hospital Filing Cabinet

Imagine a hospital filing system:

- 📁 Patient folders → Arrays  
- 🏷️ Info tabs → Tuples  
- 🎨 Status labels → Enums  
- 📄 Standard forms → Interfaces  
- 👨‍⚕️ Staff roles → Classes  

👉 This system keeps everything:
- Organized  
- Consistent  
- Easy to manage  

---

## ⚙️ 4. Technical Deep Dive

---

### 📦 Arrays

- Store multiple values of the same type  
- Syntax:
  - `type[]`
  - `Array<type>`

```ts
let patientIds: number[] = [101, 102, 103];
let patientNames: Array<string> = ["Alice", "Bob", "Carol"];
📍 Tuples
Fixed-size arrays with specific types
Order matters
let vitalSigns: [number, number] = [120, 80]; // [systolic, diastolic]
let patientInfo: [string, number] = ["Alice", 30];
🎯 Enums
Group of named constants
enum PatientStatus {
  Admitted,
  Discharged,
  UnderObservation
}

let status: PatientStatus = PatientStatus.Admitted;
📄 Interfaces
Define structure of objects
interface Patient {
  id: number;
  name: string;
  age: number;
  status: PatientStatus;
  vitals: [number, number];
}
🏗️ Classes
Blueprint for objects (data + behavior)
class Doctor {
  constructor(public name: string, public specialty: string) {}

  prescribe(medication: string): void {
    console.log(`${this.name} prescribes ${medication}`);
  }
}
🚀 5. Step-by-Step Data Modeling & Code Walkthrough
🔹 Define Enum and Interface
enum PatientStatus {
  Admitted,
  Discharged,
  UnderObservation
}

interface Patient {
  id: number;
  name: string;
  age: number;
  status: PatientStatus;
  vitals: [number, number];
}
🔹 Create Array of Patients
let patients: Patient[] = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    status: PatientStatus.Admitted,
    vitals: [120, 80]
  },
  {
    id: 2,
    name: "Bob",
    age: 45,
    status: PatientStatus.UnderObservation,
    vitals: [130, 85]
  }
];
🔹 Define Class for Staff
class Nurse {
  constructor(public name: string) {}

  takeVitals(patient: Patient, vitals: [number, number]): void {
    patient.vitals = vitals;
    console.log(`${this.name} updated vitals for ${patient.name}`);
  }
}
🔹 Use Tuples and Enums
let newVitals: [number, number] = [118, 76];

let nurse = new Nurse("Carol");
nurse.takeVitals(patients[0], newVitals);
🎮 6. Interactive Challenge
🧪 Your Task
🔹 Step 1: Create Enum
enum Role {
  Doctor,
  Nurse,
  Admin
}
🔹 Step 2: Create Interface
interface Staff {
  id: number;
  name: string;
  role: Role;
}
🔹 Step 3: Create Staff Array
let staffMembers: Staff[] = [
  { id: 1, name: "Dr. Smith", role: Role.Doctor },
  { id: 2, name: "Nurse Joy", role: Role.Nurse },
  { id: 3, name: "Admin John", role: Role.Admin }
];
🔹 Step 4: Function to Print Summary
function printStaffSummary(staff: Staff[]): void {
  for (let member of staff) {
    console.log(`Name: ${member.name}, Role: ${Role[member.role]}`);
  }
}

printStaffSummary(staffMembers);
⚠️ 7. Common Pitfalls & Best Practices
❌ Pitfalls
Not using interfaces for structured data
Using plain strings instead of enums
Misusing tuples
Poor data organization
✅ Best Practices
Use interfaces for object structure
Use enums for constants
Use tuples only when structure is fixed
Use arrays for collections
Use classes for behavior + data
🔁 8. Quick Recap
User-defined types help model real-world systems
Improve readability and maintainability
Provide strong type safety
Reduce bugs
🧾 9. Developer Checklist

✔ Use enums for related constants
✔ Define interfaces for complex objects
✔ Use arrays for collections
✔ Use tuples for fixed structure
✔ Use classes for logic + data
✔ Always define types clearly
```

# 🟩Case study 8: Null vs Undefined
Learn about Null vs Undefined in TypeScript

# TypeScript – null vs. undefined
 # 1. Problem Statement
Case Study: The Real-Time User Profile Dashboard
You are building a real-time user profile dashboard for a social platform.

Some users may not have filled out all their profile details (like age or bio).

Sometimes, you need to show that a value is “intentionally empty” (e.g., user hasn’t set their age), while other times a value is simply “not yet set” (e.g., waiting for data from the server).

Your code must handle both situations safely, avoiding runtime errors and making it clear to other developers what each value means.

The challenge:
How do you use null and undefined in TypeScript to clearly represent the difference between “no value” and “not yet set,” and how do you handle these values in user data and logic?

  # 2. Learning Objectives
By the end of this lesson, you will be able to:

Understand the difference between null and undefined in TypeScript.

Know when to use null vs. undefined for variables, function returns, and object properties.

Safely check, assign, and handle both values in your code.

Model real-world data where some values may be missing or intentionally empty.

  # 3. Concept Introduction with Analogy
Analogy: Empty Seats vs. Unassigned Seats
Imagine a theater:

An empty seat (null): The seat exists, but nobody is sitting there-it’s intentionally left empty.

An unassigned seat (undefined): The seat hasn’t been assigned yet-maybe the ticket system hasn’t finished processing.

In your dashboard, null means “this field is intentionally empty,” while undefined means “this field hasn’t been set yet.”

  # 4. Technical Deep Dive
What is null?
null is a primitive value representing “no value” or “empty.”

Explicitly assigned to a variable to show it is intentionally empty.

TypeScript treats null as its own type.

Example:
```ts
let a: null = null;
console.log(a); // Output: null
console.log(typeof a); // Output: object
```
 ###### Reinitializing with null:
```ts
let age: number | null = null;
console.log(age); // null
age = 28;
console.log(age); // 28
```
###### What is undefined?
undefined means a variable has been declared but not assigned a value.

TypeScript automatically assigns undefined to uninitialized variables.

Can also be explicitly assigned.

Example:
```ts
let b: undefined = undefined;
console.log(b); // Output: undefined
console.log(typeof b); // Output: undefined
Uninitialized variable:

let c:  number; console.log(c);  // Output: undefined
Function with no return:

function greet(name: string): void {
  console.log(`Hello ${name}`);
}
let result = greet("Alice");
console.log(result); // Output: undefined
```
Key Differences Table
Feature	null	undefined
Meaning	Explicitly no value	Not initialized
Typical Use	Intentionally empty/absent value	Variable declared but not assigned
Type Annotation	Has its own type null	Has its own type undefined
Default Behavior	Does not trigger default params	Triggers default params
Function Parameters	Explicitly no value	Missing or optional parameters
Object Properties	Deliberately set to no value	May not be initialized
Operational Handling	Must be handled in logic	Often handled with defaults
  # 5. Step-by-Step Data Modeling & Code Walkthrough
###### User type with nullable and optional properties:
```ts
type User = {
  name: string;
  age: number | null;
  email?: string;
};
```
##### User with null and undefined properties:
```ts
let user1: User = {
  name: "John Doe",
  age: null, // Explicitly no age
  email: "john@example.com"
};

let user2: User = {
  name: "Jane Doe",
  age: 25
  // email is optional and thus undefined
};
```
##### Checking and handling values:
```ts
function printUser(user: User): void {
  let ageInfo = user.age === null ? "Age not provided" : `Age: ${user.age}`;
  let emailInfo = user.email ? `Email: ${user.email}` : "Email not set";
  console.log(`${user.name} - ${ageInfo}, ${emailInfo}`);
}
```

printUser(user1); // John Doe - Age not provided, Email: john@example.com
printUser(user2); // Jane Doe - Age: 25, Email not set
  # 6. Interactive Challenge
Your Turn!

Define a type Profile with username (string), bio (string or null), and optional avatarUrl (string).

Create two profiles: one with a null bio and no avatar, and one with both fields set.

Write a function showProfile that prints the username, a default message if bio is null, and a default avatar if avatarUrl is undefined.

Explanation:

bio is explicitly set to null for profile1, so the function prints a default message.

avatarUrl is missing for profile1, so the function uses a default image.

For profile2, all fields are set and printed as-is.

  # 7. Common Pitfalls & Best Practices
Don’t confuse null and undefined: Use null for intentional emptiness, undefined for “not set yet.”

Always check for both null and undefined when handling optional or missing values.

Use union types (type | null) for fields that can be empty.

Use optional properties (prop?: type) for fields that may be missing.

  # 8. Quick Recap & Key Takeaways
null means “intentionally empty”; undefined means “not set yet.”

Use null for fields that are deliberately empty, and undefined for optional or not-yet-initialized values.

Always check and handle both cases in your logic for safe, predictable code.

  # 9. Optional: Programmer’s Workflow Checklist
Use null for fields that are intentionally empty.

Use undefined for optional or not-yet-initialized fields.

Always check for both null and undefined before using a value.

Use union types and optional properties for flexibility.

Provide sensible defaults when displaying or using possibly missing values.

# Case study 9: Type Aliases
## Learn about Type Aliases in TypeScript

## Type Alias in TypeScript
### 1. Problem Statement
You’re building a Warehouse Inventory System that must track products, orders, and storage locations. You need clear, reusable type definitions so the code is maintainable and self‐documenting. Without aliases, you’d repeat complex union or object types everywhere, leading to errors and duplication.

### 2. Learning Objectives
By the end of this tutorial, you will be able to:

Define type aliases for primitives, unions, tuples, objects, and functions.

Use generic aliases to model containers of varied data.

Simplify function signatures with alias types.

Improve code readability and maintainability with custom type names.

### 3. Concept Introduction with Analogy
Analogy: The Shipping Label Templates
In a warehouse, each package gets a shipping label. Rather than scribbling all fields each time, you use a template:

Simple Labels for tracking numbers (primitive alias).

Status Tags that accept “pending,” “shipped,” or “returned” (union alias).

Coordinate Stickers listing aisle and shelf numbers (tuple alias).

Product Cards with ID, name, and location (object alias).

Action Forms that log events or errors (function alias).

Container Wraps that hold any item type (generic alias).

Type aliases in TypeScript are like these templates-concise, reusable definitions for complex types.

### 4. Technical Deep Dive
Syntax: type AliasName = ExistingType;

Primitives: alias number or string to meaningful names.

Union Types: combine multiple primitives into one named type.

Tuples: fixed‐length arrays with specified element types.

Objects: shape definitions for repeated object structures.

Function Types: define parameter and return value signatures.

Generics: parameterize aliases for any data type.

### 5. Step‐by‐Step Code Walkthrough
```ts
// 1. Primitive Alias
type ProductID = number;
let widgetId: ProductID = 42;

// 2. Union Alias
type OrderStatus = "pending" | "shipped" | "returned";
let status: OrderStatus = "shipped";

// 3. Tuple Alias
type Coordinate = [aisle: number, shelf: number];
let loc: Coordinate = [3, 14];

// 4. Object Alias
type Product = {
  id: ProductID;
  name: string;
  location: Coordinate;
  price: number;
};
let product: Product = {
  id: widgetId,
  name: "Widget",
  location: loc,
  price: 19.99
};

// 5. Function Type Alias
type Logger = (message: string) => void;
const consoleLogger: Logger = msg => console.log(`[LOG] ${msg}`);

// 6. Generic Alias
type Container<T> = { value: T; timestamp: Date };
let productContainer: Container<Product> = {
  value: product,
  timestamp: new Date()
};
let idContainer: Container<ProductID> = {
  value: 7,
  timestamp: new Date()
};
```
### 6. Interactive Challenge / Mini‐Project
Your Turn!

Define a CustomerID alias for string.

Create a Customer object alias with id: CustomerID, name: string, and optional email?: string.

Implement a processOrder function type alias that accepts orderId: number and a callback (status: OrderStatus) => void.

Use the Container<T> generic to wrap a Customer object.

### 7. Quick Recap & Key Takeaways
Type Aliases = named templates for any TypeScript type.

Cover primitives, unions, tuples, objects, functions, and generics.

Improve code readability, reuse, and consistency.

Keep aliases focused, meaningful, and well‐named.

# Case study 10: Conditional Logic in TypeScript
Learn about Conditional Logic in TypeScript

## Conditional Logic in TypeScript
### 1. Problem Statement
A school portal needs a Student Performance Evaluator module. It must:

Check exam eligibility based on attendance.

Determine pass/fail status by score.

Assign letter grades (A–F) using score ranges.

Provide feedback messages for each grade.

Manual spreadsheet rules have become error-prone and hard to update. You need clear, maintainable code that handles each decision point correctly.

### 2. Learning Objectives
By the end of this lesson, you will be able to:

Write if statements to run code when a condition is true.

Use if…else for two-way branching.

Chain else if for multi-way decisions.

Implement switch statements for discrete value handling.

Organize decision logic into reusable functions.

### 3. Concept Introduction with Analogy
Analogy: The School Principal’s Decision Book
Just as a principal uses a well-organized “Decision Book” of rules to manage students, your TypeScript code uses conditional statements to make decisions in a clear, reliable way. Let’s unpack each rule in the book and see how it maps to TypeScript constructs:

Eligibility Rule → if Statement

###### Book Entry:

“If a student’s attendance is 75% or higher, they may sit the exam.”
```ts
Code Equivalent:

if (attendance >= 75) {
    // allow exam
}

Explanation: The principal flips to the “attendance” page, checks the percentage, and if the condition is met, allows the student in. In code, the if evaluates a single boolean expression and runs its block only when true. ## Flowchart

The following flow chart shows how the if statement works.

If Statement

Pass/Fail Rule → if...else Statement

Book Entry:

“If the student’s score is 40 or above, mark ‘Pass’; otherwise, mark ‘Fail.’”

Code Equivalent:

if (score >= 40) {
  // Pass logic
} else {
  // Fail logic
}
Explanation: The principal reads the score, and if it meets the threshold, writes “Pass.” Otherwise, they write “Fail.” The if…else gives exactly two paths-one when true, one when false-matching the principal’s binary decision.

Flowchart
The following flow chart shows how the if…else statement works.

if else Statement

Grading Rule → if…else if…else Ladder

Book Entry:

“90–100 → A; 80–89 → B; 70–79 → C; 60–69 → D; below 60 → F.”

Code Equivalent:

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
Explanation: The principal works down the list of ranges, stopping as soon as a match is found. The else if ladder mirrors this sequential evaluation-each condition is tested in turn until one is true.

Feedback Rule → switch Statement

Book Entry:

“For grade A, comment ‘Excellent’; for B, ‘Good job’; for C, ‘Keep improving’; etc.”

Code Equivalent:

switch (grade) {
  case "A":
    // Excellent
    break;
  case "B":
    // Good job
    break;
  // … and so on
  default:
    // Fallback comment
}
Explanation: The principal turns directly to the grade’s section in the Book and reads the prepared comment. A switch lets code jump straight to the matching case block for a discrete set of values, then “break” to stop.
```
Flowchart
The following flow chart explains how a switch-case statement works.

Switch Case Statement

##### Why This Analogy Works

Clarity & Organization: Just as the principal’s Book keeps rules neatly organized, conditional statements structure your logic in clear, maintainable blocks.

Step-by-Step Evaluation: The principal follows each rule in a predictable order; your code does the same by evaluating conditions linearly.

Single Source of Truth: The Book holds definitive policies; your code holds business rules in one place, minimizing ambiguity.

Easy Updates: If the principal changes a policy, they edit the Book. If requirements change, you update or extend your if/switch logic-keeping code and intent in sync.

### 4. Technical Deep Dive

#### 4.1 if Statement
```ts
Syntax:

if (condition) {
  // executes when condition is true
}
Flow: Evaluate condition; if true, run block; otherwise skip it.
```
#### 4.2 if…else Statement
```ts
Syntax:

if (condition) {
  // true block
} else {
  // false block
}
Flow: One of two paths.
```
#### 4.3 if…else if…else Statement
```ts
Syntax:

if (cond1) {
  // block1
} else if (cond2) {
  // block2
} else {
  // block3
}
Flow: Checks in order, runs first matching block.
```
#### 4.4 switch Statement
```ts
Syntax:

switch (value) {
  case const1:
    // block1
    break;
  case const2:
    // block2
    break;
  default:
    // fallback
    break;
}
Flow: Matches value to a case; runs that block; break prevents fall-through.
```
#### 5. Step-by-Step Code Walkthrough
```ts
Below is a complete implementation of our four rules:

// 1. Check eligibility: attendance ≥ 75%
function checkEligibility(attendance: number): boolean {
  if (attendance >= 75) {
    console.log("Eligible: attendance is sufficient.");
    return true;
  } else {
    console.log("Not eligible: attendance below 75%.");
    return false;
  }
}

// 2. Determine pass/fail: score ≥ 40
function passOrFail(score: number): boolean {
  if (score >= 40) {
    console.log("Result: Pass");
    return true;
  } else {
    console.log("Result: Fail");
    return false;
  }
}

// 3. Assign letter grade
function assignGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 4. Provide feedback via switch
function provideFeedback(grade: string): void {
  switch (grade) {
    case "A":
      console.log("Feedback: Excellent performance!");
      break;
    case "B":
      console.log("Feedback: Great job! Keep it up.");
      break;
    case "C":
      console.log("Feedback: Good effort; aim higher next time.");
      break;
    case "D":
      console.log("Feedback: Needs improvement; review your work.");
      break;
    default:
      console.log("Feedback: Unsatisfactory; please seek help.");
      break;
  }
}

// Main evaluator combining all steps
function evaluateStudent(attendance: number, score: number): void {
  if (!checkEligibility(attendance)) return;
  if (!passOrFail(score)) return;
  const grade = assignGrade(score);
  console.log(`Assigned Grade: ${grade}`);
  provideFeedback(grade);
}

// Example Run
evaluateStudent(80, 85);
6. Interactive Challenge / Mini-Project
Implement four small functions to practice each decision-making construct:

checkSign(num: number): void
Use an if statement to log whether num is positive.

evenOrOdd(num: number): void
Use an if…else to log whether num is even or odd.

getGrade(score: number): string
Use an if…else if…else ladder to return a letter grade:

score ≥90 → "A"

score ≥80 → "B"

score ≥70 → "C"

score ≥60 → "D"

otherwise "F"

provideFeedback(grade: string): void
Use a switch to log a feedback message for each grade ("A"… "F"), with a default for any unexpected value.
```
### 7. Common Pitfalls & Best Practices
Always include braces {} even for single statements: avoids errors when adding lines later.

Use strict equality === for comparisons to avoid type coercion bugs.

In switch, always add a default case and break after each case.

Order else if from most to least restrictive to ensure correct branch selection.

Keep each decision block focused on a single rule for readability.

### 8. Quick Recap & Key Takeaways
if for single checks.

if…else for two‐way branching.

else if for multiple conditions.

switch for selecting among discrete values.

Organize decision logic into small, reusable functions for clarity and maintainability.


