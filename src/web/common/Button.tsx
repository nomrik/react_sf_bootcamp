import React, { FunctionComponent, MouseEvent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    margin: 5px;
`

interface Props {
    onClick?(e: MouseEvent): void
}

const Button: FunctionComponent<Props> = (props) => {
    const { onClick, children } = props;
    return (
        <StyledButton onClick={(e) => onClick && onClick(e)}>
            {children}
        </StyledButton>
    )
}

export default Button;