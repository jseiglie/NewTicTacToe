import React, { useState } from "react";
import "../../styles/Board.css";

const Board = () => {
	const [table, setTable] = useState([
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
		[undefined, undefined, undefined],
	]);

	const [turn, setTurn] = useState("X");

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
			alert("winner " + `${turn}`);
		}
		return !ctrl;
	};
	const CheckColumn = () => {
		let j = 0;
		let ctrl = true;
		while (ctrl && j < table.length) {
			// recorrer columnas => buscar NO coincidencias
			let i = 1;
			let ctrl2 = true;
			while (ctrl2 && i < table[j].length) {
				if (
					table[i][j] !== table[i - 1][j] ||
					typeof table[i][j] === "undefined"
				) {
					ctrl2 = false;
				} else {
					i += 1;
				}
			}
			ctrl = !ctrl2;
			j += 1;
		}
		if (!ctrl == true) {
			alert("winner " + `${turn}`);
		}
		return !ctrl;
	};

	const CheckLeftDiagonal = () => {
		if (
			table[0][0] == table[1][1] &&
			table[1][1] == table[2][2] &&
			typeof table[1][1] !== "undefined"
		) {
			alert("winner " + `${turn}`);
		}
	};

	const CheckRightDiagonal = () => {
		if (
			table[0][2] == table[1][1] &&
			table[1][1] == table[2][0] &&
			typeof table[1][1] !== "undefined"
		) {
			alert("winner " + `${turn}`);
		}
	};

	const CheckWinner = () => {
		CheckRow();
		CheckColumn();
		CheckLeftDiagonal();
		CheckRightDiagonal();
	};

	const ChangeTurn = () => setTurn(turn == "X" ? "O" : "X");

	const SetValue = (i, j) => {
		if (typeof table[i][j] === "undefined") {
			const tmp = table;
			tmp[i][j] = turn;
			setTable(table);
			CheckWinner();
			ChangeTurn();
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
