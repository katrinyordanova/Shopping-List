const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain } = electron;
const path = require('path');
const url = require('url');
const mainWindowMenu = require('./mainWindowMenu');
const devTools = require('./developer-tools');

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({
        title: 'Shopping List',
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './html-files/mainWindow.html'),
        file: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', function(){ app.quit(); });
    const mainMenu = Menu.buildFromTemplate(mainWindowMenu);
    Menu.setApplicationMenu(mainMenu);
});

ipcMain.on('newItem', function(e, newItem){
    mainWindow.webContents.send('newItem', newItem);
});

process.env.NODE_ENV !== 'production' ? mainWindowMenu.push(devTools) : null;