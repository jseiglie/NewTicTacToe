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

	// const CheckMayorDiagonal = () => {
	// 	let i = 1;
	// 	let ctrl = false;

	// 	while (ctrl && i < table.length) {
	// 		if (table[i][i] != table[i - 1][i - 1]) {
	// 			ctrl = true;
	// 		} else {
	// 			i += 1;
	// 		}
	// 	}
	// 	return ctrl;
	// };

	// const CheckRows = () => {
	// 	// comprobar las filas
	// 	let ctrl = false;
	// 	let i = 0;

	// 	while (ctrl && i < table.length) {
	// 		// * Los valores de los elementos
	// 		console.log(i);
	// 		let ctrl2 = false;
	// 		let j = 1;

	// 		while (ctrl2 && j < table[i].length) {
	// 			if (table[i][j - 1] != table[i][j]) {
	// 				ctrl2 = true;
	// 			} else {
	// 				j += 1;
	// 			}
	// 		}

	// 		ctrl = ctrl2 ? true : false;
	// 		if (!ctrl) {
	// 			i += 1;
	// 			console.log("!ctrl");
	// 		}
	// 	}
	// 	return ctrl;
	// };

	const CheckColumnns = () => {};

	// const CheckWinner = () => {
	// 	if (CheckRows() || CheckMayorDiagonal() || CheckColumnns()) {
	// 		alert("Hay un ganador");
	// 	}
	// };

	const CheckRow = () => {
		let i = 0;
		let ctrl = true;

		while (ctrl && i < table.length) {
			console.log(`i value: ${i}`);
			// recorrer columnas => buscar NO coincidencias
			let j = 1;
			let ctrl2 = true;
			while (ctrl2 && j < table[i].length) {
				if (
					table[i][j] !== table[i][j - 1] ||
					typeof table[i][j] === "undefined"
				) {
					ctrl2 = false;
				} else {
					j += 1;
				}
			}
			ctrl = !ctrl2;
			i += 1;
		}
		console.log(!ctrl);
		if (!ctrl == true) {
			alert("winner");
		}
		return !ctrl;
	};

	const CheckWinner = () => {
		CheckRow();
	};

	const ChangeTurn = () => setTurn(turn === "x" ? "O" : "x");

	const SetValue = (i, j) => {
		if (typeof table[i][j] === "undefined") {
			const tmp = table;
			tmp[i][j] = turn;
			setTable(table);
			ChangeTurn();
			CheckWinner();
		} else {
			alert("Already taken, try someplace else");
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
