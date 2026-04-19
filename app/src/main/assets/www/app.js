function toggleMenu(){
document.getElementById("menu").classList.toggle("hide");
}

function closeMenu(){
document.getElementById("menu").classList.add("hide");
}

function aboutApp(){
showStatus("Share App QR Style");
}

function runTask(){
showStatus("Working");
}

function showStatus(t){
let s=document.getElementById("status");
s.classList.remove("hide");
s.innerText=t;
}
