import React from "react";
import { InfoPages, PageDesc, YearsStatistic, Kontakt, SliderSection } from "./components";

export const Home = () => {
    return (
        <>
            <PageDesc />
            <InfoPages />
            <SliderSection />
            <YearsStatistic />
            <Kontakt />
        </>
    )
}