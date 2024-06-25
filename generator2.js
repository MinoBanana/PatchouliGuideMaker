document.getElementById('generate').addEventListener('click', function() {
    // Get values from input fields
    const name = document.getElementById('exampleInputEmail1').value;
    const description = document.getElementById('desc').value;
    const icon = document.getElementById('icon').value;

    const jsonTemplate = {
        "name": name || "Test Category",
        "description": description || "This is a test category for testing!",
        "icon": icon || "minecraft:writable_book"
    };

    // Display the JSON object as a string in the <pre> tag
    document.getElementById('output').textContent = JSON.stringify(jsonTemplate, null, 2);
});

