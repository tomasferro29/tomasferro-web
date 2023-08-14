import styled from 'styled-components'

const StyledBackground = styled.div`
    background: #222;
    /* height: 1000px;
    width: 1000px; */
    height: 100vh;
    width: 100%;
`;

export default function DarkBackground({children}) {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    )
}