const { app } = require("electron");

module.exports = mainMenu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add Item',
                accelerator: 'CmdIOrCtrl+Ctrl+I',
                click() { addItem(); }
            },
            {
                label: 'Remove Item',
                accelerator: 'CmdROrCtrl+Ctrl+R',
                click() { removeItem(); }
            },
            {
                label: 'Quit',
                accelerator: 'CmdQOrCtrl+Ctrl+Q',
                click() { app.quit(); }
            }
        ]
    }
]