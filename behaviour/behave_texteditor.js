// let xampp = document.getElementById("xampp");
let atom = document.getElementById("atom");
let vscode = document.getElementById("vscode");
let sublime = document.getElementById("sublime");
let text_editor = document.getElementById("text_editor");

let a1="XAMPP";
let a2="Xampp adalah aplikasi untuk membantu side server kamu";
let b1="Atom";
let b2="Text editor besutan menggunakan electron yang sangat memudahkan"
let c1="Visual Studio Code";
let c2="Text editor besutan  Microsoft menggunakan electron yang sangat memudahkan"
let d1="Sublime";
let d2="Text editor legendaris yang sangat ringan cocok untuk"
let e1="Text Editor";
let e2="Disini tersedia 3 software test editor yang memiliki fitur terbaik"

masuk(vscode, c1, c2);
masuk(atom, b1, b2);
masuk(sublime, d1, d2);
masuk(text_editor, e1, e2);

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
