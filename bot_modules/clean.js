let botConfig = require('../config.json');
let serverConfig = require('../server_config');

let help = null;

let commandHandlers = {}

commandHandlers.clean = function (message, args){
    if (message == "clean")
    {
        message.channel.send("test");
    }
}