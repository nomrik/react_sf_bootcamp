import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 5px;
`

interface Props {
    onClick: Function
}

const Button: FunctionComponent<Props> = (props) => {
    const { onClick = () => {}, children } = props;
    return (
        <StyledButton onClick={(e) => onClick(e)}>
            {children}
        </StyledButton>
    )
}

export default Button;