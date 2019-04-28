import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import "./TodoList.css";

var destination =document.querySelector("#container");

ReactDOM.render(
    <div> 
        <h2>Welcome to Lelo's basic ToDo application :) </h2>
        <p>Used ReactJS with ES2015 </p>
        <TodoList/>
       { /*  <TodoItems/>  */} 
    </div>,
    destination
);