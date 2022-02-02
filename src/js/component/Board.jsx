import React, { useState } from "react";
import "../../styles/Board.css";
import O from "../component/O.jsx";
import X from "../component/X.jsx";

const Board = () => {
	const [myBoard, setMyBoard] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
	]);
	return (
		<>
			<table>
				<tbody>
					{myBoard.map((row) => (
						<tr>
							{row.map((column) => (
								<td>{column}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Board;
