const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAACTH09XTOYBAO9xohlwvLxzLA7nZAz140bkRoFqPNsSbAwtZBVJHvdgAvkELeIzxRbDmm0nasyvw99mOF3irs110qlDmeJc001MtpacBpqQZB96HpFIUeZCHZCiPK0V7H5dI9VVRFyZCOBgAt4PpdZA7koGfDMzLPIqWxAPT4ZAxtWedLyiVHDA',
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
