import useCurrentDate from "./useCurrentDate";
import styled from "styled-components";

const StyledDate = styled.p`
    text-align: end;
    padding-right: 20px;
    font-size: 10px;
    font-family: 'Noto Sans Mono', monospace;
`;

const DateComponent = () => {
    const currentTime = useCurrentDate();

    return (
        <StyledDate>
            Dzisiaj jest {currentTime.toLocaleString(
                "pl", {
                weekday: "long", day: "numeric", month: "long",
                hour: "numeric", minute: "numeric", second: "numeric"
            }
            )}
        </StyledDate>
    );
};

export default DateComponent;