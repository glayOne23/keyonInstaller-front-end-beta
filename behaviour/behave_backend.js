let xampp = document.getElementById("xampp");
let nodejs = document.getElementById("nodejs");
let backend = document.getElementById("backend");

let a1="XAMPP";
let a2="Xampp adalah aplikasi untuk membantu side server kamu";
let b1="Node Js";
let b2="Node js adalah aplikasi untuk membantu side server kamu";
let e1="Back End";
let e2="Disini tersedia 2 software Back end yang memiliki fitur terbaik"


masuk(xampp,a1,a2);
masuk(nodejs,b1,b2);

//funngsi in
function masuk(a,b,c){
    a.addEventListener("mouseover", function(){
    document.getElementById("utama").innerHTML=b;
    document.getElementById("isi").innerHTML=c;
  });
}
//funngsi out
// function defaults(a){
//   a.addEventListener("mouseout", function(){
//     document.getElementById("utama").innerHTML="KeyOn Installer";
//     document.getElementById("isi").innerHTML="lore ipsum magna toangfsd sdfdslkf;jdsf sdfdfld;sfj ;dfjd;fjd sdfjd;fjdf dlsjfdsf;jdf ;dfjdf;djfd;a";
//   });
// }
