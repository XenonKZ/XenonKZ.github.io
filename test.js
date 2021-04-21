document.getElementById("demo").innerHTML = "My First JavaScript";

let button = document.getElementById("button");

function changeImage(){
    let pokeball = document.getElementById("pokeball");
    pokeball.src = "https://i.pinimg.com/originals/46/7e/db/467edb818bc862ef7f54dece5df4d762.png";
}
button.addEventListener("click", changeImage);