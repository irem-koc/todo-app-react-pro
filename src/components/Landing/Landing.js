import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Modal from "../Modal/Modal";
import TodoItem from "../TodoItem/TodoItem";
import TodoList from "../TodoList/TodoList";
import "./Landing.css";
const Landing = () => {
    const { setShow, todos} = useContext(Context)
    return (
        <div className="landing">
            <div className="title">
                <h1>To do</h1>
            </div>
            <div className="container">
                <div className="todo-title"></div>
                <div>
                    <button className="add-task" onClick={() => setShow(true)}>Add New Task</button>
                </div>
                <Modal />
            </div>
            {
                todos.length>0 && (<TodoList />)
            }
            
            
        </div>
    );
};

export default Landing;
