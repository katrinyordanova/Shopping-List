const electron = require('electron');
const { BrowserWindow } = electron;

module.exports = function addItem() {
    let addItemWindow;

    addItemWindow = new BrowserWindow({
        width: 300,
        height: 200,
        title: 'Add Item',
        webPreferences: {
            nodeIntegration: true
        }
    });    
}