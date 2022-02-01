import styled from "styled-components";


export default function TransactionButton({ description }) {

    return (
        <Container>
            {description}
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 114px;

    padding: 11px;
    background: #A328D6;
    border-radius: 5px;

    color: #fff;
    font-family: Raleway;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;


    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

