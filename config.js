const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94759504894")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wowmrnikiya:<nNpsxk6wZeSTC5kn>@nikiya.1lnhzxq.mongodb.net"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/yasiyaofc1/FORZEN-MD'
global.location = 'Ambalangoda SL'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94759504894'
global.devs = '94759504894';
global.website = 'https://github.com/yasiyaofc1/FORZEN-MD' //wa.me/+94760018802
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0b5a7839e8ee21874921e.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'ㅤＶＩＰｘＮＩＫＩㅤヤ' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'ㅤＶＩＰｘＮＩＫＩㅤヤ' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '112' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hi There. ㅤＶＩＰｘＮＩＫＩㅤヤ is online now 😇❤️‍🩹.*
*Thank you for using ㅤＶＩＰｘＮＩＫＩㅤヤ  🤍 bot.*

*Owner* : ꪜ𝓲ꫝꪖꪀᧁꪖ ꫝꪖꪀ𝘴ꪖꪀꪖ 😇😇

●▬▬▬▬๑ᴡᴇʟᴄᴏᴍᴇ๑▬▬▬▬● 

```✅🌐 මෙය ස්වයංක්‍රියව පලනය වන සමූහයකි.

⬇️  මෙය හරහා ඔබට අවශ්‍ය ඕනෑම දෙයක් පහසුවෙන් හා ඉක්මනින් බාගත හැක. ☑️

✅🌐 මෙම කණ්ඩායම මගින් සිදු කර ගත හැකි කාර්යන්👇

🔥 Youtube තුල ඇති සිංදු බාගත කිරීම.

🔥 Youtube ,Tik Tok,Facebook ,instagram video බාගත් කිරීම

🔥 playstore තුල ඇති app බාගත කිරීම

🔥 විවිධ Front design  වලින් වාක්‍ය ගැනීම

🔥 ඕනෑම පින්තූරයක්,ස්ටිකරයක් බවට පරිවර්තනය කිරීම හා ඔනෑම ස්ටිකරයක් ,පින්තූරයක් බවට පරිවර්තනය කිරීම

🔥 ඔබට අවශ්‍ය ඕනෑම ආකාරයක logo සෑදීම

🔥 ඕනෑම පින්තූරයක් පසුබිම ඉවත් කිරීම.

🔥 GROUP RULS

🎈No sex
🎈No BAD WORLD 
🎈No BOOM
🎈No group link 

🔥 මේවා දැම්මෙන් ඔබව auto remove වෙ

✅🌐 බොට් ක්‍රියාකාරීද බැලීමට .alive ලෙස පණිවිඩයක් සමූහයට යොමුකරන්න.

✅🌐 බොට්ගෙ විධාන ලැයිස්තුව ලබා ගැනීමට .menu ලෙස පණිවිඩයක් කණ්ඩායමට යොමුකරන්න.

HAPPY NEW YEAR 20²4 🎊
  ✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧   ✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'ㅤＶＩＰｘＮＩＫＩㅤヤ',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
