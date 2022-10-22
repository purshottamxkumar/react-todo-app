import React, { useState } from "react";
import TodoData from "./Data/TodoData";
import TodoNewData from "./Components/TodoNewData";
import TodoList from "./Components/TodoList";
import Button from "./Components/Shared/Button";
import "./App.css";

const App = () => {
	// first import data
	const [todoData, settodoData] = useState(TodoData);
	const [currId, setCurrId] = useState(3);
	const [numberOfItems, setNumberOfItems] = useState(3);

	const addNewData = (newData) => {
		setCurrId(currId + 1);
		todoData.unshift(newData);
		settodoData(todoData);
		setNumberOfItems(numberOfItems + 1);
		console.log(todoData);
		// setSelectedItems();
		// console.log(`selected items are ${selectedItems}`);
	};

	const handleAllDelete = () => {
		todoData.splice(0, todoData.length);
		settodoData(todoData);
		console.log(`the size of the todoData is: ${todoData.length}`);
		setNumberOfItems(0);
	};

  const deleteThisItem = (itemId) => {
    settodoData(todoData.filter((curritem) => curritem.id !== itemId));
    setNumberOfItems(todoData.length - 1);
  };

	return (
		<div className="main-container">
			<div className="upper-container">
				<h1>THINGS TO DO</h1>
			</div>
			<div className="middle-container">
				<TodoNewData handleAdd={addNewData} prevId={currId} />
				<TodoList todoData={todoData} handleDelete={deleteThisItem} />
			</div>
			<div className="lower-container">
				<span>{numberOfItems} items left</span>
				<Button onClickFunc={handleAllDelete} type="button" id="delete-all-btn">
					Delete All
				</Button>
			</div>
		</div>
	);
};

export default App;
