
function toggleCardText(textID, buttonID) {
    var x = document.getElementById(textID);
    var y = document.getElementById(buttonID);
    if (x.style.display === 'none') {
        x.style.display = "block";
        y.innerHTML = "See Less"
    } else{
        x.style.display = "none";
        y.innerHTML = "See More"
    }
}
