const chalk = require('chalk')
const fs = require('fs')


global.owner = ['6289646942000'] 
global.ownernomer = "6289646942000"
global.socialmedia = "IG: keilasenpai"
global.yutubs = "YT: KeilaSenpai"
global.lokasi = "Indonesia, Jawatengah, Kudus"//

global.packgename = "by"
global.author = "KeiLa"

global.title = 'KeiLa - MD'//Tittle reply
global.body = 'Kei' //body reply

global.welcome = false 
global.left = false

global.autoread = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})