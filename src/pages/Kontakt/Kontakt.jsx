import styled from "styled-components";
import { Container } from "../../components/Container";
import AdobeStock from "../../imgs/AdobeStock.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Form } from "../../components";

export const Kontakt = () => {
    return (
        <KontaktContainer>
            <KontaktDesc>
                <Container>
                    <KontaktH1>Kontaktieren Sie uns</KontaktH1>
                </Container>
            </KontaktDesc>
            <KontaktForm>
                <Container>
                    <KontaktFormContainer>
                        <KontaktFormDesc>
                            Kontaktieren Sie uns bezüglich unserer Firma und unseren Dienstleistungen. <br />
                            Wir tun alles, um uns so schnell wie möglich mit Ihnen in Verbindung zu setzen.
                        </KontaktFormDesc>
                        <Form dark />
                    </KontaktFormContainer>
                    <KontaktFormInfo>
                        <FormInfoDesc>Mein Unternehmen</FormInfoDesc>
                        <span><FontAwesomeIcon icon={faLocationDot} /> 3575 Fake Buena Vista Avenue <br /></span>
                        <span><FontAwesomeIcon icon={faPhone} /> +1 (650) 555-0111<br /></span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> info@yourcompany.example.com</span>
                    </KontaktFormInfo>
                </Container>
            </KontaktForm>
        </KontaktContainer>
    )
}

const KontaktContainer = styled.section`
    width: 100%;
    height: auto;
`;

const KontaktDesc = styled.div`
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

const KontaktForm = styled.div`
    width: 100%;
    background: #FFFF;
    height: auto;  

    & > div {
        display: grid;
        grid-template-columns: 70% 30%;
    }
`;

const KontaktFormContainer = styled.div`
    padding-top: 2em;
    padding-bottom: 2em;
`;

const KontaktFormInfo = styled.div` 
    padding-top: 2em;
    padding-left: 2em;
    align-items: center;

    & > span {
        display: flex;
        align-items: center;
        gap: 1em;
        margin-bottom: .5em;
    }

    & > span > svg {
        font-size: .9em;
    }
`;

const KontaktFormDesc = styled.div`
    line-height: 1.5em;
    font-weight: 400;
    margin-bottom: 2em;
`;

const FormInfoDesc = styled.h4`
    font-weight: 400;
    line-height: 0em;
    margin-bottom: 0.8em;
    text-align: left;
`;