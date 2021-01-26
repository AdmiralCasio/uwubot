let botConfig = require('../config.json');
let serverConfig = require('../server_config');

let commandHandlers = {};

commandHandlers.clean = function (message, args){
        console.log(message);
        message.channel.send("test");
};