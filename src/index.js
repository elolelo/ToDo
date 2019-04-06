import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import "./TodoList.css";

var destination =document.querySelector("#container");

ReactDOM.render(
    <div> 
        <h2>Welcome to my basic To Do application :) </h2>
        <TodoList/>
       { /*  <TodoItems/>  */} 
    </div>,
    destination
);