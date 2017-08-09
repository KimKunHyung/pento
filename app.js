const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAAPGp72nqMIBAPNlrk48XNbzmelpfmXn4C0bPbfPcse3HeD8u1MOXKUlvzfIp9i22ZCZBPSYkWNTy6ZBEnK5O0LvZA0Ev41f0kT0WJACdP4bFGXQmEUGpJfw7xApymhQdrdC158nK6nXagaeZCDRXrN6WohMrM17fvuURGZBx7XQZDZD',
  verify: 'helloworld',
  app_secret: 'b3f439dd050d4ca00ab72e490b4021b4'
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
