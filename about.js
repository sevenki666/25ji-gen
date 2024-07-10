var aboutModal = document.getElementById('aboutModal');

var aboutBtn = document.getElementById("aboutBtn");

// get <span> that closes the modal
var span = document.getElementsByClassName("close")[0];

// click to open.
aboutBtn.onclick = function() {
    aboutModal.style.display = "block";
}

// click <span> (x) to close
span.onclick = function() {
    aboutModal.style.display = "none";
}

// Close when the user click other places.
window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
}