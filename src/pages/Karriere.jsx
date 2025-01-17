import styled from "styled-components";
import karriere from "../imgs/Karriere.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faPeopleGroup, faHeart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";

export const Karriere = () => {
    const menuRef = useRef();
    const menuBlockRef = useRef();
    const [menuPosition, setMenuPosition] = useState(null);

    const ausRef = useRef();
    const iniRef = useRef();
    const beRef = useRef();

    const [links, setLinks] = useState([
        { title: "Offene Stellen", ancher: "#OS", active: false, ref: menuBlockRef },
        { title: "Ausbildung", ancher: "#AUS", active: false, ref: ausRef },
        { title: "Initiativ Bewerbung", ancher: "#INI", active: false, ref: iniRef },
        { title: "Benefits", ancher: "#BE", active: false, ref: beRef }
    ]);

    const newLinks = (ancher) => {
        setLinks((links) => {
            let newLinks = [];
            
            links.forEach((newLink) => {
                if (newLink.ancher == ancher) {
                    newLink.active = true;
                } else {
                    newLink.active = false;
                }
    
                newLinks.push(newLink);
            });
        
            return newLinks;
          });
    }

    const onLink = (e, link) => {
      e.preventDefault();
      newLinks(link.ancher);
    }


    useEffect(() => {
        setLinks((links) => {
            links.forEach((link) => {
                if (link.active) {
                    link.ref.current.scrollIntoView({ behavior: "smooth" });
                }
            })

            return links;
        })
    }, [links]); 


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        newLinks(`#${id}`);
                    }
                });
            }, { threshold: 1, rootMargin: "0px 0px 20px 0px", } 
        );

        links.forEach((link) => observer.observe(link.ref.current));

        return () => observer.disconnect();
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const rect = menuBlockRef.current.getBoundingClientRect();
            
            if (rect.y < 10) {
               setMenuPosition(2) 
            } else {
                setMenuPosition(0)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <KarriereContainer>
            <ImgContainer>
                <Img src={karriere} />
            </ImgContainer>
            <InfoContainer>
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
            </InfoContainer>
            <WarumContainer>
                <WarumTitle>
                    Warum Inducio ?
                </WarumTitle>
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
            <KarriereMenu>
                <MenuLinks ref={menuRef}>
                    <div style={{ paddingTop: menuPosition ? `${menuPosition}em` : "" }}>
                        {links.map((link) => (
                            <KarriereLink 
                                href={link.ancher} active={link.active} 
                                onClick={e => onLink(e, link)}
                            >
                                {link.title}
                            </KarriereLink>
                        ))}
                    </div>
                </MenuLinks>
                <div>
                    <MenuBlock id="OS" ref={menuBlockRef}>
                        <MenuH2>Offene Stellen</MenuH2>
                        <MenuDesc>wir suchen ab sofort:</MenuDesc>
                        <MenuPosition>Systemadministrator (m/w/d) für Infrastrukturen</MenuPosition>
                    </MenuBlock>

                    <MenuBlock id="AUS" ref={ausRef}>
                        <MenuH2>Ausbildung</MenuH2>
                        <MenuDesc>wir bilden aus:</MenuDesc>
                        <MenuPosition>Fachinformatiker(m/w/d) für Systemintegration</MenuPosition>
                        <MenuPosition>Fachinformatiker (m/w/d) Anwendungsentwicklung</MenuPosition>
                        <MenuPosition>Fachinformatiker (m/w/d) Fachrichtung Digitale Vernetzung</MenuPosition>
                    </MenuBlock>

                    <MenuBlock id="INI" ref={iniRef}>
                        <MenuH2>Initiativbewerbung</MenuH2>
                        <MenuDesc big>keine passende Stelle gefunden ?</MenuDesc>
                        <MenuP>
                            Auch wenn derzeit keine für Ihre Qualifikation in Frage kommende Position ausgeschrieben 
                            ist, würden wir uns über Ihre Initiativbewerbung freuen.
                        </MenuP>

                        <MenuP>
                            Bitte teilen Sie uns bei einer Initiativbewerbung auch mit, in welchem Bereich 
                            Sie tätig sein möchten....
                        </MenuP>

                        <MenuP>
                            Wir freuen uns auf Ihre Unterlagen!
                        </MenuP>

                        <MenuP>
                            als PDF an bewerbung@inducio.de oder per Post an inducio GmbH |
                            Initiativbewerbung | Kotzinger Str. 21 | 83278 Traunstein
                        </MenuP>
                    </MenuBlock>

                    <MenuBlock id="BE" ref={beRef}>
                        <MenuH2>Benefits</MenuH2>
                    </MenuBlock>
                </div>
            </KarriereMenu>
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

const InfoH2 = styled.h1`
    line-height: 1em;
    font-size: 2.3em;
    font-weight: 500;
    font: "Roboto", serif;

    ${({ mb }) => mb ? `
        margin-top: 1em;
        margin-bottom: .5em;
    ` : ''}
`

const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const DescContainer = styled.div`
    width: 90%;
    padding-bottom: 3em;

    & > p { 
        color: #212529;
        font-weight: 400;
    }
`;

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

const KarriereMenu = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    padding-left: 1em;
    transition: 1s;
    padding-top: 2em;
`;

const MenuLinks = styled.div`
    display: grid;
    height: inherit;
    position: relative;
    transition: 1s;
    z-index: 5;

    & > div {
        transition: .3s;
        display: flex;
        flex-direction: column;
        height: 8em;
        gap: 1em;
        position: sticky;
        top: 0;
        user-select: none;
    }  
`;


const KarriereLink = styled.a`
    color: #D9D9DA;
    text-decoration: none;
    padding-left: .5em;

    &:hover {
        color: #585A5D;
    }

    ${({ active }) => active ? `
        color: #898B8D;
        border-left: 2px solid #6C757D;
    ` : ``}
`;

const MenuH2 = styled.h2`
    font-family: "Roboto", serif;
    font-size: 2.5em;
    color: #212529;
    line-height: 1em;
    font-weight: 400;
`;

const MenuDesc = styled.p`
    margin-bottom: 1.3em;

    ${({ big }) => big ? `
        font-size: 1.5em;
        font-weigth: bold;
        line-height: 1em;
        color: #212529;
        margin-bottom: 0;
        margin-top: .5em;
        font-family: "Roboto", serif;
    ` : ``}
`;

const MenuPosition = styled.h3`
    color: #50565C;
    font-family: "Roboto", serif;
    font-weight: 400;
    user-select: none;
    cursor: pointer;
    font-size: 1.5em;
    margin-bottom: 1em;
    line-height: .6em;
`;

const MenuBlock = styled.div`
    margin-bottom: 5em;
`;

const MenuP = styled.p`

`;