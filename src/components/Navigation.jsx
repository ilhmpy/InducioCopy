import styled from "styled-components";
import { Container } from "./Container";
import logo from "../imgs/Inducio.webp";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Footer } from "./Footer";

const PAGES = [
    { to: "/", page: "Home" },
    { to: "/contactus", page: "Kontakt" },
    { to: "/karriere", page: "Karriere" },
    { to: "/web/login", page: "Login" }
]

const changeTitle = (to) => {
    document.title = `${PAGES.find((page) => page.to === to)?.page} | Inducio`;
}

export const Navigation = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);
    
    const standartStyled = {
        top: "-100vh",
    }
    
    const [absoluteStyled, setAbsoluteStyled] = useState(standartStyled);

    useEffect(() => {
        if (window.location.pathname !== "/karriere") {
            const handleScroll = () => {
                setScrollY(window.scrollY);
      
                if (window.scrollY > 350) {
                  setAbsoluteStyled({
                      top: '0'
                  })
                } else {
                  setAbsoluteStyled({
                      ...standartStyled,
                      transition: 0
                  })
                }
              };
          
              window.addEventListener('scroll', handleScroll);
          
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
        }
    }, [scrollY]);

    useEffect(() => {
        const pathName = window.location.pathname;
        changeTitle(pathName);

    }, [window.location.pathname]);

    return (
        <NavigationContainer>
            <NavigationMenu />
            <NavigationMenu absolute={absoluteStyled} />
            <Flex1Container>
                {children}
            </Flex1Container>
            <Footer />
        </NavigationContainer>
    );
}

const NavigationMenu = ({ absolute }) => {
    const navigate = useNavigate();
    
    return (
        <NavigationMenuContainer absolute={absolute}>
            <Container flex>
                <NavigationLinksContainer>
                    <Logo src={logo} onClick={() => navigate("/")} />
                    <NavigationMenuLink to="/">Home</NavigationMenuLink>
                    <NavigationMenuLink to="/contactus">Kontakt</NavigationMenuLink>
                    <NavigationMenuLink to="/karriere">Karriere</NavigationMenuLink>
                </NavigationLinksContainer>
                <NavigationLinksContainer gap=".5">
                    <NavigationLinksButton onClick={() => navigate("/web/login")}>Anmelden</NavigationLinksButton>
                    <NavigationLinksButton kntk onClick={() => navigate("/contactus")}>Kontaktieren Sie uns</NavigationLinksButton>
                </NavigationLinksContainer>
            </Container>
        </NavigationMenuContainer>
    )
}

const NavigationMenuLink = ({ children, to }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClick = () => {
        changeTitle(to);
        navigate(to);
    }

    return (
        <ComponentLink onClick={onClick} active={location.pathname === to}>
            {children}
        </ComponentLink>
    )
}

const NavigationContainer = styled.div`
    width: 100%;
    height: 100%;
`;


const NavigationMenuContainer = styled.div`
    width: 100%;
    display: flex;
    background: #FFF;
    justify-content: center;
    align-items: center;
    height: 3.5em;
    transition: .6s;
    border-bottom: 1px solid #6C757D;

    ${({ absolute }) => {
        if (absolute) {
            return `
                position: fixed;
                z-index: 9;
                top: ${absolute.top};

            `
        }
    }}
`;

const Logo = styled.img`
    width: 130px;
    height: 40px;
    margin-right: 1.3em;
    cursor: pointer;
`;

const NavigationLinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ gap }) => gap ? `${gap}em` : "1em"};
`;

const ComponentLink = styled.a`
    font-size: 1em;
    color: #0000008C;
    font-weight: 300;

    &:hover {
        color: #000;
    }

    ${({ active }) => active ? `
        color: #000;
    ` : ``}
`;

const NavigationLinksButton = styled.button`
    display: flex;
    width: 8.3em;
    height: 2.5em;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #8595A2;
    border-radius: 5px;
    color: #8595A2;
    margin-right: 0;
    font-size: .9em;

    ${({ kntk }) => kntk ? 
            `
                width: 12.5em;
                color: #FFF;
                background: #6C757D;

                &:hover {
                    background: #5C636A;
                }
            ` 
        : 
            `
             &:hover {
                background: #8595A2;
                color: #FFF;
             }
            `
    }
`;

const Flex1Container = styled.section`
    flex: 1;
`;