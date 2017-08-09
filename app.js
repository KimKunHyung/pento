const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAACTH09XTOYBAIKV7YN1K414JSDdGd8ZB7FRLsBRDP6EaG4UCQ0rWZCBs0h5c93cYeZACkXOcrG2wVfCEZAztz4MiwkHn1P49IdghzhCIO5BwOl4X7YWOdtuFHz5hUzHiKAC5eZBRez6FK6xT0uCzZBOxInaNl2qx57ZCinAcNv4AZDZD',
  verify: 'helloworld',
  app_secret: '823ea6ec6608cd174ad961a9e11d2218'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT)
console.log('서버 뜸')
