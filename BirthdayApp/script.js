// Set the target date to November 11th, 2025
const targetDate = new Date(2025, 10, 11); // Month is 0-based, so 10 = November

// Get DOM elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const birthdayMessage = document.getElementById('birthday-message');

// Function to update the countdown
function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    // If the birthday has passed, show a message
    if (difference < 0) {
        birthdayMessage.textContent = "🎉 HAPPY BIRTHDAY BRIANNA! 🎉";
        birthdayMessage.style.opacity = '1';
        return;
    }

    // Calculate time units
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the display with animations
    updateElement(daysElement, days);
    updateElement(hoursElement, hours);
    updateElement(minutesElement, minutes);
    updateElement(secondsElement, seconds);

    // Show special message when close to birthday
    if (days <= 7) {
        birthdayMessage.textContent = "🎂 Getting closer to your special day! 🎂";
        birthdayMessage.style.opacity = '1';
    }
}

// Function to update individual elements with animation
function updateElement(element, value) {
    const currentValue = parseInt(element.textContent);
    if (currentValue !== value) {
        element.style.transform = 'scale(1.2)';
        element.textContent = value.toString().padStart(2, '0');
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call 