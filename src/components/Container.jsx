import styled from "styled-components"

export const Container = ({ children, flex, flexCenter }) => {
    return (
        <ContentContainer flex={flex} flexCenter={flexCenter}>
            {children}
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    width: 80%;
    height: inherit;
    margin: 0 auto;
    max-width: 1320px;
    position: relative;

    ${({ flex }) => flex ? `
        display: flex;
        justify-content: space-between;
    ` : ``}
    
    ${({ flexCenter }) => flexCenter ? `justify-content: center; align-items: center;` : ``}
`;