document.getElementById('generate').addEventListener('click', function() {
    // Get values from input fields
    const name = document.getElementById('exampleInputEmail1').value;
    const landing_text = document.getElementById('landing').value;
    const version = parseInt(document.getElementById('version').value);
    const creative_tab = document.getElementById('tab').value;

    // Create the JSON object
    const jsonTemplate = {
        "name": name || "My First Book!",
        "landing_text": landing_text || "Welcome to Patchouli",
        "version": version || 1,
        "creative_tab": creative_tab || "minecraft:tools_and_utilities",
        "use_resource_pack": true
    };

    // Display the JSON object as a string in the <pre> tag
    document.getElementById('output').textContent = JSON.stringify(jsonTemplate, null, 2);
});

