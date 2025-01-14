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


// Radix functions


function volumeUp() {
    const payload = {
        command: {
            "@class": "com.viso.entities.commands.CommandRemoteExec",
            remoteExecItem: {
                "@class": "com.viso.entities.RemoteExecItem",
                command: "!internal",
                args: ["input_keyevent", "10", "0", "24"], // Volume Up KeyEvent
                authority: "AUTHORITY_SYSTEM",
                waitForExit: true,
                collectOutput: true,
                repositoryItemName: "Volume Up"
            }
        }
    };

    radix.doCommand(JSON.stringify(payload));
}


function volumeDown() {
    const payload = {
        command: {
            "@class": "com.viso.entities.commands.CommandRemoteExec",
            remoteExecItem: {
                "@class": "com.viso.entities.RemoteExecItem",
                command: "!internal",
                args: ["input_keyevent", "10", "0", "25"], // Volume Down KeyEvent
                authority: "AUTHORITY_SYSTEM",
                waitForExit: true,
                collectOutput: true,
                repositoryItemName: "Volume Down"
            }
        }
    };

    radix.doCommand(JSON.stringify(payload));
}


function clearApplicationData(appPackage) {
    const payload = {
        command: {
            "@class": "com.viso.entities.commands.CommandRemoteExec",
            remoteExecItem: {
                "@class": "com.viso.entities.RemoteExecItem",
                command: "sh",
                args: ["-c", `pm clear ${appPackage} ;`], // Clear App Data
                authority: "AUTHORITY_SYSTEM",
                waitForExit: true,
                collectOutput: true,
                repositoryItemName: `Clear Data for ${appPackage}`,
                props: {
                    isampm: true,
                    ampmCommand: "pmclear",
                    components: [appPackage]
                }
            }
        }
    };

    radix.doCommand(JSON.stringify(payload));
}

document.addEventListener("DOMContentLoaded", () => {
    const gridLinks = document.querySelectorAll(".button-grid a");

    gridLinks.forEach(link => {
        // Prevent long-press actions like context menu or dragging URLs
        link.addEventListener("contextmenu", event => event.preventDefault()); // Disable context menu
        link.addEventListener("mousedown", event => event.preventDefault()); // Suppress long-press
        link.addEventListener("touchstart", event => event.preventDefault()); // Disable touch gestures
    });
});
