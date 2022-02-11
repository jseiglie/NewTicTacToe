import React from "react";
import Board from "../component/Board.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<div>
				<img
					className="img-fluid"
					src="https://dtrasler.files.wordpress.com/2015/09/star-trek-vs-star-wars.png"
				/>
				{/* <img
					className="img-fluid w-100"
					src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/03/Ships-of-the-Fleet.jpg"
				/> */}

				<h1>Tic-TaC-Toe</h1>
				<Board />
			</div>
		</>
	);
};

export default Home;
