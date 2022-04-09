import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Footer from "./Footer";

function TodoListItem() {
	// console.log(newItem);

	return (
		<>
			<div className="container  p-5">
				<div className="row">
					<div className="col-lg-5 m-auto shadow p-3 mb-5 bg-dark rounded">
						<TodoForm />
						<Footer />
					</div>
				</div>
			</div>

			{/* <Todo /> */}
		</>
	);
}

export default TodoListItem;
