import React, { useState } from "react";
import "../../styles/Board.css";
import O from "../component/O.jsx";
import X from "../component/X.jsx";

const Board = () => {
	const [table, setTable] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
	]);

	const [turn, setTurn] = useState("x");

	const CheckWinner = () => {
		// * TODO: Comprobar si alguien gana
	};

	const ChangeTurn = () => setTurn(turn === "x" ? "o" : "x");

	const SetValue = (i, j) => {
		if (typeof table[i][j] === "undefined") {
			const tmp = table;
			tmp[i][j] = turn;
			setTable(table);
			ChangeTurn();
			CheckWinner();
		} else {
			alert("Hey esta posicion ya estaba ocupada");
		}
	};

	return (
		<>
			<table>
				<tbody>
					{table.map((row, i) => (
						<tr key={i}>
							{row.map((column, j) => (
								<td onClick={() => SetValue(i, j)} key={j}>
									<div className="item">{column}</div>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Board;
