const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const url = require('url');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        title: 'Shopping List',
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './html-files/mainWindow'),
        file: 'file:',
        slashes: true
    }));
});