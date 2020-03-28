document.addEventListener("dragstart", (event) => {
    var y = event.target.id
    event.dataTransfer.setData("text", y);
    event.datatransfer.effectAllowed = "copy";


});

document.addEventListener("dragover", (event) => {
    event.preventDefault();
    event.datatransfer.dropEffect = "copy";

});

document.addEventListener("drop", (event) => {
    event.preventDefault();
    if (event.target.className === "droptarget") {
        var data = event.dataTransfer.getData("Text");
        event.dataTransfer.dropEffect = "copy";
        event.target.appendChild(document.getElementById(data));
    }
});



window.addEventListener("keypress", makeMore);

function makeMore(event) {
    if (event.key === "c") {
        var div = document.createElement("div")
        div.setAttribute("class", "droptarget")
        document.body.appendChild(div)
    }
}
