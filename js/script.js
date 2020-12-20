function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");


    if(dots.style.display === "none") {
    dots.style.display="inline";
    btn.innerHTML="Подробное"
    more.style.display="none"
    } else {
        dots.style.display="none";
    btn.innerHTML="Скрыть";
    more.style.display="inline";
    }

}

 function show_hide() {
    var click = document.getElementById("bari");
    if(click.style.display==="none"){
        click.style.display = "block";
    }else {
        click.style.display="none" ;   
    }
}
function show_hide1() {
    var click = document.getElementById("bari1");
    if(click.style.display==="none"){
        click.style.display = "block";
    }else {
        click.style.display="none" ;   
    }
}
function show_hide2() {
    var click = document.getElementById("bari2");
    if(click.style.display==="none"){
        click.style.display = "block";
    }else {
        click.style.display="none" ;   
    }
}