import styled from "styled-components"
import { Container } from "./Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChartColumn, faServer, 
    faLink, faGears,
    faShieldHalved, faLock,
    faPaperclip, faMap, 
    faGauge, faEarthEurope,
    faHospital, faUser,
    faMicrochip,
    faHandsHoldingCircle,
    faNavicon
} from '@fortawesome/free-solid-svg-icons';

export const InfoPages = () => {
    return (
        <InfoPagesContainer>
            <InfoPagesItem>
                <Container flex>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faChartColumn} 
                            />
                        </ImgBlock>
                        Monitoring	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faServer} 
                            />
                        </ImgBlock>
                        Dokumentation	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faLink} 
                            />
                        </ImgBlock>
                        Endpoint Management
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faGears} 
                            />
                        </ImgBlock>
                        Netzwerk
                    </InfoPagesUItem>
                </Container>
            </InfoPagesItem>
            <InfoPagesItem grau>
                <Container flex>
                <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faShieldHalved} 
                            />
                        </ImgBlock>
                        Firewall Service	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faLock} 
                            />
                        </ImgBlock>
                        SOC	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faPaperclip} 
                            />
                        </ImgBlock>
                        Asset Management
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faMap} 
                            />
                        </ImgBlock>
                        Implementierung
                    </InfoPagesUItem>
                </Container>
            </InfoPagesItem>
            <InfoPagesItem>
                <Container flex>
                <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faGauge} 
                            />
                        </ImgBlock>
                        24/7 Support	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faEarthEurope} 
                            />
                        </ImgBlock>
                        XDR 	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faHospital} 
                            />
                        </ImgBlock>
                        Kritische Infrastrukturen	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faUser} 
                            />
                        </ImgBlock>
                        IT-Rechtsberatung
                    </InfoPagesUItem>
                </Container>
            </InfoPagesItem>
            <InfoPagesItem grau>
                <Container flex>
                <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faGears} 
                            />
                        </ImgBlock>
                        NOC
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faMicrochip} 
                            />
                        </ImgBlock>
                        SIEM	
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faHandsHoldingCircle} 
                            />
                        </ImgBlock>
                        Endpoint Protection
                    </InfoPagesUItem>
                    <InfoPagesUItem>
                        <ImgBlock>
                            <FontAwesomeIcon 
                                color={"#FFF"} 
                                icon={faNavicon} 
                            />
                        </ImgBlock>
                        ISMS	
                    </InfoPagesUItem>
                </Container>
            </InfoPagesItem>
        </InfoPagesContainer>
    )
}

const InfoPagesContainer = styled.section`
    width: 100%;
`;

const InfoPagesItem = styled.section`
    background: #FFFF;
    width: 100%;
    height: 10em;

    ${({ grau }) => grau ? `background: #BFBFBF;` : ``}
`;

const InfoPagesUItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    color: #212529;

    width: 25%;
`

const ImgBlock = styled.span`
    display: flex;
    justify-content: center;
    width: 2em;
    height: 2em;
    border-radius: 3px;
    margin-bottom: .5em;
    background: #8595A2;
    align-items: center;

    & > svg {
        font-size: .8em;
    }
`;