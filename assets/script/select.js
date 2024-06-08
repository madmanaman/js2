document.getElementById('boton').addEventListener('click', function() {
    
    let valorSelect1 = document.querySelector("#select1").value;
    let valorSelect2 = document.querySelector("#select2").value;
    let valorSelect3 = document.querySelector("#select3").value;
    let valores = valorSelect1 + valorSelect2 + valorSelect3;
    if (valores === "911"){
        document.querySelector("h2").innerHTML= "password 1 correcto"
    }  else if (valores === "714"){
        document.querySelector("h2").innerHTML= "password 2 correcto"
    } else {
        document.querySelector("h2").innerHTML= "password incorrecto"
}

})