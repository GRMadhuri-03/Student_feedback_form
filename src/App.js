import React, { Component } from "react";
import {useState} from 'react';
export default function App() {
  const [email, setEmail] =useState("");
  const [Name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [suggest, setSuggest] = useState("");
  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Name: ${Name}
      problem: ${problem}
      suggest: ${suggest}
    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Student Feedback Form</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>
      
      <label>
        Name of the student:
        <input
          name="Name"
          type="text"
          value={Name}
          onChange={e => setName(e.target.value)}
          required />
      </label>
      <label>
        Any problem facing in college?
        <input
          name="problem"
          type="text"
          value={problem}
          onChange={e => setProblem(e.target.value)}
          required />
      </label>
      <label>
        Any suggestion to solve the problem?(if any)
        <input
          name="suggest"
          type="text"
          value={suggest}
          onChange={e => setSuggest(e.target.value)}
          />
      </label>
      
      <button>Submit</button>
    </form>
  );
}
