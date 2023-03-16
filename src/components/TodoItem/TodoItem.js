import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
    const onChangeInput = (e, employeeId) => {
        console.log(e, employeeId);
    };
    return (
        <div className="todo-item">
            <div className="todo-row">
                <div className="first-section-todo">
                    <img className="done" src="./pics/done.png" alt="done" />
                </div>
                <div className="second-section-todo">
                {todo.name}
                    {/* <input
                        name="name"
                        value={todo.name}
                        type="text"
                        onChange={(e) => onChangeInput(e, todo.id)}
                    /> */}
                </div>
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
