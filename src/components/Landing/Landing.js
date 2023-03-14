import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Modal from "../Modal/Modal";
import TodoItem from "../TodoItem/TodoItem";
import "./Landing.css";
const Landing = () => {
    const { setShow} = useContext(Context)
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
            <TodoList />
            
        </div>
    );
};

export default Landing;
