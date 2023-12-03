function reloadPageAndPrompt() {
    var newText = prompt("Ketik Namamu :");
    if (newText !== null && newText !== "") {
        document.getElementById("judul").innerText = "Selamat Datang di BOOTCAMP PERMIKOMNAS, " + newText + "!";
    }
}
var isTextMode = false;
function toggleContent() {
    var imageElement = document.querySelector('.image');
    if (imageElement) {
        if (isTextMode) {
            imageElement.src = 'gambar.png';
            imageElement.alt = 'Image';
            imageElement.style.width = '50%';
            var loremIpsumText = document.querySelector('.lorem-ipsum-text');
            if (loremIpsumText) {
                loremIpsumText.remove();
            }
            document.getElementById('toggleButton').innerText = 'Ubah Teks';
        } else {
            imageElement.src = '';
            imageElement.alt = 'Lorem Ipsum';
            imageElement.style.width = 'auto';
            var justifiedLoremIpsumText = `
                <p class="lorem-ipsum-text" style="text-align: justify;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                    Nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    Sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            `;
            imageElement.insertAdjacentHTML('afterend', justifiedLoremIpsumText);
            document.getElementById('toggleButton').innerText = 'Ubah Gambar';
        }
        isTextMode = !isTextMode;
    }
}
