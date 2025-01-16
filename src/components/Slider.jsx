import { styled } from "styled-components";

import extocode from "../imgs/extocode.png";
import Secure2Fibe from "../imgs/Secure2Fibe.png";
import anschlusswerk from "../imgs/anschlusswerk.webp";
import WhiteAllied from "../imgs/WhiteAllied.webp";
import RipeNCC from "../imgs/RipeNCC.png";
import nakivo from "../imgs/nakivo.svg";

import nordane from "../imgs/nordane.png";
import mgfuture from "../imgs/mgfuture.png";
import quantum from "../imgs/quantum.png";
import iusard from "../imgs/iusard.png";
import stortrec from "../imgs/stortrec.png";
import greenbone from "../imgs/greenbone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

export const SliderSection = () => {
    const [slides, setSlides] = useState([
        { idx: 0, active: true },
        { idx: 1, active: false }
    ]);
    const [activeSlide, setActiveSlide] = useState(0);
    const SliderRef = useRef(null);
    const WrapperRef = useRef(null);

    const handleRowClick = (row) => {
        const wrapper = WrapperRef.current;
        const transform = window.getComputedStyle(wrapper).transform;
        let transformNumber = null;

        if (transform != "none") {
            transformNumber = transform
                  .match(/matrix\(([^)]+)\)/)[1]
                  .split(',')
                  .map(Number)[4];
        }

        if (typeof row == "number") {
            setSlides((slides) => {
                let slidesArray = [];
    
                slides.forEach((slide) => {

                    if (slide.idx == row) {
                        slidesArray.push({ ...slide, active: true });
                    } else {
                        slidesArray.push({ ...slide, active: false });
                    }
    
                    return slidesArray;
                })

                return slidesArray;
            });
        } else {
            if (row = "right") {
                if (typeof transformNumber == "number" && transformNumber < 0) {
                    wrapper.style.transform = `translateX(0px)`;
                    transformNumber = null;
                    return;
                } else {
                    wrapper.style.transform = `translateX(-${SliderRef.current.offsetWidth}px)`; 
                }
            } else if (row == "left") {
                if (typeof transformNumber == "number" && transformNumber > 0) {
                    wrapper.style.transform = `translateX(-${SliderRef.current.offsetWidth}px)`;
                } else {
                    wrapper.style.transform = `translateX(0px)`;
                }
            }
        }
    }

    return (
        <SliderContainer>
            <SliderContainerH2>Unsere Partner</SliderContainerH2>
            <Slider>
                <SliderWrapper ref={WrapperRef}>
                    {slides.map((slide) => {
                        if (slide.idx == 0) {
                            return (
                                <SliderSlide ref={SliderRef} key={slide.idx}>
                                    <Img id="ext" style={{ width: "184px", height: "54px" }} src={extocode} />
                                    <Img id="sec" style={{ width: "189px", height: "51px" }} src={Secure2Fibe} />
                                    <Img id="an" style={{ width: "189px", height: "72px" }} src={anschlusswerk} />
                                    <Img id="allied" style={{ width: "189px", height: "18px" }} src={WhiteAllied} />
                                    <Img id="ripe" style={{ width: "189px", height: "33px" }} src={RipeNCC} />
                                    <Img id="nak" style={{ width: "154px", height: "24px" }} src={nakivo} />
                                </SliderSlide>
                            )
                        } else {
                            return (
                                <SliderSlide key={slide.idx}>
                                    <Img id="nord" style={{ width: "189px", height: "60px" }} src={nordane} />
                                    <Img id="mg" style={{ width: "189px", height: "53px" }} src={mgfuture} />
                                    <Img id="qua" style={{ width: "189px", height: "37px" }} src={quantum} />
                                    <Img id="iu" style={{ width: "189px", height: "102px" }} src={iusard} />
                                    <Img id="st" style={{ width: "189px", height: "62px" }} src={stortrec} />
                                    <Img id="gr" style={{ width: "189px", height: "96px" }} src={greenbone} />
                                </SliderSlide>
                            )
                        }
                    })}
                </SliderWrapper>
            </Slider>
            <SliderRow id="left" style={{ left: "1em" }} onClick={() => handleRowClick("left")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </SliderRow>
            <SliderRow id="right" style={{ right: "1em" }} onClick={() => handleRowClick("right")}>
                <FontAwesomeIcon icon={faArrowRight} />
            </SliderRow>
            <SliderDotsComponent slides={slides} onHandle={handleRowClick} />
        </SliderContainer>
    )
}

const SliderDotsComponent = ({ slides, onHandle }) => {
    return (
        <SliderDots>
            {slides.map((slide) => (
                <SliderDot 
                    key={slide.idx} active={slide.active} 
                    onClick={() => onHandle(slide.idx)} 
                />
            ))}
        </SliderDots>
    )
}

const SliderWrapper = styled.div`
    width: inherit;
    height: inherit;
    display: inherit;
    transition: 1s;
   // transform: translateX(-400px);
`;

const Img = styled.img`
    display: block;
    width: 1em;
    height: 1em;
    margin-right: .2em;
`;

const SliderContainer = styled.section`
    background: #44494D;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SliderRow = styled.div`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    width: 3.5em;
    height: 3.5em;
    background: #FFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        font-size: 1.5em;
    }
`;

const SliderDots = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: .3em;
    position: absolute;
    bottom: 1.2em;
`;

const SliderDot = styled.div`
    width: 1.1em;
    height: 1.1em;
    border-radius: 50%;
    cursor: pointer;

    ${({ active }) => {
        if (active) {
            return `
                background: #FFF;
            `
        } else {
            return `
                background: #A2A4A6;

                &:hover {
                    background: #8E9294;
                }
            `
        }
    }}
`;

const Slider = styled.div`
    width: 100%;
    max-width: 95%;
    position: relative;
   // border: 1px solid red;
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