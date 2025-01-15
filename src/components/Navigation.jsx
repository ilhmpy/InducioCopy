import styled from "styled-components";
import { Container } from "./Container";
import logo from "../imgs/Inducio.webp";

export const Navigation = ({ children }) => {
    return (
        <NavigationContainer>
            <NavigationMenu>
                <Container>
                    <Logo src={logo} />
                </Container>
            </NavigationMenu>
            <Container>
                {children}
            </Container>
        </NavigationContainer>
    );
}

const NavigationContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const NavigationMenu = styled.div`
    width: 1920px;
    display: flex;
    padding: .5em;
    background: #FFF;
    justify-content: center;
`;

const Logo = styled.img`
    width: 130px;
    height: 40px;
`;