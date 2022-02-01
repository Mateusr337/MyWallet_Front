import styled from "styled-components";


export default function Title() {
    return (
        <Container>
            <span>MyWallet</span>
        </Container>
    );
}

const Container = styled.div`
    font-family: Saira Stencil One;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`;