import { useEffect, useState } from "react";
import "./style.css";

const DateComponent = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

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