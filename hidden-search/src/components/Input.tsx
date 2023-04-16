import React, { useState } from 'react';
import styled from 'styled-components';
import SearchSVG from '../svg/SearchSVG';

const Container = styled.div<{ isOpen: boolean }>`
	width: ${props => props.isOpen ? '256px' : '48px'};
    height: 48px;
	position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: width .25s linear;
    
	input {
        width: 100%;
        height: inherit;
        border-radius: 12px;
        padding-left: 15px;
        font-size: 18px;
	}
    
	span {
        display: flex;
        justify-content: center;
        align-items: center;
		position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        background: white;
        width: 48px;
        height: inherit;
        border-radius: 12px;
	}
`;

const Input = () => {
    const [open, setOpen] = useState(false);
	return (
		<Container isOpen={open}>
			<input type='text' placeholder='Search...' />
			<span onClick={() => setOpen(!open)}><SearchSVG /></span>
		</Container>
	);
};

export default Input;
