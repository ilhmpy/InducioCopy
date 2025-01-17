import styled from "styled-components";

import { CompanyDesc, WarumComponent, KarriereMenu } from "./components";
import { Container, Form } from "../../components";

export const Karriere = () => {

    return (
        <KarriereContainer>
            <CompanyDesc />
            <WarumComponent />
            <KarriereMenu />
            <Container>
                <Form dark />
            </Container>
        </KarriereContainer>
    )
}

const KarriereContainer = styled.section`
    width: 100%;
    min-height: 30em;
    background: #FFF;
    display: flex;
    justify-content: center;
    flex-direction: column;
    transition: 1s;
    padding-top: 3em;
`;

const Kontakt = styled.div``