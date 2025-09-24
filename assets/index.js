var index = 1;

var all = [
    document.getElementById("absences"),
    document.getElementById("zeus"),
    document.getElementById("pegasus")
]
var lastSelec = "";
function nique(name) {
    elem = document.getElementById(name)
    console.log(elem);
    elem.style.zIndex = index;
    all.forEach(elem => {
        elem.style.scale = "1";
    })
    if (name != lastSelec) {
        elem.style.scale = "1.2";
        lastSelec = name;
    } else {
        lastSelec = "";
    }
    
    index++;

}