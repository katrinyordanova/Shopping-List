const electron = require('electron');
const { BrowserWindow } = electron;
const path = require('path');
const url = require('url');

module.exports = function addItem() {
    let addItemWindow;

    addItemWindow = new BrowserWindow({
        width: 300,
        height: 250,
        title: 'Add Item',
        webPreferences: {
            nodeIntegration: true
        }
    });

    addItemWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../html-files/addItemWindow.html'),
        file: 'file:',
        slashes: true
    }));
}
