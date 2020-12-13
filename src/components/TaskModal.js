import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Context } from "../Store";

const Wrapper = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	display: ${(props) => (props.isVisible ? "flex" : "none")};
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.6);
`;
const Container = styled.div`
	height: ${(props) => (props.height ? `calc(${props.height} - 40%)` : "")};
	width: ${(props) => (props.width ? `calc(${props.width} - 20%)` : "")};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 14px;
	box-shadow: 0 0 10px 0 #00000;
`;

export const TaskModal = (props) => {
	const [state, setState] = useContext(Context);

	const root = document.documentElement;
	root.style.setProperty("--modalHeight", props.height);
	root.style.setProperty("--modalWidth", props.width);
	return (
		<Wrapper isVisible={props.isVisible}>
			<Container height={props.height} width={props.width}>
				<header className='modal-header'>
					<label>New Task</label>
				</header>
				<div className='modal-textarea-container'>
					<textarea className='modal-textarea'></textarea>
				</div>
				<div className='modal-btn-container'>
					<button className='modal-btn create-btn'>Create</button>
					<button className='modal-btn cancel-btn' onClick={props.toggleModal}>
						Cancel
					</button>
				</div>
			</Container>
		</Wrapper>
	);
};
