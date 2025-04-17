// Countdown timer function
function startCountdown(targetDate, elementId) {
    const countdownElement = document.getElementById(elementId);
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Set target dates for countdowns
const academicTargetDate = new Date("2024-01-01").getTime(); // Example date
const coCurricularTargetDate = new Date("2024-02-01").getTime(); // Example date
const hemTargetDate = new Date("2024-03-01").getTime(); // Example date

// Start countdowns
startCountdown(academicTargetDate, "academic-countdown");
startCountdown(coCurricularTargetDate, "co-curricular-countdown");
startCountdown(hemTargetDate, "hem-countdown");
