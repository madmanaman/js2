function cambiarBorde() {
    let image = document.getElementById("imagen1");
    if (image.style.border === "none") {
        image.style.border = "2px solid red"; 
    } else {
        image.style.border = "none"; 
    }
}