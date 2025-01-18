import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Container } from "../../../components";

import benefits from "../../../imgs/benefits.webp";
 
export const KarriereMenu = () => {
    const menuRef = useRef();
    const menuBlockRef = useRef();
    const [menuPosition, setMenuPosition] = useState(null);
    //const [observerHear, setObserverHear] = useState(false);

    const ausRef = useRef();
    const iniRef = useRef();
    const beRef = useRef();

    const [links, setLinks] = useState([
        { title: "Offene Stellen", ancher: "#OS", active: true, ref: menuBlockRef },
        { title: "Ausbildung", ancher: "#AUS", active: false, ref: ausRef },
        { title: "Initiativ Bewerbung", ancher: "#INI", active: false, ref: iniRef },
        { title: "Benefits", ancher: "#BE", active: false, ref: beRef }
    ]);

    const newLinks = (ancher) => {
        setLinks((links) => {
            let newLinks = [];
            
            links.forEach((newLink) => {
                if (newLink.ancher === ancher) {
                    newLink.active = true;
                } else {
                    newLink.active = false;
                }
    
                newLinks.push(newLink);
            });
        
            return newLinks;
          });
    }

    const changeLinks = () => {
        setLinks((links) => {
            links.forEach((link) => {
                if (link.active) {
                    link.ref.current.scrollIntoView({ behavior: "smooth" });
                }
            })

            return links;
        })
    }

    const onLink = (e, link) => {
      e.preventDefault();
      newLinks(link.ancher);
      changeLinks();
    }

   /*
    muss noch irgendwie anders die Verfolgung realisieren
    useEffect(() => {
        if (observerHear) {
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
        }
    }, [links, observerHear]); */

    useEffect(() => {
        const handleScroll = () => {
            const rect = menuBlockRef.current.getBoundingClientRect();

         //   setObserverHear(true);
            
            if (rect.y < 10) {
               setMenuPosition(2) 
            } else {
                setMenuPosition(0)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
           // setObserverHear(false);
        }
    }, []);

    return (
        <>
            <KarriereMenuContainer>
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
            </KarriereMenuContainer>
            <MenuBenefits>
                <Container>
                    <ImgBenefit src={benefits} />
                </Container>
            </MenuBenefits>
        </>
    )
}

const KarriereMenuContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 75%;
    padding-left: 1em;
    justify-content: center;
    transition: 1s;
    padding-top: 2em;
`;

const MenuLinks = styled.div`
    display: grid;
    height: 50em;
    position: relative;
    transition: 1s;
    z-index: 99;

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
    margin-bottom: 6em;

    &:last-child {
        margin-bottom: 3em; 
    }
`;

const MenuP = styled.p``;

const MenuBenefits = styled.div`
    margin-bottom: 2em;
`

const ImgBenefit = styled.img`
    width: 74em;
    height: 30em;
`