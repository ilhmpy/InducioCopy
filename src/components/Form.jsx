import { InputInfo, InfoButton } from "./UI";

export const Form = ({ dark }) => {
    return (
        <div>
            <InputInfo dark={dark} desc={"Ihre Name"} />
            <InputInfo dark={dark} desc={"Telefon"} />
            <InputInfo dark={dark} desc={"Ihre E-Mail"} />
            <InputInfo dark={dark} desc={"Ihr Unternehmen"} />
            <InputInfo dark={dark} desc={"Betreff *"} />
            <InputInfo dark={dark} desc={"Ihre Anfrage"} area />
            <InputInfo dark={dark}>
                <InfoButton>
                    Absenden
                </InfoButton>
                <span></span>
            </InputInfo>
        </div>
    )
}