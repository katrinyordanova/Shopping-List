const electron = require('electron');
const { app, BrowserWindow } = electron;
const url = require('url');
const path = require('path');

module.exports = function addItem() {
    let addItemWindow;

    addItemWindow = new BrowserWindow({
        height: 250,
        width: 350,
        title: 'Add Item',
        webPreferences: {
            nodeIntegration: true
        }
    });

    addItemWindow.loadURL(url.format({
        pathname: path.join(__dirname, './html-files/addItemWindow.html'),
        file: 'file:',
        slashes: true
    }));
}

    

