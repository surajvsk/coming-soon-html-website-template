// Select the elements where the countdown values will be updated
const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

// Set the target launch date (e.g., January 10, 2025)
// Get the current date and time
const currentDate = new Date();

// Add 10 days to the current date
const targetDate = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000).getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime(); // Get current time in milliseconds
    const timeLeft = targetDate - now; // Calculate the remaining time

    if (timeLeft > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the HTML elements with calculated values
        daysElement.textContent = days < 10 ? `0${days}` : days;
        hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    } else {
        // Countdown complete
        document.getElementById('countdown').innerHTML = '<h2>We Have Launched!</h2>';
    }
}

// Call the updateCountdown function every second
setInterval(updateCountdown, 1000);

// Initial call to set the values immediately when the page loads
updateCountdown();
