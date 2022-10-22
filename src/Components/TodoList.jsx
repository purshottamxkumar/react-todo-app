import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData, handleDelete}) => {
	return (
		<div className="list">
			{todoData.map((arrElement) => (
				<TodoItem
					item={arrElement.value}
					itemId={arrElement.id}
                    handleDelete = {handleDelete}
				/>
			))}
		</div>
	);
};

export default TodoList;
