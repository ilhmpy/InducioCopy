import styled from "styled-components"
import { Container } from "./Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterMain>
                <Container>
                    <FooterFlex>
                        <FooterLinks>
                            <a>Impressum</a>
                            <a>Datenschutz</a>
                            <a>AGB's</a>
                        </FooterLinks>
                        <FooterAdresse>
                            Kotzinger Str. 21 | 83278 Traunstein | DE
                            <FooterNummer>
                                <a><FontAwesomeIcon icon={faPhone} color={"#FFF"} />​ +49 861 90119070</a> 
                                <a><FontAwesomeIcon icon={faEnvelope} color={"#FFF"} /> ​info@inducio.de</a>
                            </FooterNummer>
                        </FooterAdresse>
                    </FooterFlex>
                </Container>
            </FooterMain>
            <FooterUnder>
                <Container>
                    <span>Copyright © inducio GmbH</span>
                </Container>
            </FooterUnder>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    width: 100%;
    height: 15em;
    display: grid;
    position: relative;
    flex: 0 0 auto;
    grid-template-rows: 75% 25%;
`;

const FooterMain = styled.div`
    width: 100%;
    background: #101827;
    display: flex;
    align-items: center;
    position: relative;
`;

const FooterUnder = styled.div`
    background: #0E1421;
    display: flex;
    color: #B7B9B2;
    align-items: center;
    justify-items: center;

    & > span {
        display: flex;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;

    & > a {
        color: #AFB5BA;
        line-height: 1.5em;
    }

    & > a:hover {
        color: #868e96;
    }
`;

const FooterAdresse = styled.div`
    width: auto;
    color: #FFFF;
`;

const FooterFlex = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
`;

const FooterNummer = styled.div`
    margin-top: .5em;
    display: flex;
    flex-direction: row;
    
    & > a:first-child {
        margin-right: 1em;
    }

    & > a {
        color: #AFB5BA;
        line-height: 1.5em;
        display: block;
    }

    & > a:hover {
        color: #868e96;
    }
`;