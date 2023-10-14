// Add your code here
function submitData(usersName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: usersName,
            email: userEmail,
        }),
    };

    // Write POST request to http://localhost:3000/users using fetch()
    // Includes destination URL
    // Headers set to 'application/json'
    // Body with the name and email passed in as arguments to submitData
    return fetch("http://localhost:3000/users", configurationObject)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data.id);
            const li = document.createElement("li");
            li.textContent = data.id;
            document.querySelector("body").appendChild(li);
        })
        .catch(error => {
            alert('Unauthorized Access');
            const li = document.createElement("li");
            li.textContent = 'Unauthorized Access'; 
            document.querySelector("body").appendChild(li);
        });
}

submitData("bob", "bob@bob.com");
