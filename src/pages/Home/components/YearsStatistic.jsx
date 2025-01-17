import { Container } from "../../../components/Container"
import styled from "styled-components"

export const YearsStatistic = () => {
    return (
        <YearsStatisticContainer>
            <Container flex>
                <YearsStatisticItem>
                    <YearsItem>15</YearsItem>
                    <YearsText>Jahre Erfahrung</YearsText>
                </YearsStatisticItem>
                <YearsStatisticItem>
                    <YearsItem>25</YearsItem>
                    <YearsText>Mitarbeiter</YearsText>
                </YearsStatisticItem>
                <YearsStatisticItem>
                    <YearsItem>30</YearsItem>
                    <YearsText>Partner</YearsText>
                </YearsStatisticItem>
                <YearsStatisticItem>
                    <YearsItem>+50</YearsItem>
                    <YearsText>zufriedene Kunden</YearsText>
                </YearsStatisticItem>
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