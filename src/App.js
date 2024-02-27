import React from "react";
import TodoApp from "./Component/TodoApp/TodoApp";
import About from "./Component/TodoApp/About/About";
import Header from "./Component/TodoApp/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" element={<TodoApp />} />
      <Route path="/about" element={<About />} />
    </Router>
  );
}



