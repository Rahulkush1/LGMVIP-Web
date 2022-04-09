import React from "react";

function Todo(props) {
	// console.log(props.isdone(props.id));
	const check = (e) => {
		e.target.parentElement.parentElement.style.textDecoration = "line-through";
	};
	if (props.text === "") {
		return;
	} else {
		return (
			<div>
				<div className="todo_list row  align-items-center my-3 shadow p-3  bg-dark rounded">
					<div className="col-lg-10 col-sm-10 col-md-10 ">
						<li className="item">{props.text === " " ? "" : props.text}</li>
					</div>
					<div className="col-lg-1 col-sm-1 col-md-1">
						<i
							className={props.text === "" ? "" : "fa-solid fa-check me-4"}
							onClick={check}></i>
					</div>
					<div className="col-lg-1 col-sm-1 col-md-1">
						<i
							className={
								props.text === "" ? "" : "fa-solid fa-trash-can float-start"
							}
							onClick={() => {
								props.onSelect(props.id);
							}}></i>
					</div>

					{/* <i className={props.isdone(props.id) ? "task-done" : "task-incomplete"}>right</i> */}
				</div>
			</div>
		);
	}
}

export default Todo;
