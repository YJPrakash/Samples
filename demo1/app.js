// import {
//     app,
//     BrowserWindow
// } from 'electron';
// import {
//     url
// } from "url";
// import {
//     path
// } from "path";
const {
    app,
    BrowserWindow
} = require('electron');
const url = require('url');
const path = require('path');

let win;

let createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
}

app.on('ready', createWindow);