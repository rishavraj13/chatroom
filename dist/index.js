"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("user connected");
    socket.on("message", (message) => {
        console.log("message Received " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const x = allSockets[i];
            if (x) {
                x.send(message.toString() + ": sent from the server");
            }
        }
    });
});
//# sourceMappingURL=index.js.map