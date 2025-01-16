import styled from "styled-components"

export const InputInfo = ({ desc, area, children, dark }) => {
    if (children) {
        console.log(children)
        return (
            <InputInfoContainer>
                <span></span>
                {children}
            </InputInfoContainer>
        )
    } else {
        return (
            <InputInfoContainer dark={dark}>
                <span>{desc}</span>
                {
                    area ? (
                        <InArea dark={dark} />
                    ) : (
                        <Input dark={dark} />
                    )
                }
            </InputInfoContainer>
        )
    }
}   

const InputInfoContainer = styled.div`
    width: 100%;
    color: #FFF;
    display: grid;
    align-items: center;
    grid-template-columns: 20% 80%;
    margin-bottom: 1.1em;

    ${({ dark }) => {
        if (dark) {
            return `
                color: #000;
            `
        }
    }}
`;

const Input = styled.input`
    color: black;
    background: #FFFF;
    height: 2.5em;
    font-weight: 500;
    border-radius: .3em;
    font-size: 1em;

    ${({ dark }) => {
        if (dark) {
            return `
                border: 1px solid #DEDFDF;
            `;
        }
    }}
`;

const InArea = styled.textarea`
    height: 5.2em;
    border-radius: .3em;
    padding-top: 1em;
    padding-left: 1em;
    font-size: 1.3em;

    ${({ dark }) => {
        if (dark) {
            return `
                border: 1px solid #DEDFDF;
            `;
        }
    }}
`;