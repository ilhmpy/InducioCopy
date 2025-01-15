import { styled } from "styled-components";

export const Slider = () => {
    return (
        <SliderContainer>
            <SliderContainerH2>Unsere Partner</SliderContainerH2>
        </SliderContainer>
    )
}

const SliderContainer = styled.section`
    background: #44494D;
    width: 100%;
    height: 30em;
    justify-content: center;
    display: flex;
    padding-top: 4.8em;
`;

const SliderContainerH2 = styled.h2`
    color: #FFF;
    font-size: 2.5em;
    font-weight: 500;
    letter-spacing: 0;
`;