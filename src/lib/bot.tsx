const { Telegraf } = require('telegraf')
const { HttpsProxyAgent } = require('https-proxy-agent')

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: {
    agent: new HttpsProxyAgent({
      host: process.env.PROXY_HOST,
      port: process.env.PROXY_PORT,
    }),
  },
})

bot.telegram.setChatMenuButton({
  menu_button: {
    type: 'web_app',
    text: 'Test App',
    web_app: {
      url: 'https://test.jin337.top',
    },
  },
})

bot.telegram.setMyCommands([
  { command: 'start', description: 'start' },
  { command: 'testapp', description: 'testapp' },
])

bot.command('start', (ctx) => ctx.reply('Welcome!🥳🥳🥳'))

bot.command('testapp', (ctx) => {
  ctx.reply(
    `Let's get started 🥳
Please tap the button below to to test the app!`,
    {
      reply_markup: {
        inline_keyboard: [[{ text: 'test app', web_app: { url: 'https://test.jin337.top' } }]],
      },
    }
  )
})

bot.launch()
