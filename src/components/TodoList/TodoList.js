import React, { useContext } from "react";
import { Context } from "../../context/Context";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const { todos, setTodos } = useContext(Context);
    return (
        <div className="todo-list">
            {todos.map((todo, i) => (
                <div className="date-todo">
                    <div className="date">
                        <img src="./pics/todo-icon.png" alt="todo" />
                        {todo.history}
                    </div>
                    <TodoItem key={i} todo={todo} />
                </div>
            ))}
        </div>
    );
};

export default TodoList;
