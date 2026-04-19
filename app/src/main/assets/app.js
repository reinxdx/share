const API="https://vern-rest-api.vercel.app/api/share";

function toggleMenu(){
document.getElementById("menu").classList.toggle("hide");
}

function closeMenu(){
document.getElementById("menu").classList.add("hide");
}

function saveCookie(){
const cookie=document.getElementById("cookie").value;
localStorage.setItem("cookie",cookie);
alert("Cookie saved!");
}

function aboutApp(){
alert("FB SHAREX Tool\nGitHub Build APK Ready");
}

window.onload=function(){
const saved=localStorage.getItem("cookie");
if(saved){
document.getElementById("cookie").value=saved;
}
};

async function runShare(){

const cookie=document.getElementById("cookie").value.trim();
const link=document.getElementById("link").value.trim();
const limit=document.getElementById("limit").value.trim();

const status=document.getElementById("status");
const logs=document.getElementById("logs");

status.classList.remove("hide");
logs.classList.remove("hide");

if(!cookie||!link||!limit){
status.innerText="Fill all fields!";
return;
}

status.innerText="Starting share...";
logs.innerText="";

try{

const url=
API+
"?cookie="+encodeURIComponent(cookie)+
"&link="+encodeURIComponent(link)+
"&limit="+encodeURIComponent(limit);

logs.innerText+="Sending request...\n";

const res=await fetch(url);
const data=await res.json();

status.innerText="Done!";
logs.innerText+=JSON.stringify(data,null,2);

}catch(err){
status.innerText="Error!";
logs.innerText+=err.message;
}

}

