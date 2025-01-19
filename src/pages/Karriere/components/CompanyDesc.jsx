import styled from "styled-components";
import { Container } from "../../../components/Container";

import karriere from "../../../imgs/karriere.svg";

export const CompanyDesc = () => {
    return (
         <>
            <ImgContainer>
                <Img src={karriere} />
            </ImgContainer>
            <InfoContainer>
                <Container flex>
                    <DescContainer>
                        <InfoH2>inducio als Arbeitgeber</InfoH2>
                        <p>
                            Wir entwickeln innovative und maßgeschneiderte IT-Lösungen für unsere Kunden – 
                            wir finden für jeden Kunden die passende Lösung.
                        </p>

                        <p>
                            Herzstück unseres Erfolges sind dabei unsere Mitarbeiter! Daher sind wir immer auf 
                            der Suche nach motivierten Mitgliedern für unser junges und dynamisches Team, 
                            die ihre berufliche Zukunft aktiv mitgestalten möchten und zusammen mit uns wachsen wollen!
                        </p>

                        <p>
                            Unser Büro befindet sich am nördlichen Rande Traunsteins und bietet eine komfortable und 
                            moderne Büroausstattung. Bei uns herrschen flache Hierarchien und ein wertschätzender, 
                            familiärer Umgang innerhalb des gesamten Teams. Wir haben Spaß an dem was wir tun und 
                            das wirkt sich auch auf die Büroatmosphäre positiv aus.
                        </p>

                        <InfoH2 mb>Herzenssache: Ausbildung bei inducio</InfoH2>
                        Besonders am Herzen liegt uns der Fachkräfte-Nachwuchs. Daher bilden wir im 
                        technischen Bereich selbst aus. Unsere Auszubildenden dürfen in spannenden Projekten 
                        mitarbeiten und können von dem umfangreichen Fachwissen ihrer Kollegen profitieren. 
                        Darüber hinaus ermutigen unsere Ausbilder zum selbstständigen und eigenverantwortlichen 
                        Arbeiten und stehen bei allen Fragen und Problemen mit Rat und Tat zur Seite.
                    </DescContainer>
                </Container>
            </InfoContainer>
      </>
    )
}

const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const Img = styled.img`
    width: 98%;
    margin-bottom: 4em;
    flex-shrink: 0;
`;

const InfoContainer = styled.div`
    width: 100%;
    padding-bottom: 2em;
    display: flex;
    justify-content: center;
`;

const DescContainer = styled.div`
    width: 90%;
    padding-bottom: 3em;

    & > p { 
        color: #212529;
        font-weight: 400;
    }
`;

const InfoH2 = styled.h1`
    line-height: 1em;
    font-size: 2.3em;
    font-weight: 500;
    font: "Roboto", serif;

    ${({ mb }) => mb ? `
        margin-top: 1em;
        margin-bottom: .5em;
    ` : ''}
`;