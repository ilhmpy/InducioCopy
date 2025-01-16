import styled from "styled-components"

export const InputInfo = ({ desc, area, children, dark, placeholder, alone, style }) => {
    if (children) {
        return (
            <InputInfoContainer>
                <span></span>
                {children}
            </InputInfoContainer>
        )
    } else {
        return (
            <InputInfoContainer dark={dark} alone={alone}>
                {alone ? "" : (
                    <span>{desc}</span>
                )}
                {
                    area ? (
                        <InArea style={style} focus dark={dark} placeholder={placeholder ? placeholder : ""} alone={alone} />
                    ) : (
                        <Input style={style} focus dark={dark} placeholder={placeholder ? placeholder : ""} alone={alone} />
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
    margin-bottom: 1.1em;

    ${({ alone }) => alone ? "" : `
        grid-template-columns: 20% 80%;
    `}

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
    border-radius: .5em;
    font-size: 1em;

    ${({ dark }) => {
        if (dark) {
            return `
                border: 1px solid #DEDFDF;
            `;
        }
    }}

    ${({ alone }) => {
        if (alone) {
            return `
                width: 100%;
            `
        }
    }}

    &:focus {
        border: 5px solid #DBDCDE;
    }
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

    ${({ alone }) => {
        if (alone) {
            return `
                width: 100%;
            `
        }
    }}
    
    &:focus {
            border: 5px solid #DBDCDE;
    }
`;