import styled from "styled-components"
import { Container } from "./Container"

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
                <div>
                    <InputInfo>
                        <span>Ihr Name</span>
                        <Input />
                    </InputInfo>
                    <InputInfo>
                        <span>Telefon</span>
                        <Input />
                    </InputInfo>
                    <InputInfo>
                        <span>Ihre E-Mail *</span>
                        <Input />
                    </InputInfo>
                    <InputInfo>
                        <span>Ihr Unternehmen</span>
                        <Input />
                    </InputInfo>
                    <InputInfo>
                        <span>Betreff *</span>
                        <Input />
                    </InputInfo>
                    <InputInfo>
                        <span>Ihre Anfrage *</span>
                        <InArea />
                    </InputInfo>
                    <InputInfo>
                        <span></span>
                        <InfoButton>
                            Absenden
                        </InfoButton>
                    </InputInfo>
                </div>
            </Container>
        </KontaktContainer>
    )
}

const KontaktContainer = styled.section`
    width: 100%;
    height: auto;
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

const InputInfo = styled.div`
    width: 100%;
    color: #FFF;
    display: grid;
    align-items: center;
    grid-template-columns: 20% 80%;
    margin-bottom: 1.1em;
`;

const Input = styled.input`
    color: black;
    background: #FFFF;
    height: 2.5em;
    font-weight: 500;
    border-radius: .3em;
    font-size: 1em;
`;

const InArea = styled.textarea`
    height: 5.2em;
    border-radius: .3em;
    padding-top: 1em;
    padding-left: 1em;
    font-size: 1.3em;
`;

const InfoButton = styled.button`
    background: #6C757D;
    max-width: 7em;
    height: 2.3em;
    border-radius: .3em;
    color: #FFF;
    margin-top: 1.3em;
    font-size: 1em;

    &:hover {
        background: #5C636A;
    }
`;