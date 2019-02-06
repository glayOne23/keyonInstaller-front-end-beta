const electron = require('electron');
const { exec } = require('child_process');

//bug: entah kenapa pake addEventListener error, pake pake onclick
// let g_xampp =  document.getElementById('g_xampp');
// g_xampp.addEventListener('click', update('./coba.sh'));

function update(isi){
  const item = isi;
  //argumen 1 itu nama, argument 2 itu barangnya
  exec(item, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

}
