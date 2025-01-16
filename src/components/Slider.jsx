import { styled } from "styled-components";

export const SliderSection = () => {

    return (
        <SliderContainer>
            <SliderContainerH2>Unsere Partner</SliderContainerH2>
            <Slider>
                <SliderSlide>1</SliderSlide>
                <SliderSlide>2</SliderSlide>
            </Slider>
        </SliderContainer>
    )
}

const SliderContainer = styled.section`
    background: #44494D;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SliderRow = styled.div``;

const SliderDot = styled.div``;

const Slider = styled.div`
    width: 100%;
    max-width: 90%;
    height: auto;
    position: relative;
    border: 1px solid red;
    display: flex;
    font-size: 10em;
    color: #FFF;
    flex-direction: row;
    overflow: hidden;
    user-select: none;
    align-items: center;
    margin-bottom: .5em;
    transition: transform 0.3s ease-in-out;
`;

const SliderSlide = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`;

const SliderContainerH2 = styled.div`
    color: #FFF;
    font-size: 2.5em;
    font-weight: 500;
    letter-spacing: 0;
    width: 100%;
    display: block;
    text-align: center;
    margin-top: 1em;
    margin-bottom: 1em;
`;