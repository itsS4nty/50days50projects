import React from 'react';
import styled from 'styled-components';
import Input from './components/Input';
import './reset.css';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: cornflowerblue;
`;

function App() {
	return (
		<Container>
			<Input />
		</Container>
	);
}

export default App;
