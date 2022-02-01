import React from "react";
import Board from "../component/Board.jsx";
import O from "../component/O.jsx";
import X from "../component/X.jsx";
import Modal from "../component/Modal.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<div>
				<img
					className="img-fluid w-100"
					src="https://dtrasler.files.wordpress.com/2015/09/star-trek-vs-star-wars.png"
				/>

				<h1>Tic-TaC-Toe</h1>
				<Modal></Modal>
				<Board />
			</div>
		</>
	);
};

export default Home;
