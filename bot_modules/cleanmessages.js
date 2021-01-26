let help = "**Clean**\n";
let commandHandlers = {};

commandHandlers.clean = function (message, args) {
        message.channel.fetchMessages().then(messages => {
                const botMessages = messages.filter(msg => msg.author.bot);
                message.channel.bulkDelete(botMessages);
            });
};

commandHandlers.wash = function (message, args) {
        message.channel.fetchMessages().then(messages => {
                const playerMessages = messages.filter(msg => msg.author.id);
                message.channel.bulkDelete(playerMessages);
            });
};

module.exports = {
        "help": help,
        "commandHandlers": commandHandlers
      };