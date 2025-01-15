import styled from "styled-components"
import { useState, useEffect } from "react";

export const PageDesc = () => {
    const [descOpacity, setDescOpacity] = useState(100); 

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
            
          if (scrollY > 400) {
            setDescOpacity(0);
          } else {
            setDescOpacity(100);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <PageDescContainer>
            <PageDescH1>EMPOWERING YOUR DIGITAL FUTURE</PageDescH1>
            <PageDescH3 opacity={descOpacity}>Innovative IT Lösungen | Experten Beratung | 24/7 Support</PageDescH3>
        </PageDescContainer>
    )
}

const PageDescContainer = styled.section`
    width: 100%;
    height: 27em;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
`;

const PageDescH1 = styled.h1`
    color: #FFF;
    font-size: 4em;
    text-align: center;
    font-weight: bold;
    letter-spacing: 0;
    line-height: 2em;
`;

const PageDescH3 = styled.h3`
    width: 100%;
    height: auto;
    color: #FFF;
    font-weight: 300;
    font-size: 2em;

    ${({ opacity }) => `
        opacity: ${opacity}%;
        transition: 1s;
    `}
`;