import React, { useState, useEffect } from "react";

function LaunchCountdown() {
    const [countdown, setCountdown] = useState(null);

    // Set the launch date for August 1st, 2023, at 10:00 AM UTC
    const launchDate = new Date("2023-08-01T10:00:00Z").getTime();

    const calculateCountdown = () => {
        const now = new Date().getTime();
        const timeRemaining = launchDate - now;

        if (timeRemaining <= 0) {
            setCountdown("Sold out!");
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setCountdown(
                <div style={{ fontSize: "30px" }}>
                    {days} : {hours} : {minutes} : <span style={{ color: "red" }}>{seconds}</span>
                </div>
            );
        }
    };

    useEffect(() => {
        calculateCountdown();

        const intervalId = setInterval(calculateCountdown, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div id="bid-counter">
            <p>{countdown}</p>
        </div>
    );
}

export default LaunchCountdown;
