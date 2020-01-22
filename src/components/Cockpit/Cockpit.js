import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 2px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen' };
      color: black;
    };  
`;

const Cockpit = (props) => {

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            alert('Save Data to Cloud');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup Work')
        }
    }, []);

    return (
        <div>
            <h1>{props.title}</h1>
            <StyledButton
                // There was a waring to use toString in boolean values 
                alt={props.showPersons.toString()} 
                onClick={props.clicked}>
                Toggle
            </StyledButton>
        </div>
    );
}

export default React.memo(Cockpit);