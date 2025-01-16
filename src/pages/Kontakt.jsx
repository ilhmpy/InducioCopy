import styled from "styled-components";
import { Container } from "../components/Container";
import AdobeStock from "../imgs/AdobeStock.webp";

export const Kontakt = () => {
    return (
        <KontaktContainer>
            <Container>
                <KontaktH1>Kontaktieren Sie uns</KontaktH1>
            </Container>
        </KontaktContainer>
    )
}

const KontaktContainer = styled.section`
    width: 100%;
    height: 6em;
    display: flex;
    align-items: center;
    background-image: url(${AdobeStock});
    background-position: center;

    & > div {
        align-items: center;
        display: flex;
    }
`;

const KontaktH1 = styled.h1`
    display: flex;
    color: #FFFF;
    font-size: 2.8em;
    font-weight: 500;
`;