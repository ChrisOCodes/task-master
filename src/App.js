import React from "react";
import styled from "@emotion/styled";
import { Store } from "./Store";
import { TaskView } from "./components";
import "./App.css";

const screenHeight = window.innerHeight;
const screenWidth = window.innerWidth;

const Wrapper = styled.div`
	height: ${`${screenHeight}px`};
	width: ${`${screenWidth}px`};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Container = styled.div`
	height: 90%;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function App() {
	return (
		<Store>
			<Wrapper>
				<Container>
					<TaskView />
				</Container>
			</Wrapper>
		</Store>
	);
}

export default App;
