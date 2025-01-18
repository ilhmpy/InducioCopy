import { useState, useEffect, useRef } from "react";
import { Container } from "../../../components/Container"
import styled from "styled-components"

export const YearsStatistic = () => {
    const YearsItemRef = useRef();
    const YearsStatisticRef = useRef();

    const YearsRef = useRef();
    const WorkersRef = useRef();
    const ClientsRef = useRef();

    const [STATISTIC] = useState([
        {
            title: "Jahre Erfahrung",
            lastNumber: 15,
            ref: YearsRef
        },
    
        { 
            title: "Mitarbeiter",
            lastNumber: 25,
            ref: WorkersRef
        },
    
        {
            title: "zufriedene Kunden",
            lastNumber: 50,
            ref: ClientsRef,
            plus: true,
        }
    ]);

    const createArrayItems = (lastNumber) => {
        let arrayItems = [];

        for (let i = 0; i < lastNumber; i++) {
            if (i < 10) {
                arrayItems.push(`0${i}`);
            } else {
                arrayItems.push(i);
            }
        }   

        return arrayItems;
    }
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const blockYPosition = YearsStatisticRef.current.getBoundingClientRect().top + window.scrollY;

            if (
                scrollY >= blockYPosition - window.innerHeight && 
                scrollY <= blockYPosition + YearsStatisticRef.current.offsetHeight
            ) {
                STATISTIC.forEach((statt) => {
                    const itemHeight = Number(parseFloat(window.getComputedStyle(statt.ref.current).height));
                    const translate = itemHeight * statt.lastNumber;

                    console.log(translate);
                    statt.ref.current.style.transform = `translateY(-${translate + 5}px)`;
                });
              }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [STATISTIC]);

    return (
        <YearsStatisticContainer ref={YearsStatisticRef}>
            <Container flex>
                {STATISTIC.map((statt) => (
                    <YearsStatisticItem>
                        <YearsItemContainer>
                            <YearsItemWrapper ref={statt.ref}>
                                {
                                    [...(createArrayItems(statt.lastNumber)), statt.lastNumber]
                                        .map((item) => (
                                            <YearsItem key={item * Math.random()} ref={YearsItemRef}>
                                                {item}
                                            </YearsItem>
                                        )
                                    )
                                }
                            </YearsItemWrapper>
                        </YearsItemContainer>
                        <YearsText>{statt.title}</YearsText>
                    </YearsStatisticItem>
                ))}
            </Container>
        </YearsStatisticContainer>
    )
}

const YearsStatisticContainer = styled.section`
    background: #BFBFBF;
    width: 100%;
    height: 9em;
`;

const YearsStatisticItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 25%;
    flex-direction: column;
`;

const YearsItem = styled.div`
    font-size: 3.2em;
    line-height: 1.2em;
`;

const YearsText = styled.div`
    font-size: 1.1em;
    font-weight: 500;
`;

const YearsItemContainer = styled.div`
    width: 3.8em;
    height: 3.8em;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
`; 

const YearsItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    transition: 2s ease-in;
`;