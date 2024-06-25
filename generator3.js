document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('add-page').addEventListener('click', function() {
        const pagesContainer = document.getElementById('pages-container');
        const pageDiv = document.createElement('div');
        pageDiv.className = 'form-group';
        pageDiv.innerHTML = `
            <label><b>Page Text</b></label>
            <textarea class="form-control page-text" rows="4" placeholder="This is a test entry, but it should show up!"></textarea>
        `;
        pagesContainer.appendChild(pageDiv);
    });

    document.getElementById('generate').addEventListener('click', function() {

        const name = document.getElementById('name').value;
        const icon = document.getElementById('icon').value;
        const category = document.getElementById('category').value;
        const texts = Array.from(document.getElementsByClassName('page-text')).map(textarea => textarea.value);


        const pages = texts.map(text => ({
            "type": "patchouli:text",
            "text": text || "This is a test entry, but it should show up!"
        }));

        const jsonTemplate = {
            "name": name || "Test Entry",
            "icon": icon || "minecraft:writable_book",
            "category": category || "your_book_namespace_change_me:test_category",
            "pages": pages
        };


        document.getElementById('output').textContent = JSON.stringify(jsonTemplate, null, 2);
    });

    document.getElementById('copy').addEventListener('click', function() {
        const output = document.getElementById('output').textContent;
        navigator.clipboard.writeText(output).then(function() {
            alert('Copied to clipboard!');
        }, function(err) {
            alert('Failed to copy to clipboard: ' + err);
        });
    });
});
