const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: '<���⿡ �Ʊ� �����ص� Page access token�� �ִ´�>',
  verify: 'helloworld',
  app_secret: '<�Ʊ� �����ص� App secret token�� �ִ´�>'
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
console.log('���� ��')