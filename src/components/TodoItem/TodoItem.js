import React, { useContext } from 'react'
import "./TodoItem.css"
import { Context } from "../../context/Context";
const TodoItem = () => {
    const {
        title_input,
        date_input,
    } = useContext(Context);
  return (
    <div>
        <ul>
            <li>
                <img src="/pics/done.jpg" alt="done" />
            </li>
            <li>{title_input}</li>
            <li></li>
            <li></li>
        </ul>

    </div>
  )
}

export default TodoItem