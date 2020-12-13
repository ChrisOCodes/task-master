import React, { useState } from "react";
import styled from "@emotion/styled";
import { TaskModal } from "./index";

const Wrapper = styled.div`
	height: 95%;
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	height: 90%;
	width: 50%;
	border-radius: 14px;
`;

export const TaskView = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const [screenHeight, setScreenHeight] = useState(0);
	const [screenWidth, setScreenWidth] = useState(0);

	function toggleModal() {
		setIsVisible(!isVisible);
		setScreenHeight(
			document.getElementById("view-container").offsetHeight + "px"
		);
		setScreenWidth(
			document.getElementById("view-container").offsetWidth + "px"
		);
	}
	return (
		<Wrapper>
			<Container id='view-container'>
				<header className='view-header'>
					<nav className='view-nav'>
						<div className='view-time-container'>
							<label>Time</label>
							<label className='view-time-display'>T-Display</label>
						</div>
						<div className='view-btn-container'>
							<button className='view-create-btn' onClick={toggleModal}>
								Create Task
							</button>
						</div>
					</nav>
				</header>
				<div className='view-body'>
					<div className='view-content'>
						<div className='view-content-left'></div>
						<div className='view-content-right'></div>
					</div>
				</div>
			</Container>
			<TaskModal
				isVisible={isVisible}
				toggleModal={toggleModal}
				height={screenHeight}
				width={screenWidth}
			/>
		</Wrapper>
	);
};
