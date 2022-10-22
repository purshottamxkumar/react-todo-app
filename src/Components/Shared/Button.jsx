import React from "react";

const Button = ({children, type, id, onClickFunc}) => {
    return (
        <button onClick={onClickFunc} type={type} className="btn" id={id}>{children}</button>
    );
};

export default Button;