function toggleButtons() {
    const controls = document.querySelector('.device-controls');
    controls.classList.toggle('show');
}

// Function to update date and time
function updateDateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();

    // Format time
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    timeElement.textContent = now.toLocaleTimeString(undefined, timeOptions);

    // Format date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call
