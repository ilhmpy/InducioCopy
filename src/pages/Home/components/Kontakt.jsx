import styled from "styled-components"
import { Container } from "../../../components/Container";
import { Form } from "../../../components";

export const Kontakt = () => {
    return (
        <KontaktContainer>
            <Container>
                <KontaktDesc>
                    <KontaktH1>
                        Kontaktieren Sie uns noch heute
                    </KontaktH1>
                    <KontaktH3>
                        für Ihre individuelle Beratung!
                    </KontaktH3>
                </KontaktDesc>
                <Form />
            </Container>
        </KontaktContainer>
    )
}

const KontaktContainer = styled.section`
    width: 100%;
    height: 35vh;
    min-height: 45em;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;

`;

const KontaktH1 = styled.h1`
    color: #FFFF;
    font-size: 3.5em;
    line-height: 2.4em;
    font-weight: 450;
`;

const KontaktH3 = styled.h3`
    color: #FFF;
    font-size: 2.1em;
    font-weight: 300;
    margin-bottom: 2.5em;
`;

const KontaktDesc = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 1em;
`;