/* express, body-parser 설정 생략 */
var Bot = require('messenger-bot');
var bot = new Bot({
    token: 'EAACTH09XTOYBACZC6bZAlRAfZBnkLenNPk2n3pBbhWlOUZA2RgMX0ZBbg30PKdzsM3nOQvLN7k9njZBtF1gYIIf3jvttXsZCuRxefMCZCjbZAwjs29ZBodw9fwtO7ZBeZBMTLsWotZB0gEu1dYIjlU13204NuiAge08nDGVACtRtpDw9ZCfIOzDvzZCrKZCH', // 페이지 토큰
    verify: 'helloworld', // 설정한 확인 토큰
    app_secret: '823ea6ec6608cd174ad961a9e11d2218' // 앱 시크릿 토큰
});

bot.on('error', function(err) {
    console.log(err.message);
});

bot.on('message', function(payload, reply) {
    var text = payload.message.text;
    console.log(text);
    bot.getProfile(payload.sender.id, function(err, profile) {
        if (err) throw err;

        reply({ text: text }, function(err) {
            if (err) throw err;
        });
    });
});
// 페이스북 메세지는 모두 POST 요청으로 이를 다시 messenger-bot에게 패스
app.post('/webhook', function(req, res) {
    bot._handleMessage(req.body);
    res.status(200).jsonp({
        message: 'ok'
    });
});
