var clicks = 0;
var clicksEl = document.getElementById("clicks");
var clicko = document.getElementById("clicker");


clicko.onclick = function() {

    clicks += 1;
    clicksEl.innerHTML = clicks;
       

};

