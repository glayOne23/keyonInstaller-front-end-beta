
const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const { exec } = require('child_process');

//window2nya
let win = null;

//fungsi ketika aplikasi pertama dijalankan
function boot(){
  //settting browser window
  win = new BrowserWindow({
    width:1050,
    height: 650
  })

  //path to html
  win.loadURL(`file://${__dirname}/utama.html`)

  //event on close
  win.on("closed",() =>{
    console.log("goodbye");
  })

  //disappering menu
  Menu.setApplicationMenu(null)

  //menutup window lain jika window utama ditutup
  win.on('closed',() => {
    app.quit();
  })
}

//main and renderer
app.on('ready', boot)
