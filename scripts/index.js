const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1151028986:AAHAaGfkQoIRS-c3fm93vDlOzSnfYd_6YBM'

const bot = new TelegramBot(TOKEN, {
    polling: true
})

bot.onText(/\/contact/, msg => {
    bot.sendContact(msg.chat.id, '89891234567', 'Илья', {
        last_name: 'Иванович'
    })
}) 