var clicks = 0;
var clicksEl = document.getElementById("clicks");
function onClick() {
    clicks += 1;
    clicksEl.innerHTML = clicks;
    document.getElementById("clicker").onclick = onClick

};
