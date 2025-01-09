function toggleButtons() {
    const controls = document.querySelector('.device-controls');
    controls.classList.toggle('show');
}

// Function to update date and time
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    datetimeElement.textContent = now.toLocaleDateString(undefined, options);
}

// Update date/time every minute
setInterval(updateDateTime, 60000);
updateDateTime(); // Initial call to set the date/time immediately
