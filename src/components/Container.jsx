import styled from "styled-components"

export const Container = ({ children }) => {
    return (
        <ContentContainer>
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
`;