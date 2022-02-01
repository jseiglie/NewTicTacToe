import React from "react";
import "../../styles/Board.css";
import O from "../component/O.jsx";
import X from "../component/X.jsx";

const Board = () => {
	const myBoard = [
		["1", "2", "3"],
		["4", "5", "6"],
		["7", "8", "9"],
	];
	return (
		<>
			<table>
				<tbody>
					{myBoard.map((item, i) => {
						item.map((val, j) => {
							<tr key={i}>
								<td key={val}>{`${j}`}</td>
							</tr>;
						});
					})}
				</tbody>
			</table>
		</>
	);
};

export default Board;
