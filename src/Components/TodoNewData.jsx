import React, { useState } from "react";
import Button from "./Shared/Button";

const TodoNewData = ({handleAdd, prevId}) => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // make a new object
        const newData = {
            id: prevId + 1,
            value: text
        };
        handleAdd(newData);
        setText("");
    };
	return (
		<form onSubmit={handleSubmit}>
			<div className="buttonIn">
                <input
                    onChange={handleTextChange}
                    type="text"
                    placeholder="Add New"
                    value={text}
                    id="input-container"
                />
                <Button type="submit" id="submit-btn">Send</Button>
            </div>
		</form>
	);
};

export default TodoNewData;
