import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['18494469075', 'Frankenstein', true], 
['18094480441', '𝙊𝙬𝙣𝙚𝙧 (1) 💻', true],  
['18096279795', '𝙊𝙬𝙣𝙚𝙧 (2) 💻', true],  
['584129457884', '𝘾𝙪𝙨𝙩𝙤𝙢𝙚𝙧 𝙎𝙪𝙥𝙥𝙤𝙧𝙩 🥏', true],
['50576390682', '𝙊𝙬𝙣𝙚𝙧r', true] 
] //Numeros de owner 

global.mods = ['18094480441'] 
global.prems = ['50489079501', '5219631769130', '18094480441']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'Frankenstein┃ᴮᴼᵀ' 
global.author = '@fran' 
global.fgig = '▢ Sígueme en Instagram\nhttps://www.instagram.com/fran_ff\n' 
global.dygp = 'https://chat.whatsapp.com/JeW8xzTV0pILjIqgmqNjsN'
global.fgsc = 'https://github.com/arieleljefe/Frankenstainbot' 
global.fgyt = 'https://youtube.com/fran'
global.fgpyp = 'https://paypal.me/fran'
global.fglog = 'https://i.imgur.com/4cHS02c.jpg' 

global.wait = '*⌛ _Cargando..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
