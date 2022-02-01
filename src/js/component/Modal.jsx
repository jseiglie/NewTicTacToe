import React from "react";
import "../../styles/Modal.css";

const Modal = () => {
	return (
		<>
			<div className="row">
				<div className="wrap text-center">
					<h1>Choose your side</h1>
					<input id="player1" type="text" placeholder="Player1" />
					<button type="button">
						<i className="fab fa-jedi-order"></i>
					</button>
					<input id="player2" type="text" placeholder="Player2" />
					<button>
						<i className="far fa-hand-spock"></i>
					</button>
				</div>
			</div>
		</>
	);
};

export default Modal;
