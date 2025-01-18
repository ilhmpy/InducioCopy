import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import extocode from "../../../imgs/extocode.svg";
import Secure2Fibe from "../../../imgs/Secure2Fibe.svg";
import anschlusswerk from "../../../imgs/anschlusswerk.webp";
import WhiteAllied from "../../../imgs/WhiteAllied.webp";
import RipeNCC from "../../../imgs/RipeNCC.svg";
import nakivo from "../../../imgs/nakivo.svg";

import nordane from "../../../imgs/nordane.svg";
import mgfuture from "../../../imgs/mgfuture.svg";
import quantum from "../../../imgs/quantum.svg";
import iusard from "../../../imgs/iusard.svg";
import stortrec from "../../../imgs/stortrec.svg";
import greenbone from "../../../imgs/greenbone.svg";

export const SliderSection = () => {
    const [slides, setSlides] = useState([
        { 
            idx: 0, 
            active: true, 
            logos: [
                { id: "ext", style: { width: 190, height: 54 }, src: extocode },
                { id: "sec", style: { width: 189, height: 51 }, src: Secure2Fibe },
                { id: "an",  style: { width: 189, height: 72 }, src: anschlusswerk },
                { id: "allied", style: { width: 189, height: 18 }, src: WhiteAllied },
                { id: "ripe", style: { width: 189, height: 33 }, src: RipeNCC },
                { id: "nak", style: { width: 154, height: 24 }, src: nakivo }
            ]  
        },
        { 
            idx: 1, 
            active: false,
            logos: [
                { id: "nord", style: { width: 189, height: 60 }, src: nordane },
                { id: "mg", style: { width: 189, height: 53 }, src: mgfuture },
                { id: "qua", style: { width: 189, height: 37 }, src: quantum },
                { id: "iu", style: { width: 189, height: 102 }, src: iusard },
                { id: "st", style: { width: 189, height: 62 }, src: stortrec },
                { id: "gr", style: { width: 189, height: 96 }, src: greenbone },
            ] 
        },
    ]);

    const WrapperRef = useRef(null);
    const SlideRef = useRef(null);
    const [offsetWidth, setOffsetWidth] = useState(0);
    const [currentIndex, setCurrentIndex] = useState({
        current: 1,
        real: 0
    });
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        setOffsetWidth(SlideRef.current.offsetWidth);
    }, [offsetWidth]);

    const handleRowClick = (direction) => {
        if (isAnimating) return; 
        setIsAnimating(true);

        setCurrentIndex((prevIndex) => {
            let newIndex = { ...prevIndex }

            if (typeof direction != "number") {
                if (prevIndex.real === slides.length - 1) {
                    newIndex.real = slides[0].idx;
                } else {
                   newIndex.real = slides[slides.length - 1].idx;
                }
    
                if (direction === "right") {
                    newIndex.current = prevIndex.current + 1;
                } else {
                    newIndex.current = prevIndex.current - 1;
                }
            } else {
                newIndex.real = direction;
                newIndex.current = direction + 1;
            }

            actualActiveSlide(newIndex.real);

            return newIndex;
        });
    };

    const actualActiveSlide = (idx) => {
        setSlides(slides => {
            let newSlides = [];

            slides.forEach((slide) => {
                if (slide.idx === idx) {
                    newSlides.push({ ...slide, active: true });
                } else {
                    newSlides.push({ ...slide, active: false });
                }
            })

            return newSlides;
        })
    }

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false);

                setCurrentIndex((prevIndex) => {
                    if (prevIndex.current === 0) {
                        return { ...prevIndex, current: slides.length }; 
                    } else if (prevIndex.current === slides.length + 1) {
                        return { ...prevIndex, current: 1 }; 
                    }

                    return prevIndex;
                });
            }, 1000); 

            return () => clearTimeout(timeout);
        }
    }, [isAnimating, slides.length]);
    
    return (
        <SliderContainer>
            <SliderContainerH2>Unsere Partner</SliderContainerH2>
            <Slider>
                <SliderWrapper 
                    ref={WrapperRef}
                    translateX={-currentIndex.current * 100}   
                    isAnimating={isAnimating} 
                >
                    <SliderSlide>
                        {slides[slides.length - 1].logos.map((item) => (
                            <Img loading={"lazy"} src={item.src} imgstyle={item.style} />
                        ))}
                    </SliderSlide>

                    {slides.map((slide) => (
                        <SliderSlide ref={SlideRef} key={slide.idx}>
                            {slide.logos.map((item) => (
                                <Img loading={"lazy"} src={item.src} imgstyle={item.style} />
                            ))}
                        </SliderSlide>
                    ))}

                    <SliderSlide>
                        {slides[0].logos.map((item) => (
                            <Img loading={"lazy"} src={item.src} imgstyle={item.style} />
                        ))}
                    </SliderSlide>
                </SliderWrapper>
            </Slider>
            <SliderRow id="left" style={{ left: "1em" }} onClick={() => handleRowClick("left")}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </SliderRow>
            <SliderRow id="right" style={{ right: "1em" }} onClick={() => handleRowClick("right")}>
                <FontAwesomeIcon icon={faArrowRight} />
            </SliderRow>
            <SliderDotsComponent slides={slides} onHandle={handleRowClick} currentIndex={currentIndex} />
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

const Img = styled.img`
    display: block;
    width: 1em;
    height: 1em;
    margin-right: .2em;

    ${({ imgstyle }) => `
        width: ${imgstyle.width}px;
        height: ${imgstyle.height}px;
    `}
`;

const SliderContainer = styled.section`
    background: #44494D;
    width: 100%;
    height: 35em;
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
    bottom: 3em;
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
    display: flex;
    font-size: 10em;
    color: #FFF;
    flex-direction: row;
    overflow: hidden;
    user-select: none;
    align-items: center;

`;

const SliderWrapper = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: row;
    transform: ${({ translateX }) => `translateX(${translateX}%)`};
    transition: ${({ isAnimating }) => isAnimating ? "transform 1s ease-in-out" : "0s"};
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
    position: absolute;
    top: 1em;
`;