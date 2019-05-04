import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import "./TodoList.css";
import {BrowserRouter} from 'react-router-dom';

var destination =document.querySelector("#container");

ReactDOM.render(
    <BrowserRouter>
    <div> 
        <h2> Lelo's Basic ToDo app </h2>
        <p>Used ReactJS with ES2015 </p>
        <TodoList/>
    </div>
    </BrowserRouter>,
    destination
);