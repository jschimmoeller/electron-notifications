var {app, BrowserWindow, autoUpdater , ipcMain, dialog, shell, Menu  } = require('electron');
var os = require('os');
var log = require('electron-log');



var platform = os.platform() + '_' + os.arch();
var win = null;

app.on('ready', function(){
  console.log = function(){
    log.info(arguments);
  }
  console.log('rrrrr')

  // different settings depending on OS windows is different the mac
  win = new BrowserWindow({
    width:  800,
    height: 600,
    title: "test",
    frame: true,
    resizable: true,
    maximizable: false,
    minimizable: true,
    fullscreen: false,
    fullscreenable: false,
    transparent: false,
    'webPreferences': {
      'webSecurity': false
    }
  });
  win.setMenu(null);
  win.openDevTools();

  win.loadURL('file://' + __dirname + '/foo.html');
});
