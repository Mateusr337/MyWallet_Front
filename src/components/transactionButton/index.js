import { Link } from "react-router-dom";
import styled from "styled-components";


export default function TransactionButton({ description, path }) {

    return (
        <Container to={path} >
            {description}
        </Container>
    );
}

const Container = styled(Link)`
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

