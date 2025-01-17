import styled from "styled-components"
import { Container } from "../../../components/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGamepad, faPeopleGroup, faHeart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

export const WarumComponent = () => {
    return (
        <>
            <WarumContainer>
                <Container flex>
                    <WarumTitle>
                        Warum Inducio ?
                    </WarumTitle>
                </Container>
            </WarumContainer>
            <AntwortContainer>
                <AntwortInnContainer>
                    <AntwortItem>
                        <div>
                            <AntwortH3>Teamevents der Extraklasse <FontAwesomeIcon icon={faGamepad} /></AntwortH3>	​
                            LAN-Parties, BBQ, Paintball, Weihnachtsmarkt besuche uvm. stehen bei uns mehrmals Jährlich auf dem Programm.
                        </div>
                        <div>
                            <AntwortH3>Entwicklung <FontAwesomeIcon icon={faPeopleGroup} /></AntwortH3>
                            Wir möchten uns mit dir gemeinsam weiterentwickeln, wir setzen auf Teamwork
                        </div>
                    </AntwortItem>
                    <AntwortItem>
                        <div>                                                        
                            <AntwortH3><FontAwesomeIcon icon={faHeart} className="rightSide" /> Offene Kommunikation</AntwortH3>
                            Wir pflegen eine Kultur des ehrlichen Austauschs und der Transparenz. In unserer Arbeitsatmosphäre kann jeder seine Gedanken frei äußern
                        </div>
                        <div>       
                            <AntwortH3><FontAwesomeIcon icon={faMoneyBill} className="rightSide" /> Faire Arbeitsbedingungen</AntwortH3>
                            Jährliche Gehaltsgespräche sind bei uns Standard. Leistung definieren wir über Qualität, nicht über Überstunden
                        </div>
                    </AntwortItem>
                </AntwortInnContainer>
                <AntwortEndH3>Alle Funktionen entdecken</AntwortEndH3>
            </AntwortContainer>
        </>
    )
}

const WarumContainer = styled.div`
    background: #6C757D;  
    color: #FFFF;
    display: flex;
    height: 10em;
    justify-content: center;
    align-items: center;
`;

const WarumTitle = styled.div`
    width: 90%;
    align-items: center;
    display: flex;
    font-family: "Roboto", serif;
    font-size: 4em;
`;

const AntwortContainer = styled.div`
    width: 100%;
    height: 30em;
    padding-top: 2em;
    padding-bottom: 2em;
    display: grid;
    grid-template-columns: 90%;
    align-items: center;
    justify-content: center;
`;

const AntwortInnContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50% ;
    margin-bottom: 3em;
    align-items: center;
`;

const AntwortItem = styled.div`
    display: grid;
    height: 20em;
    grid-template-rows: 50% 50%;
    align-items: top;
    padding-left: 4em;
    font-weight: 350;

    &:first-child {
        padding-right: 4em;
        padding-left: 0;
        border-right: 1px solid #DEDFDF;
        text-align: right;
    }
`;

const AntwortH3 = styled.h3`
    line-height: 2em;
    font-family: "Roboto", serif;
    font-size: 2em;
    font-weight: 400;

    & > svg {
        color: #8595A2;
        font-size: .9em;
        padding-left: .6em;
    }

    .rightSide {
        padding-right: .6em;  
        padding-left: 0; 
    }
`;

const AntwortEndH3 = styled.a`
    text-align: center;
    color: #50565C;

    &:hover {
        color: #000;
    }
`;