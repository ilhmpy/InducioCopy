import styled from "styled-components";
import { InputInfo } from "../../components/UI";
import { useState } from "react";

export const Anmeldung = () => {
    const [windowStand, setWindowStand] = useState(true)
    const handleWindowStand = () => {
        setWindowStand(windowStand => !windowStand);
    }

    if (windowStand) {
        return (
            <AnmeldungContainer>
                <AnmeldungForm>
                    <InputDesc>E-Mail</InputDesc>
                    <InputInfo style={{ "margin-bottom": "1em" }} placeholder="E-Mail" dark alone />
                    <InputDesc>Passwort</InputDesc>
                    <InputInfo style={{ "margin-bottom": "1em" }} placeholder="Passwort" dark alone />
                    <AnmeldungButton>Login</AnmeldungButton>
                    <InputDesc pswzs onClick={handleWindowStand}>Passwort zurücksetzen</InputDesc>
                </AnmeldungForm>
            </AnmeldungContainer>
        )
    } else {
        return (
            <AnmeldungContainer>
                <AnmeldungForm>
                    <InputDesc>Ihre E-Mail</InputDesc>
                    <InputInfo dark alone />
                    <AnmeldungButton>Passwort zurücksetzen</AnmeldungButton>
                    <InputDesc pswzs onClick={handleWindowStand}>Zurück zur Anmeldung</InputDesc>
                </AnmeldungForm>
            </AnmeldungContainer>
        )
    }
}

const AnmeldungContainer = styled.section`
    width: 100%;
    height: 30em;
    background: #FFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AnmeldungForm = styled.div`
    width: 22%;
`;

const InputDesc = styled.h3`
    font-weight: 300;
    margin-bottom: 1em;

    ${({ pswzs }) => {
        if (pswzs) {
            return `
                font-size: .9em;
                cursor: pointer;
                user-select: none;
                margin-top: 1.5em;
            `
        }
    }}
`;

const AnmeldungButton = styled.button`
    display: flex;
    width: 100%;
    height: 2.5em;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #8595A2;
    border-radius: 5px;
    margin-right: 0;
    font-size: 1em;
    margin-bottom: 1em;
    font-weight: 200;
    user-select: none;

    color: #FFF;
    background: #6C757D;

    &:hover {
        background: #5C636A;
    }
`;