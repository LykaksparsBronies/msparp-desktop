const electron = require('electron');
const {app, BrowserWindow} = electron
console.log("Loading..");

app.on('ready', function() {
  console.log("MSPARP IS READY!");
  console.log("OPEN WINDOW..");
  let mainWindow = new BrowserWindow({
	  width: 800,
      height: 600,
      icon: __dirname + '/icon.png'
  });
  mainWindow.loadURL('https://msparp.com');
});