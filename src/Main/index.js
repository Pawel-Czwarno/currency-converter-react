import styled from "styled-components";

const StyledMain = styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Main = ({ children }) => (
    <StyledMain>
        {children}
    </StyledMain>
);

export default Main;