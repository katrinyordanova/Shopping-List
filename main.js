const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
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
    const mainMenu = Menu.buildFromTemplate(mainWindowMenu);
    Menu.setApplicationMenu(mainMenu);
});

process.env.NODE_ENV !== 'production' ? mainWindowMenu.push(devTools) : null;