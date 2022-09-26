import React from "react";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>To Do List</h1>
        </header>
        <main>
          <Form/>
        </main>
      </div>
    </div>
  );
}

export default App;