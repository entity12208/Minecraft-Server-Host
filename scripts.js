document.getElementById('serverForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const serverName = document.getElementById('serverName').value;
    const serverRAM = document.getElementById('serverRAM').value;
    const serverType = document.getElementById('serverType').value;
    const serverMods = document.getElementById('serverMods').value;

    fetch('https://github.com/user/repo/actions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ serverName, serverRAM, serverType, serverMods })
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = data.message;
    });
});
