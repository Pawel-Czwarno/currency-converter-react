import useCurrentDate from "./useCurrentDate";
import "./style.css";

const DateComponent = () => {
    const currentTime = useCurrentDate();
    
    return (
        <p className="dateComponent">
            Dzisiaj jest {currentTime.toLocaleString(
                "pl", {
                    weekday: "long", day: "numeric", month: "long",
                hour: "numeric", minute: "numeric", second: "numeric"
            }
            )}
        </p>
    );
};

export default DateComponent;