import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // 1. Student Greeting
  const student = { name: "Rahul", age: 21 };

  // 2. Product Price Calculation
  const product = { productName: "Wireless Mouse", quantity: 3, price: 499 };
  const totalCost = product.quantity * product.price;

  // 3. Conditional Attendance Status
  const attendance = { name: "Anjali", isPresent: true };

  // 4. Full Name Formatting
  const person = { firstName: "Amit", lastName: "Sharma" };
  const fullName = `${person.firstName} ${person.lastName}`;

  // 5. Loan EMI Display
  const loan = { loanAmount: 500000, interestRate: 8, tenureYears: 5 };
  const P = loan.loanAmount;
  const R = loan.interestRate / (12 * 100);
  const N = loan.tenureYears * 12;
  const EMI = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);

  // 6. Favorite Subjects List
  const subjectsData = { name: "Priya", subjects: ["Math", "Science", "English"] };

  // 7. Employee Salary Breakdown
  const employee = { employeeName: "Suresh", basic: 25000, hra: 10000 };
  const totalSalary = employee.basic + employee.hra;

  // 8. Product Discounted Price
  const discountProduct = { item: "Smartphone", price: 20000, discount: 10 };
  const finalPrice = discountProduct.price - (discountProduct.price * discountProduct.discount) / 100;

  // 9. Online Order Summary
  const order = { orderId: "ORD1234", customer: "Meena", items: 4, totalPrice: 3200 };

  // 10. Weather Report
  const weather = { city: "Mumbai", temperatureC: 30 };
  const fahrenheit = (weather.temperatureC * 9) / 5 + 32;

  return (
    <>
      

      <h1>1. Student Greeting</h1>
      <p>Hello, {student.name}! You are {student.age} years old.</p>
      <hr />

      <h2>2. Product Price Calculation</h2>
      <p>
        {product.productName} - Qty: {product.quantity}, Price: ₹{product.price}, 
        Total: ₹{totalCost}
      </p>
      <hr />

      <h2>3. Conditional Attendance Status</h2>
      <p>{attendance.name} is {attendance.isPresent ? "Present" : "Absent"}</p>
      <hr />

      <h2>4. Full Name Formatting</h2>
      <p>Full Name: {fullName}</p>
      <hr />

      <h2>5. Loan EMI Display</h2>
      <p>Loan Amount: ₹{P}, Interest Rate: {loan.interestRate}%, Tenure: {loan.tenureYears} years</p>
      <p>Monthly EMI: ₹{EMI.toFixed(2)}</p>
      <hr />

      <h2>6. Favorite Subjects List</h2>
      <p>{subjectsData.name}'s Favorite Subjects:</p>
      <ul>
        {subjectsData.subjects.map((subj, index) => (
          <li key={index}>{subj}</li>
        ))}
      </ul>
      <hr />

      <h2>7. Employee Salary Breakdown</h2>
      <p>
        {employee.employeeName} → Basic: ₹{employee.basic}, HRA: ₹{employee.hra}, 
        Total: ₹{totalSalary}
      </p>
      <hr />

      <h2>8. Product Discounted Price</h2>
      <p>
        {discountProduct.item} → Original: ₹{discountProduct.price}, 
        Discount: {discountProduct.discount}%, 
        Final: ₹{finalPrice}
      </p>
      <hr />

      <h2>9. Online Order Summary</h2>
      <p>
        Order ID: {order.orderId}, Customer: {order.customer}, 
        Items: {order.items}, Total Price: ₹{order.totalPrice}
      </p>
      <hr />

      <h2>10. Weather Report</h2>
      <p>
        City: {weather.city}, Temp: {weather.temperatureC}°C 
        ({fahrenheit.toFixed(1)}°F)
      </p>
    </>
  );
}

export default App;
