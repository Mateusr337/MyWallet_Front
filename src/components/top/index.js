import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";

export default function Top() {

    return (
        <Container>
            <span>Olá, Fulano</span>
            <IoExitOutline />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;