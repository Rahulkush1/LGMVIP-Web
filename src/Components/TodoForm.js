import React, { useState } from "react";
import Todo from "./Todo";
function TodoForm(props) {
	const [input, setinput] = useState("");
	const [newItem, setnewItem] = useState([]);

	const handleinput = (e) => {
		setinput(e.target.value);
	};

	const addItem = () => {
		setnewItem((oldValues) => {
			return [...oldValues, input];
		});
		setinput("");
	};
	const deleteItem = (id) => {
		setnewItem((oldValues) => {
			return oldValues.filter((arrElem, index) => {
				return index != id;
			});
		});
	};

	return (
		<div className="container">
			<div className="row g-4 ">
				<div className="col-lg-12 text-center border-bottom">
					<label htmlFor="Todo_list " className=" text-center my-3 h1 text-light ">
						Todo List
					</label>
				</div>
				<div className="col-lg-10">
					<input
						className="form-control "
						type="text"
						name="todolist"
						value={input}
						placeholder="Enter your task"
						onChange={handleinput}
					/>
				</div>
				<div className="col-lg-2">
					<button onClick={addItem} className="btn btn-warning  ">
					<i class="fa-solid fa-plus"></i>
					</button>
				</div>
				<div className=" col-lg-11 " >
					<div className="list_items">
						<ol className="item_order_list text-light h5">
							{newItem.map((itemval, index) => {
								return (
									<Todo
										key={index}
										id={index}
										text={itemval}
										onSelect={deleteItem}
									/>
								);
							})}
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TodoForm;
