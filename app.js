const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: '<여기에 아까 저장해둔 Page access token을 넣는다>',
  verify: 'helloworld',
  app_secret: '<아까 저장해둔 App secret token을 넣는다>'
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