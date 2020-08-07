module.exports = developerTools =
    {
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Dev Tools',
                accelerator: 'CmdDOrCtrl+Ctrl+D',
                click(item, focusedWindow) { focusedWindow.toggleDevTools(); }
            },
            {
                role: 'reload',
                accelerator: 'CmdROrCtrl+Ctrl+R'
            }
        ]
    }