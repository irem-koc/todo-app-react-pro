import React, { useContext } from "react";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
    return (
        <div className="todo-item">
            <div className="date">
                <img src="./pics/todo-icon.png" alt="todo" />
                {todo.history}
            </div>
            <div className="todo-row">
                <div className="first-section-todo">
                    <img className="done" src="./pics/done.png" alt="done" />
                </div>
                <div className="second-section-todo">{todo.name}</div>
                <div className="third-section-todo">
                    <img
                        className="pencil"
                        src="./pics/pencil.png"
                        alt="pencil"
                    />
                    <img
                        className="delete"
                        src="./pics/delete.png"
                        alt="delete"
                    />
                </div>
            </div>
        </div>
    );
};

export default TodoItem;
