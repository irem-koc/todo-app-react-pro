import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Modal.css";
const Modal = () => {
    const {
        show,
        setShow,
        title_input,
        date_input,
        setDate_input,
        setTitle_input,
    } = useContext(Context);

    const dateFormatter = (e) => {
        setDate_input(e.target.value);
        if (e.target.value.length === 2) {
            setDate_input(e.target.value + "/");
        }
        if (e.target.value.length === 5) {
            setDate_input(e.target.value + "/");
        }
    };
    return show ? (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => setShow(!show)}>
                    &times;
                </span>
                <div className="modal-title">
                    <h2>Title</h2>
                    <input required
                        value={title_input}
                        type="text"
                        onChange={(e) => setTitle_input(e.target.value)}
                    />
                </div>
                <div className="modal-date">
                    <h2>Date</h2>
                    <input required
                        value={date_input}
                        type="text"
                        maxLength={10}
                        placeholder="dd/mm/yyyy"
                        onChange={(e) => dateFormatter(e)}
                    />
                </div>
                <div className="buttons">
                    <button className="cancel-btn">Cancel</button>
                    <button className="save-btn" onClick={()=>console.log(date_input,title_input)}>Save</button>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default Modal;
