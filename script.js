// Function to fetch builds from GitHub API
function getBuilds() {
    fetch('/builds')
        .then(response => response.json())
        .then(data => {
            const builds = data.map(build => `
                <li>
                    <h2>${build.name}</h2>
                    <p>${build.description}</p>
                </li>
            `);
            document.getElementById('builds').innerHTML += builds.join('');
        });
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Submit the data using fetch API or a backend server
    fetch('/submit-build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
    });
}

document.getElementById('new-build-form').addEventListener('submit', handleSubmit);

// Fetch existing builds on page load
getBuilds();
