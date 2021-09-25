/*
「 INFO CREATOR」
Sc ori: Mhankbarbar
Recode: Fachri
Note: Jangan di Jual Anj nih sc/Klo mau recode kasih nama gua

*❏SPECIAL THANKS TO❏*
*╠◪* ALLAH SWT
*╠◪* ORANG TUA
*❏*
                
*❏THANKS TO❏*
*╠◪* MhankBarBar
*╠◪* Nurutomo
*╠◪* Penyedia Api
*╠◪* Adiwajshing
*╠◪* Baileys
*╠◪* Aqul
*╠◪* Vean
*╠◪* X-MrGr3p5 
*╠◪* Benny Hidayat
*╠◪* Mank Aguz
*╠◪* Ivanzz
*╠◪* Fauzan
*╠◪* YogiPw
*╠◪* Miku
*╠◪* Manik
*╠◪* MeMans
*╠◪* Affis
*╠◪* Ramlan ID
*╠◪* Nabila
*╠◪* Cognita Vinz
*╠◪* Iky Ads
*╠◪* Nybotz
*╠◪* Angga
*╠◪* Yuda Xwer
*╠◪* Irwans
*╠◪* Franky
*╠◪* Farhan Xz
*╠◪* Itsfachri
*╠◪* All Creator Bot
*╠◪* VXC ( Team )
*╠◪* Naswari ( Team )
*❏*`
*/
const {
   WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   Browsers,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs")
const figlet = require('figlet')
const os = require('os');
const got = require("got");
const axios = require('axios')
const toMs = require('ms')
const crypto = require('crypto')
const delay = require('delay')
const util = require('util');
const speed = require('performance-now')
const ig = require('insta-fetcher')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const tik = require ('tiktok-scraper') 
const googleImage = require('g-i-s')
const googleIt = require('google-it')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const imgbb = require('imgbb-uploader')
const PhoneNumber = require('awesome-phonenumber')
const gis = require('g-i-s');
const request = require('request')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { yag } = require('./asu')
const imageToBase64 = require('image-to-base64')
const path = require('path')
const { tiktokDown } = require("./lib/tiktok")
const cd = 4.32e+7
const { spawn, exec, execSync } = require("child_process")
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const setiker = JSON.parse(fs.readFileSync('./lib/media/stick.json'))
const gambarnye = JSON.parse(fs.readFileSync('./lib/media/image.json'))
const videonye = JSON.parse(fs.readFileSync('./lib/media/video.json'))
const { color, bgcolor } = require('./lib/color')
const translate = require('./lib/translate')
const { mediafireDl } = require('./lib/mediafire.js')
const { onGoing } = require("./lib/otakudesu.js")
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { animesaran } = require('./lib/animesaran')
const { animesaran2 } = require('./lib/animesaran2')
const { donasi } = require('./lib/donasi')
const { webp2gifFile } = require("./lib/gif.js")
const { infown } = require('./lib/infown')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { snk } = require('./lib/snk')
const fontPath = ('./lib/xcodefnt.ttf')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { wait, simih, h2k, generateMessageID, getGroupAdmins, getRandom, getBuffer, banner, start, info, success, close } = require('./lib/functions')
const Exif = require('./lib/exif');
const exif = new Exif();
const { pShadow,
  pRomantic,
  pSmoke,
  pBurnPapper,
  pNaruto,
  pLoveMsg,
  pMsgGrass,
  pGlitch,
  pDoubleHeart,
  pCoffeCup,
  pLoveText,
  pButterfly } = require('./lib/photooxy')
const { version, bugs } = require('./package.json')
const { uptotele, uptonaufal } = require('./lib/uploadimage')
const { cmdadd } = require('./lib/totalcmd.js')
const { convertSticker } = require("./lib/plugins/swm.js")
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const user = JSON.parse(fs.readFileSync('./database/user.json'))
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/badword.json'))
//kontak 
const vcard1 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:yahaha Fachri\n' //ganti nama lu! 
              + 'ORG: OwnerFachri;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=6289643739077:+62 89643739077\n'  //ganti nomor lu! 
              + 'END:VCARD'
             
const vcard2 = 'BEGIN:VCARD\n' 
              + 'VERSION:3.0\n' 
              + 'FN:Blok\n' //ganti nama lu! 
              + 'ORG: gada;\n' 
              + 'TEL;type=CELL;type=VOICE;waid=0:+0\n'  //ganti nomor lu! 
              + 'END:VCARD'
const TechApi = "5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ"
//setting
hit_today = []
offline = false
banChats = true
multi = true
antidel = false
nopref = false
publik = false
fake = 'self-xcode'
baterai = 'belum detect'
charging = 'unknown'
numbernye = '0'
waktunya = '-'
targetpc = '6285795090949'
alasan = '-'
owner = '6289643739077'
//===================================================//
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('0m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
                                         }
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        }
async function starts() {
const xcode = new WAConnection()
xcode.version = [2, 2119, 6]
xcode.logger.level = 'warn'
console.log(banner.string)
xcode.browserDescription=Browsers.macOS("Firefox")
xcode.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(color('Xcode','red'), color('scan code','aqua'), color('Subs YT Itsfachri xcode','yellow'))
})

fs.existsSync('./session.json') && xcode.loadAuthInfo('./session.json')
xcode.on('connecting', () => {
start('2', color('[ ! ]Connecting....','aqua'))
})
xcode.on('open', () => { 
success('2', color('[ ! ]Connected','red')),
    console.log(color('⎇','red'), color('Sc ini gua susun sendiri\nNote: jangan lupa subscribe Itsfachri xcode', 'yellow'))
    console.log(color('⎇','red'), color('Source code version:', 'aqua'), color(version))
    console.log(color('⎇','red'), color('Bug? Error? Suggestion? Visit here:', 'aqua'), color('https://wa.me/6289643739077'))
    console.log(color('[SELF-BOT]'), color('selfbot xcode is now online!', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome back, Owner! Hope you are doing well~', 'magenta'))
})
await xcode.connect({timeoutMs: 30*1000}) 
fs.writeFileSync('./session.json', JSON.stringify(xcode.base64EncodedAuthInfo(), null, '\t'))    
        
        xcode.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		xcode.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
xcode.on('message-update', async (mek) => {
m = simple.smsg(xcode, mek)
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
 bugsol = mek.participants[0]
 tekuss = `\`\`\`Bug Terdeteksi\`\`\`












































 

 

























































































































































































\`\`\`@⁨${bugsol.split('@')[0]} Mengirim Bug Digrup ${groupName}\`\`\``
xcode.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
xcode.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, { contexInfo: { mentionedJid:[bugsol] }})
}
})
xcode.on('message-delete', async (m) => {
if (antidel === false) return
if (m.key.remoteJid == 'status@broadcast') return
if (m.key.fromMe) return
const moment = require('moment-timezone')
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
xcode.sendMessage(m.key.remoteJid, `ANTI DELETE
Nama : @${m.participant.split("@")[0]}
Waktu : ${jam} ${week} ${calender}
Type : ${Object.keys(m.message)[0]}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})

//xcode.copyNForward(m.key.remoteJid, m.message)
})
//=================================================//
xcode.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			mem = anu.participants[0]
			console.log(anu)
            try {
            pp_user = await xcode.getProfilePicture(mem)
            } catch (e) {
            pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
            pp_grup = await xcode.getProfilePicture(anu.jid)
            } catch (e) {
            pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'add') {
            mdata = await xcode.groupMetadata(anu.jid)
            memeg = mdata.participants.length
        	num = anu.participants[0]
            anu_user = xcode.contacts[mem]
            teks = `Halo Sayang @${num.split('@')[0]}\nWelcome in ${mdata.subject}\n\nSilahkan Intro ya sayang\nNama : \nUmur : \nGender : \nAsal : \n\nSemoga Betah dan Jangan Lupa isi`
	        buff = await getBuffer(`https://api-yogipw.herokuapp.com/api/welcome?name=${anu_user.notify}&mem=${memeg}&gcname=${mdata.subject}&picurl=${pp_user}&bgurl=https://k.top4top.io/p_2010dd5so0.jpg&gcicon=${pp_grup}`)
		xcode.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await xcode.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = xcode.contacts[mem]
                memeg = mdata.participants.length
                out = `Kenapa tuh? kok bisa keluar? \nSayonara @${num.split('@')[0]} we will miss you`
                buff = await getBuffer(`https://api-yogipw.herokuapp.com/api/goodbye?name=${anu_user.notify}&mem=${memeg}&gcname=${mdata.subject}&picurl=${pp_user}&bgurl=https://k.top4top.io/p_2010dd5so0.jpg`)
                xcode.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
                }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
//HARI & BULAN
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
//chat-update
xcode.on('chat-update', async (mek) => {
	try {
    if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return 
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
       if (!publik) {
       	}
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
//		if (!mek.key.fromMe) return
         if (!mek.key.fromMe && banChats === true) return
        m = simple.smsg(xcode, mek)
		global.prefix
		global.blocked
       mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { MessageType, WAMessageProto } = require('@adiwajshing/baileys')
		const { text, extendedText, contact, contacsArray, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const jam = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		let d = new Date
		let locale = 'id'
		let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		let week = d.toLocaleDateString(locale, { weekday: 'long' })
		let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
    	const type = Object.keys(mek.message)[0]
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        if (multi){
		    var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_*!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '-'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		hit_today.push(command)
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 1, budy.length)
		const isCmd = body.startsWith(prefix)
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./lib/totalcmd.json'))[0].totalcmd
		const q = args.join(' ')
		const botNumber = xcode.user.jid
		const botNumberss = xcode.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? xcode.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await xcode.chats.all()
		const ownerNumber = ["6289643739077@s.whatsapp.net", "79034187942@s.whatsapp.net"] // ganti nomer lu yo
        const ownerContact = ["6289643739077", "6288286421519", "6282140744548", "79034187942"]
		const unread = await xcode.loadAllUnreadMessages()
		const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
		const groupMetadata = isGroup ? await xcode.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isSimi = isGroup ? samih.includes(from) : false 
		const isOwner = ownerNumber.includes(sender)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
    const isWelkom = isGroup ? welkom.includes(from) : false
    const conts = mek.key.fromMe ? xcode.user.jid : xcode.contacts[sender] || { notify: jid.replace(/@.+/, '') }
    const pushname = mek.key.fromMe ? xcode.user.name : conts.notify || conts.vname || conts.name || '-'
    const readmore = '͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏'
        /*const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)*/

        //MESS
		mess = {
			wait: 'sabar...',
			success: `Oke Desu ~`,
			wrongFormat: 'Format salah, coba liat lagi di dalam menu',
			error: {
				api: 'error bre...',
				stick: 'sticker bukan?',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup',
			}
		} 
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const reply = (teks) => {
            xcode.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./xcode.jpeg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true}})
        }

        const sendMess = (hehe, teks) => {
            xcode.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? xcode.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./xcode.jpeg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : xcode.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./xcode.jpeg')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const math = (teks) => {
				return Math.floor(teks)
			} 
			const sendTextWithMentions = (teks, member, id) => {
          (id == null || id == undefined || id == false) ? xcode.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": member } }) : xcode.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": member } })
           } 
           let userAgent = () => {

os = [

'Macintosh; Intel Mac OS X 10_15_7',

'Macintosh; Intel Mac OS X 10_15_5',

'Macintosh; Intel Mac OS X 10_11_6',

'Macintosh; Intel Mac OS X 10_6_6',

'Macintosh; Intel Mac OS X 10_9_5',

'Macintosh; Intel Mac OS X 10_10_5',

'Macintosh; Intel Mac OS X 10_7_5',

'Macintosh; Intel Mac OS X 10_11_3',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_6_8',

'Macintosh; Intel Mac OS X 10_10_2',

'Macintosh; Intel Mac OS X 10_10_3',

'Macintosh; Intel Mac OS X 10_11_5',

'Windows NT 10.0; Win64; x64',

'Windows NT 10.0; WOW64',

'Windows NT 10.0',

];

return `Mozilla/5.0 (${os[Math.floor(Math.random() * os.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(

Math.random() * 3,

) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;

}

function ttaudio(url) {

return new Promise(async (resolve, reject) => {

getDataFirst = await axios.get('https://www.tiktok.com')

newCookie = getDataFirst.headers['set-cookie'].join('')

axios.get(url, {

headers: {

'user-agent': userAgent(),

'Cookie': newCookie

}

})

.then(({ data }) => {

$ = cheerio.load(data)

ttdata = JSON.parse($('script#__NEXT_DATA__').get()[0].children[0].data)

meta = ttdata.props.pageProps.itemInfo.itemStruct

resolve({

status: true,

message: success,

result: {

description: meta.desc,

duration: meta.video.duration,

resolution: meta.video.width + 'x' + meta.video.height,

jpeg_thumb: meta.video.originCover,

gif_thumb: meta.video.dynamicCover,

audio: meta.music.playUrl,

}

})

})

.catch((response) => {

reject({ status: false, message: response })

})

})

}

			//ROLE
		const levelRole = getLevelingLevel(sender)
          var role = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 1243) {
   	         role = 'Legends 忍'
   	     }
   
			var premi = 'User 🏅'
			
			if (mek.key.fromMe) {
				premi = 'Owner ⚔️'
		    }

			const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":`${ucapanWaktu} ${pushname}\n⎇ ${command}`,"jpegThumbnail":fs.readFileSync('./xcode.jpeg')
}}}
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./xcode.jpeg')
}}}
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail":fs.readFileSync('./xcode.jpeg')}, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
        const fakestatus = (teks) => {
            xcode.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": `${ucapanWaktu} ${pushname}`,
                            "jpegThumbnail": fs.readFileSync('./xcode.jpeg')
                        }
                    }
                }
            })
        } 
        const fstick = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
					stickerMessage: {
			            url: "https://mmg.whatsapp.net/d/f/AsdWLvhs6HzTVXnUPeKx0HwaOu2fMULBOoWvcwSq7UFZ.enc", 
			            fileSha256: "rJo+aytbZuO3eBdqZv2LM0tNekFkS4xOJ32oWPuDANw=", 
                        fileEncSha256: "IuQDHy80VnTps8Z4SOVp29R7mM5MTZl+yMxbyjCAOPk=",
                        mediaKey: "o8nUNtr7Rt3xorRBkaoUXIG02FXYmpcfODamOO9LU/g=",
						mimetype: "image/webp",
						 height: 64,
						width: 64,
						directPath: "/v/t62.15575-24/13168186_543387126706005_212227891975731600_n.enc?ccb=11-4&oh=681a42dace0258a67544f4df45524b24&oe=60F422D8",
fileLength: "20236",
mediaKeyTimestamp: "1624176146"
					}
				}
			}
        const faketroli = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1,

status: 200, 

surface: 200,

message: `${ucapanWaktu} ${pushname}\n⎇ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./xcode.jpeg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
"caption": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
'jpegThumbnail': fs.readFileSync('./xcode.jpeg')
		}
	}
}

        const fakethumb = (teks, yes) => {
            xcode.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            xcode.sendMessage(from, teks, text, {
                quoted: {
                    "key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "NgsCIU2lXKh3VHJT",
			"groupName": `${ucapanWaktu} ${pushname}`, 
"caption": `${ucapanWaktu} ${pushname}`, 
'jpegThumbnail': fs.readFileSync('./xcode.jpeg')
		}
	}
}
})
        } 
        const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '${ucapanWaktu} ${pushname}', 
                    jpegThumbnail: fs.readFileSync('./xcode.jpeg')
                          }
                        }
                      }
        const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 
        const fvideo = {
	 key: { 
	      participant: '6285284001309@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '99999', 
                 'caption': '${ucapanWaktu} ${pushname}',
                 'jpegThumbnail': fs.readFileSync('./xcode.jpeg')
                        }
                       }
	                  }
        const ftoko = {
		key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast"} : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`./xcode.jpeg`)
					},
					"title": `${ucapanWaktu} ${pushname}`,
					"description": "ngab",
					"currencyCode": "IDR",
					"priceAmount1000": "50.000",
					"retailerId": "Self Bot",
					"productImageCount": 0
				},
				"businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const hideTag = async function(from, text){
	let anu = await xcode.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
	xcode.sendMessage(from, text, 'extendedTextMessage', {quoted: mek, contextInfo: {"mentionedJid": ane}})
}  
const sendMention = async(from, text, mentioned, quoted = "") => {
    xcode.sendMessage(from, text, text, { quoted: quoted, contextInfo: { mentionedJid: [mentioned] } })
}
const hideTagStiker = async(from, buffer) => {
    let anu = await xcode.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    xcode.sendMessage(from, buffer, sticker, { sendEphemeral: true, contextInfo: { mentionedJid: ane } })
}
const kick = function(from, orangnya){
	for (let i of orangnya){
		xcode.groupRemove(from, [i])
	}
}
const add = function(from, orangnya){
	xcode.groupAdd(from, orangnya)
}
const sendKontak = (from, nomor, nama, org = "") => {
	const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	xcode.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
const hideTagKontak = async(from, nomor, nama) => {
    vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
    let anu = await xcode.groupMetadata(from)
	let members = anu.participants
	let ane = []
	for (let i of members){
		ane.push(i.jid)
	}
    xcode.sendMessage(from, { displayname: nama, vcard: vcard }, contact, { contextInfo: { mentionedJid: ane } })
}
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
xcode.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xcode.sendMessage(from, hasil, type, options).catch(e => {
xcode.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
const sendFileFromStorage = (path, type, options) => {
xcode.sendMessage(from, fs.readFileSync(path), type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mengirim Media_')
console.log(e)
})
}
const getGroup = async function(totalchat){
	let grup = []
	let a = []
	let b = []
	for (c of totalchat){
		a.push(c.jid)
	}
	for (d of a){
		if (d && d.includes('g.us')){
			b.push(d)
		}
	}
	for (e of b){
		let ingfo = await xcode.groupMetadata(e)
		grup.push(ingfo)
	}
	return grup
}
const fakeReply = (teks, target, teks2) => {
xcode.sendMessage(from, teks, text, {quoted: {key: {fromMe: false, participant: `${target}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: teks2}}})
}
let authorname = xcode.contacts[from] != undefined ? xcode.contacts[from].vname || xcode.contacts[from].notify : undefined	
if (authorname != undefined) { } else { authorname = groupName }	
function addMetadata(packname, author) {	
if (!packname) packname = 'self'; if (!author) author = 'xcode';author = author.replace(/[^a-zA-Z0-9]/g, '');	
let name = `${author}_${packname}`
if (fs.existsSync(`./sticker/${name}.exif`)) return `./stik/${name}.exif`
const json = {	
"sticker-pack-name": packname,
"sticker-pack-publisher": author,
}
const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
let len = JSON.stringify(json).length	
let last	
if (len > 256) {	
len = len - 256	
bytes.unshift(0x01)	
} else {	
bytes.unshift(0x00)	
}	
if (len < 16) {	
last = len.toString(16)	
last = "0" + len	
} else {	
last = len.toString(16)	
}	
				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
					return `./sticker/${name}.exif`	
				})	
			}
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        xcode.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            } 
            const sendPTT = (res) => {

xcode.sendMessage(from, res, audio, {mimetype: 'audio/mp4', ptt: false, quoted:mek})

}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    xcode.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	xcode.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	xcode.sendMessage(from, hasil, type, options).catch(e => {
	xcode.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	  console.log(e)
	})
	})
	})
	})
	}
	const sendGif = (from, gif) => {
	xcode.sendMessage(from, gif, MessageType.video, {mimetype: "video/gif"})
}
//FUNCTION
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return

            addafk(mek.key.remoteJid)
      heheh = ms(Date.now() - waktuafk) 
      xcode.sendMessage(mek.key.remoteJid,`*Mohon Maaf @${owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{quoted:mek, contextInfo:{ mentionedJid: ['6289643739077@s.whatsapp.net']}})//ubah nomor lu
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === '6289643739077@s.whatsapp.net'){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktuafk)
            xcode.sendMessage(mek.key.remoteJid,`*Mohon Maaf @${owner} Sedang Offline!*\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{quoted:mek,contextInfo:{ mentionedJid: ['6289643739077@s.whatsapp.net']}})
      }
        }
            }
          }
        }
      }
    }
    
//HAYOO SAYA ENTOD KAMU//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
		const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!mek.key.fromMe && !isOwner && banChats === true) return 
//Troli detect
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitroli === false) return
reply('Njir Troli 🗿\n\n' + require('util').format(m.key))

await xcode.modifyChat(m.chat, 'delete', {

 includeStarred: false

})

}

if (m.message && m.isBaileys && m.mtype === 'orderMessage' && !(m.token && m.orderId)) {

reply('OrderMessage 🗿\n\n' + require('util').format(m.key))

}
		if (budy.startsWith('>')){
		if(!isOwner && !mek.key.fromMe) return
	console.log('[', color('EVAL', 'silver'),']', color(moment(mek.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy))
try {
return reply(JSON.stringify(eval(budy.slice(2)),null,'\t'))
} catch(e) {
reply(`${e}`)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return reply('lu siapa?')
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
  reply(String(e))
}
}
if (body.startsWith('$')) {
if (!q && !mek.key.fromMe && !isOwner) return reply('lu siapa?')
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
//
switch (command) {
//P
case 'public':
          	if (!mek.key.fromMe) return
          	if (banChats === false) return
          	uptime = process.uptime()
          	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./xcode.jpeg')}}}}
          	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	xcode.sendMessage(from, `「 *PUBLIC-MODE* 」`, text,anu)
          	break 
          case 'ig': case 'instagram':
if (!q) return reply('Linknya?')
reply(yag.wait())
ig.fetchPost(`${q}`).then(res => {
asu = res.links[0]
var { username,name, caption} = res
console.log(asu)
sendMediaURL (from,`${asu.url}`, `Username : ${username}
Name : ${name}
Caption : ${caption}`)
})
break 
case 'igstalk':
            if (!q) return reply('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break
case 'tiktokstalk':
					try {
						if (args.length < 1) return reply('Usernamenya mana?')
						let { user, stats } = await tik.getUserProfileInfo(args[0])
						reply(yag.wait())
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						xcode.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break
case 'ghstalk': case 'githubstalk':
try {
if (!q) return reply('Usernamenya?')
await fetchJson(`https://api.github.com/users/${args.join(' ')}`).then(Y => {
            console.log(`githubStalker`)
           var ten = `${Y.avatar_url}`
           var teks = `*Username* : ${Y.name}\n*Blog* : ${Y.blog}\n*Location* : ${Y.location}\n*Email* : ${Y.email}\n*Bio* : ${Y.bio}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Pub-repos* : ${Y.public_repos}\n*Pub-gists* : ${Y.public_gists}\n\n*Link* : ${Y.html_url}`
            sendMediaURL(from,ten,teks) 
            }) 
} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('username tidak valid')
					}
					break
            case 'facebook':
case 'fb':
if (!q) return reply(mess.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」

• *Judul:* ${a.judul}
• *Source :* ${a.source}
• *Ukuran :* ${a.size}
• *Kualitas :* ${a.quality}
• *Type :* ${a.type}
• *Nama File :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: mek})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: mek})
break
case 'naruto':
if (!q) return reply('teksnya mana?')
pNaruto(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'shadow':
if (!q) return reply('teksnya mana?')
pShadow(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'romantic':
if (!q) return reply('teksnya mana?')
pRomantic(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'smoke':
if (!q) return reply('teksnya mana?')
pSmoke(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'burnpaper':
if (!q) return reply('teksnya mana?')
pBurnPapper(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovemsg':
if (!q) return reply('teksnya mana?')
pLoveMsg(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'grass':
if (!q) return reply('teksnya mana?')
pMsgGrass(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'doubleheart':
if (!q) return reply('teksnya mana?')
pDoubleHeart(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'coffecup':
if (!q) return reply('teksnya mana?')
pCoffeCup(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'lovetext':
if (!q) return reply('teksnya mana?')
pLoveText(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break
case 'butterfly':
if (!q) return reply('teksnya mana?')
pButterfly(`${q}`)
         .then(res => {
    	console.log(res) 
sendMediaURL(from, res.url)
		})
		break 
		case 'image':
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./xcode.jpeg')})
}
}
break
case 'phubkomen':
				if (args.length < 1) return reply(`Textnya Mana Cuy?\nContoh ${prefix}phubkomen xcode|yamette`)
				reply(yag.wait())
				ct = body.slice(10)
				teks1 = ct.split("|")[0];
                teks2 = ct.split("|")[1];
				anu = await fetchJson(`https://api.zeks.xyz/api/phub?apikey=vuG6qRcrb1NzsZRHNBKEBrc7feD&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${teks1}&msg=${teks2}`)
				teted = await getBuffer(anu.result.url)
				xcode.sendMessage(from, teted, image, { quoted: mek, caption: 'Nih kack' })
				break
		case 'self':
          	if (!mek.key.fromMe) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${runtime(process.uptime())}*`, 'jpegThumbnail': fs.readFileSync('./xcode.jpeg')}}}}
         	banChats = true
          	xcode.sendMessage(from, `「 *SELF-MODE* 」`, text,anu)
          	break
            case 'nano':
             if (!q) return reply('ngapain goblok')
             anu = fs.readFileSync(`${q}`)
             reply(String(anu))
             break 
			case 'addvideo':
				if (!q) return reply('Nama videonya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xcode.downloadMediaMessage(boij)
				videonye.push(`${q}`)
				fs.writeFileSync(`./lib/media/video/${q}.mp4`, delb)
				fs.writeFileSync('./lib/media/video.json', JSON.stringify(videonye))
				xcode.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: freply })
				break
			case 'getvideo':
				if(!q) return reply('nama videonya apa?')
				buffer = fs.readFileSync(`./lib/media/video/${q}.mp4`)
				xcode.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: freply2 })
				break
           case 'addvn':
				if (!isQuotedAudio) return reply('Reply vnnya blokk!')
				if (!q) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xcode.downloadMediaMessage(boij)
				audionye.push(`${q}`)
				fs.writeFileSync(`./lib/media/audio/${q}.mp3`, delb)
				fs.writeFileSync('./lib/media/audio.json', JSON.stringify(audionye))
				xcode.sendMessage(from, `Sukses Menambahkan  Vn\nCek dengan cara ${prefix}listvn`, MessageType.text, { quoted: mek })
				break 
		    case 'hidetag':
				try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
				} catch {
hideTag(from, `${q}`)
				  }
				    break
           case 'getvn':
                if(!q) return reply('nama vnnya apa?')
				buffer = fs.readFileSync(`./lib/media/audio/${q}.mp3`)
				xcode.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
                break 
                case 'stiker':
	case 'sticker':
    case 's':
    case 'stickergif':
    case 'stikergif':
            var a = `self`
            var b = `xcode`
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await xcode.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            xcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await xcode.downloadAndSaveMediaMessage(encmedia)
            var a = `self`
            var b = `xcode`
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            xcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break 
            case 'owner':
             let ini_list = []
  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
const vname = xcode.contacts[i] != undefined ? xcode.contacts[i].vname || xcode.contacts[i].notify : undefined
  ini_list.push({
            "displayName": 'p',
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
          })
  }
  hehe = await xcode.sendMessage(from, {
        "displayName": `${ini_list.length} kontak`,
        "contacts": ini_list 
        }, 'contactsArrayMessage', { quoted: mek })
        xcode.sendMessage(from,'Nih Kak Owner Ku ><',text,{quoted: hehe})
        break 
        case 'q':
    if (!m.quoted) return reply('reply pesan!')
    let rii = xcode.serializeM(await m.getQuotedObj())
    if (!rii.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await rii.quoted.copyNForward(m.chat, true)
    break
           case 'getsticker':
			case 'gets':
				var itsme = `${numbernye}@s.whatsapp.net`
	            if(!q) return reply('nama sticknya apa?')
				result = fs.readFileSync(`./lib/media/sticker/${q}.webp`)
				xcode.sendMessage(from, result, sticker, {quoted: freply2, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
				break 
           case 'addsticker':
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (!q) return reply('Nama sticker nya apa?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xcode.downloadMediaMessage(boij)
				setiker.push(`${q}`)
				fs.writeFileSync(`./lib/media/sticker/${q}.webp`, delb)
				fs.writeFileSync('./lib/media/stick.json', JSON.stringify(setiker))
				xcode.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: freply })
				break
case 'tovideo': case 'tovid':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await xcode.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
xcode.sendMessage(from, mp4, video, {mimetype: 'video/mp4',duration:99999999, quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
break
case 'buggc':
await xcode.toggleDisappearingMessages(from)
reply("⤳𝙓ͯ𝙘ͨ𝙤ͦ𝙙ͩ𝙚ͤ 𝙬ⷠ𝙖ⷠ𝙨ⷠ 𝙝𝙚𝙧𝙚")
break
case 'bug':
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await xcode.toggleDisappearingMessages(from, 0)
}
reply('Sukses Send Bug Sebanyak '+args.join(' '))
					break
case 'komunis':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/comunism?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'thuglife':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/thuglife?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'putin':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/putin?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'rip':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'hitler':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/hitler?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
case 'scircle':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", owgi)
hehe = await getBuffer(`https://api-yogipw.herokuapp.com/api/imgedit/circle?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, sticker, {quoted: mek})
} else {
reply('Reply Imagenya!!')
}
break
            case 'addimage':
				if (!isQuotedImage) return reply('Reply imagenya blokk!')
				if (!q) return reply('Nama imagenya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await xcode.downloadMediaMessage(boij)
				gambarnye.push(`${q}`)
				fs.writeFileSync(`./lib/media/image/${q}.jpeg`, delb)
				fs.writeFileSync('./lib/media/image.json', JSON.stringify(gambarnye))
				xcode.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listimage`, MessageType.text, { quoted: freply })
				break
			case 'getimage':
			    if (!q) return reply(`nama imagenya apa?`)
				buffer = fs.readFileSync(`./lib/media/image/${q}.jpeg`)
				xcode.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${q}.jpeg` })
				break 
				case 'ytmp4':
	 		if (args.length < 1) return reply('Tolong masukan url!')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvtext)});
    		} catch {
        	return await xcode.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(yag.wait())
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `*「 YOUTUBE VIDEO 」*\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\n◩ *self-xcode*`	
        	await xcode.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: freply, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break 
			case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : mp3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk ukuran lebih dari 30 mb disajikan dalam bentuk link_`)
				 captions = `*「 YOUTUBE MP3 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Size* : ${filesizeF}\n\n_Sending Audio..._`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
case 'mp3':
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateA(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp3* 」

• *Judul:* ${res[0].judul}
• *Ukuran:* ${res[0].size}
• *Kualitas:* ${res[0].quality}kbps
• *Nama File:* ${res[0].output}
• *Tipe:* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
break
case 'mp4':
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp4* 」

• *Judul:* ${res[0].judul}
• *Ukuran:* ${res[1].size}
• *Kualitas:* ${res[2].quality}p
• *Nama File:* ${res[0].output}
• *Tipe:* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
break
			case 'playvid':  
        case 'playvideo':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            srch = q
            aramas = await yts(srch);
            aramat = aramas.all 
            mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*「 PLAY VIDEO 」*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break 
                   case 'play':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
			reply(yag.wait())
    		aramas = await yts(q);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*「 PLAY MUSIC 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
                        const captions = `*「 PLAY MUSIC 」*\n\n*Title* : ${title}\n*Ext* : mp3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break 
                   case 'imgtourl': case 'tourl':
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  xcode.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
xcode.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
})
.catch(err => {
throw err 
})
break
case 'welcome':
				if (!isGroup) return reply('khusus grup')
				
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
				if (Number(args[0]) === 1) {
				if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
				welkom.push(from)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
				} else if (Number(args[0]) === 0) {
				welkom.splice(from, 1)
				fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
				reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
				} else {
				reply(yag.satukos())
				}
				break
			case 'toimg': 
				if (!isQuotedSticker) return reply('Reply stiker nya')
				if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await xcode.downloadAndSaveMediaMessage(encmedia)
					const uploadn = await uploadimg(media, Date.now() + '.webp')
					const anjj = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${uploadn.result.image}`)
					await sendMediaURL(from, anjj.data.result, 'Nih')
					fs.unlinkSync(media)
				} else {
					const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					const media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) {
							reply(`gagal`)
							fs.unlinkSync(ran)
						} else {
							buffer = fs.readFileSync(ran)
							xcode.sendMessage(from, buffer, image, { caption:mess.success,quoted: mek })
							fs.unlinkSync(ran)
						}
					})
				}
				break  
				case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break 
            case 'tourl2':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            	reply(mess.wait)
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await xcode.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            case 'togif':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
reply(mess.wait)
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
mediaaa = await xcode.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
xcode.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
fs.unlinkSync(mediaaa)
} else {
reply(mess.wrongFormat)
}
break 
case 'antitroli':

if (args[0] == '1') {

antitroli = true

reply('Sukses Actived Anti Troli')

} else if (args[0] == '0') {

antitroli = false

reply('Sukses NonActived Anti Troli')

}

break

case 'antidel':

if (args[0] == '1') {

antidel = true

reply('Sukses Actived Anti Delete')

} else if (args[0] == '0') {

antidel = false

reply('Sukses NonActived Anti Delete')

}

break
                  case 'take':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await xcode.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : ``
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, xcode, mek, from)
			break 
			case 'tiktok':
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		reply(mess.wait)
 		tiktokDown(`${args[0]}`)
         .then(res => {
    	console.log(res) 
    var fachri = res.result.nowatermark
    xcode.sendMessage(from, buff, document,{mimetype:'video/mp4',filename:'subscribe itsfachrixcode', quoted:mek})
		})
     		break
				case 'help':
				case 'menu':
				case 'h':
			            l = 1
			charge = charging ? 'true' : 'false'

listrik = charging ? '⚡' : 'ga di cas'

			uptime = process.uptime();
					 timestampe = speed();
					 latensie = speed() - timestampe 
					spek = await xcode.user.phone
			me = '6289643739077@s.whatsapp.net'
			menunye = `*⤳SELF-XⷠCⷠOⷠDE⛧⬿*
*┣❒* *•* *${ucapanWaktu} @${senderr.split('@')[0]}* 
*┣❒* *•* *${tampilTanggal}*
*┣❒* *•* *Jam : ${time} Wib*
*┣❒* *•* *Jam : ${wit} Wit*
*┣❒* *•* *Jam : ${wita} Wit*
*┃*
*┣❒* *༒Status User༒*
*┣❒* Nama: ${pushname}
*┣❒* Tag: @${sender.split('@')[0]}
*┣❒* Premium : ${premi}
*┣❒* Role : ${role}
*┃*
*┣❒* *༒Ingfo Bot༒*
*┣❒* Owner : ${xcode.user.name}
*┣❒* Browser : ${xcode.browserDescription[1]}
*┣❒* Lib : ${xcode.browserDescription[0]}
*┣❒* Version : ${xcode.browserDescription[2]}
*┣❒* Speed : ${latensie.toFixed(4)}
*┣❒* Baterai : ${JSON.stringify(baterai)}% ${listrik}
*┣❒* Total Hit: ${totalhit} Hit
*┣❒* Hit Today: ${hit_today.length} Hit
*┣❒* Prefix : *Multi Prefix*
*┣❒* Total Chat : ${totalchat.length} Chat
*┣❒* Unread Chat: ${unread.length} Chat
*┣❒* Device : ${spek.device_manufacturer}
*┣❒* Version : ${spek.os_version}
*┣❒* *RUNTIME: ${runtime(process.uptime())}*
*┣❒* YT: *bit.ly/Fachrixcode* 
*┃*
*┣❒* *༒Sticker Menu༒*
*┣❒* ${l++}.•${prefix}sticker
*┣❒* ${l++}.•${prefix}take {author|packname}
*┣❒* ${l++}.•${prefix}sticktag
*┣❒* ${l++}.•${prefix}triggered
*┣❒* ${l++}.•${prefix}stickloli
*┣❒* ${l++}.•${prefix}wasted
*┣❒* ${l++}.•${prefix}stickmeme {teks1|teks2}
*┣❒* ${l++}.•${prefix}ttp 
*┣❒* ${l++}.•${prefix}attp
*┣❒* ${l++}.•${prefix}swm
*┣❒* ${l++}.•${prefix}sticknime
*┣❒* ${l++}.•${prefix}doge
*┣❒* ${l++}.•${prefix}scircle
*┣❒* ${l++}.•${prefix}semoji
*┃*
*┣❒* *༒Image & Maker Menu༒*
*┣❒* ${l++}.•${prefix}rotate
*┣❒* ${l++}.•${prefix}komunis
*┣❒* ${l++}.•${prefix}loli
*┣❒* ${l++}.•${prefix}wanted
*┣❒* ${l++}.•${prefix}shadow
*┣❒* ${l++}.•${prefix}romantic
*┣❒* ${l++}.•${prefix}smoke
*┣❒* ${l++}.•${prefix}burnpaper
*┣❒* ${l++}.•${prefix}naruto
*┣❒* ${l++}.•${prefix}lovemsg
*┣❒* ${l++}.•${prefix}grass
*┣❒* ${l++}.•${prefix}doubleheart
*┣❒* ${l++}.•${prefix}coffecup
*┣❒* ${l++}.•${prefix}lovetext
*┣❒* ${l++}.•${prefix}butterfly
*┣❒* ${l++}.•${prefix}addimage
*┣❒* ${l++}.•${prefix}tahta
*┣❒* ${l++}.•${prefix}deletepc
*┣❒* ${l++}.•${prefix}image
*┣❒* ${l++}.•${prefix}phubkomen
*┣❒* ${l++}.•${prefix}nulis
*┣❒* ${l++}.•${prefix}changemymind
*┣❒* ${l++}.•${prefix}kannagen
*┣❒* ${l++}.•${prefix}trumptweet
*┣❒* ${l++}.•${prefix}quotemaker
*┣❒* ${l++}.•${prefix}trash
*┣❒* ${l++}.•${prefix}sponsburn
*┣❒* ${l++}.•${prefix}randomnime
*┣❒* ${l++}.•${prefix}patrik
*┣❒* ${l++}.•${prefix}neko
*┣❒* ${l++}.•${prefix}aot
*┣❒* ${l++}.•${prefix}sagiri
*┣❒* ${l++}.•${prefix}touka
*┣❒* ${l++}.•${prefix}kaneki
*┣❒* ${l++}.•${prefix}kurumi
*┣❒* ${l++}.•${prefix}tokyoghoul
*┣❒* ${l++}.•${prefix}cogan
*┣❒* ${l++}.•${prefix}cecan
*┣❒* ${l++}.•${prefix}kucing
*┣❒* ${l++}.•${prefix}minato
*┣❒* ${l++}.•${prefix}chika
*┣❒* ${l++}.•${prefix}waifu
*┣❒* ${l++}.•${prefix}lizard
*┣❒* ${l++}.•${prefix}presentasi
*┣❒* ${l++}.•${prefix}putin
*┣❒* ${l++}.•${prefix}rip
*┣❒* ${l++}.•${prefix}hitler
*┣❒* ${l++}.•${prefix}thuglife
*┃* 
*┣❒* *༒Converter Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}get
*┣❒* ${l++}.•${prefix}tourl/tourl2
*┣❒* ${l++}.•${prefix}tovid [reply]
*┣❒* ${l++}.•${prefix}togif [reply]
*┣❒* ${l++}.•${prefix}toimg [reply]
*┣❒* ${l++}.•${prefix}hode
*┣❒* ${l++}.•${prefix}hode-v
*┣❒* ${l++}.•${prefix}reverse
*┣❒* ${l++}.•${prefix}fast-v
*┣❒* ${l++}.•${prefix}slow-v
*┣❒* ${l++}.•${prefix}reverse-v
*┣❒* ${l++}.•${prefix}fast
*┣❒* ${l++}.•${prefix}slow
*┣❒* ${l++}.•${prefix}detikvn
*┣❒* ${l++}.•${prefix}detikvideo
*┣❒* ${l++}.•${prefix}imut
*┣❒* ${l++}.•${prefix}volume
*┣❒* ${l++}.•${prefix}budek
*┣❒* ${l++}.•${prefix}nightcore
*┣❒* ${l++}.•${prefix}bass
*┣❒* ${l++}.•${prefix}vibra
*┣❒* ${l++}.•${prefix}trigger
*┣❒* ${l++}.•${prefix}tempo
*┣❒* ${l++}.•${prefix}robot
*┣❒* ${l++}.•${prefix}vibrav
*┣❒* ${l++}.•${prefix}triggervid
*┣❒* ${l++}.•${prefix}tupai
*┣❒* ${l++}.•${prefix}blub
*┣❒* ${l++}.•${prefix}gemuk
*┣❒* ${l++}.•${prefix}ghost
*┣❒* ${l++}.•${prefix}earrape
*┣❒* ${l++}.•${prefix}apulsator
*┣❒* ${l++}.•${prefix}tovn/tomp3
*┃* 
*┣❒* *༒Media Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}fb [link]
*┣❒* ${l++}.•${prefix}ig [link]
*┣❒* ${l++}.•${prefix}igstalk
*┣❒* ${l++}.•${prefix}image/googleimage
*┣❒* ${l++}.•${prefix}ytmp4 [link]
*┣❒* ${l++}.•${prefix}ytmp3 [link]
*┣❒* ${l++}.•${prefix}play
*┣❒* ${l++}.•${prefix}playvid
*┣❒* ${l++}.•${prefix}mp4 
*┣❒* ${l++}.•${prefix}mp3
*┣❒* ${l++}.•${prefix}tiktokstalk
*┣❒* ${l++}.•${prefix}tiktok [link]
*┣❒* ${l++}.•${prefix}tiktokmusic
*┣❒* ${l++}.•${prefix}githubstalk
*┣❒* ${l++}.•${prefix}ytsearch
*┣❒* ${l++}.•${prefix}translate
*┣❒* ${l++}.•${prefix}pinterest
*┣❒* ${l++}.•${prefix}filmapikterbaru
*┣❒* ${l++}.•${prefix}filmapikdrama
*┣❒* ${l++}.•${prefix}google
*┃* 
*┣❒* *༒Storage Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}addsticker [reply stick]
*┣❒* ${l++}.•${prefix}addvn [reply audio]
*┣❒* ${l++}.•${prefix}addimage [reply image]
*┣❒* ${l++}.•${prefix}addvideo [reply video]
*┣❒* ${l++}.•${prefix}getsticker
*┣❒* ${l++}.•${prefix}getvn
*┣❒* ${l++}.•${prefix}getimage
*┣❒* ${l++}.•${prefix}getvideo
*┣❒* ${l++}.•${prefix}liststicker
*┣❒* ${l++}.•${prefix}listvn
*┣❒* ${l++}.•${prefix}listimage
*┣❒* ${l++}.•${prefix}listvideo
*┣❒* ${l++}.•${prefix}delsticker
*┣❒* ${l++}.•${prefix}delimage
*┣❒* ${l++}.•${prefix}delvideo
*┣❒* ${l++}.•${prefix}delvn
*┃* 
*┣❒* *༒Group Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}listgroup
*┣❒* ${l++}.•${prefix}tagall
*┣❒* ${l++}.•${prefix}rptag
*┣❒* ${l++}.•${prefix}sider
*┣❒* ${l++}.•${prefix}searchmsg [teks]
*┣❒* ${l++}.•${prefix}getpp [tag]
*┣❒* ${l++}.•${prefix}getpic
*┣❒* ${l++}.•${prefix}listadmin
*┣❒* ${l++}.•${prefix}listonline
*┣❒* ${l++}.•${prefix}hidetag
*┣❒* ${l++}.•${prefix}tagall2
*┣❒* ${l++}.•${prefix}tagall3
*┃* 
*┣❒* *༒News Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}tribunews
*┣❒* ${l++}.•${prefix}republika
*┣❒* ${l++}.•${prefix}wikipedia
*┣❒* ${l++}.•${prefix}cuaca
*┃* 
*┣❒* *༒Islam Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}asmaulhusna
*┣❒* ${l++}.•${prefix}tahlil
*┣❒* ${l++}.•${prefix}bacaansholat
*┣❒* ${l++}.•${prefix}jadwalsholat
*┣❒* ${l++}.•${prefix}niatsholat
*┣❒* ${l++}.•${prefix}doaharian
*┣❒* ${l++}.•${prefix}ayatkursi
*┣❒* ${l++}.•${prefix}kisahnabi
*┃* 
*┣❒* *༒Info Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}covidindo
*┣❒* ${l++}.•${prefix}covidglobal
*┣❒* ${l++}.•${prefix}kodepos
*┣❒* ${l++}.•${prefix}kbbi
*┣❒* ${l++}.•${prefix}infogempa
*┣❒* ${l++}.•${prefix}wikipedia
*┃* 
*┣❒* *༒Owner & Other Menu༒*
*┃* 
*┣❒* ${l++}.•${prefix}q [CopyNForward]
*┣❒* ${l++}.•${prefix}welcome [1/0]
*┣❒* ${l++}.•${prefix}totag
*┣❒* ${l++}.•${prefix}setprfix [Text]
*┣❒* ${l++}.•${prefix}setprefix2 [multi/nopref]
*┣❒* ${l++}.•${prefix}chat
*┣❒* ${l++}.•${prefix}hacked
*┣❒* ${l++}.•${prefix}kalkulator
*┣❒* ${l++}.•${prefix}add
*┣❒* ${l++}.•${prefix}kick
*┣❒* ${l++}.•${prefix}promote
*┣❒* ${l++}.•${prefix}demote
*┣❒* ${l++}.•${prefix}linkgc
*┣❒* ${l++}.•${prefix}suit
*┣❒* ${l++}.•${prefix}santet
*┣❒* ${l++}.•${prefix}kutuk
*┣❒* ${l++}.•${prefix}upswteks [teks]
*┣❒* ${l++}.•${prefix}upswvideo [capt]
*┣❒* ${l++}.•${prefix}upswimage [capt]
*┣❒* ${l++}.•${prefix}upswgif [capt]
*┣❒* ${l++}.•${prefix}upswvoice
*┣❒* ${l++}.•${prefix}fdeface
*┣❒* ${l++}.•${prefix}restart
*┣❒* ${l++}.•${prefix}cekmati
*┣❒* ${l++}.•${prefix}owner
*┣❒* ${l++}.•${prefix}creepyfact
*┣❒* ${l++}.•${prefix}gc [buka/tutup]
*┣❒* ${l++}.•${prefix}timer
*┣❒* ${l++}.•${prefix}mystat
*┣❒* ${l++}.•${prefix}dorking
*┣❒* ${l++}.•${prefix}encode64
*┣❒* ${l++}.•${prefix}decode64
*┣❒* ${l++}.•${prefix}decode32
*┣❒* ${l++}.•${prefix}encode32
*┣❒* ${l++}.•${prefix}encbinary
*┣❒* ${l++}.•${prefix}decbinary
*┣❒* ${l++}.•${prefix}encoctal
*┣❒* ${l++}.•${prefix}decoctal
*┣❒* ${l++}.•${prefix}becrypt
*┣❒* ${l++}.•${prefix}hashidentifier
*┣❒* ${l++}.•${prefix}on
*┣❒* ${l++}.•${prefix}antitroli
*┣❒* ${l++}.•${prefix}antidel
*┣❒* ${l++}.•${prefix}shutdown
*┣❒* ${l++}.•${prefix}tinyurl [creat link]
*┣❒* ${l++}.•${prefix}delete/delthischat
*┣❒* ${l++}.•${prefix}off
*┣❒* ${l++}.•${prefix}join
*┣❒* ${l++}.•${prefix}status
*┣❒* ${l++}.•${prefix}self
*┣❒* ${l++}.•${prefix}buggc
*┣❒* ${l++}.•${prefix}bug [Jumlah]
*┣❒* ${l++}.•${prefix}public
*┣❒* ${l++}.•${prefix}nano [get source file]
*┃* 
*┣❒* *༒Command༒*
*┃* 
*┣❒* ${l++}.• > [eval]
*┣❒* ${l++}.• => [eval async]
*┣❒* ${l++}.• $ [executor]
*┗━━━━━━━━━━━━━━━━━━*
*❏SPECIAL THANKS TO❏*
*╠◪* ALLAH SWT
*╠◪* ORANG TUA
*❏*
                
*❏THANKS TO❏*
*╠◪* MhankBarBar
*╠◪* Nurutomo
*╠◪* Penyedia Api
*╠◪* Adiwajshing
*╠◪* Baileys
*╠◪* Aqul
*╠◪* Vean
*╠◪* X-MrGr3p5 
*╠◪* Benny Hidayat
*╠◪* Mank Aguz
*╠◪* Ivanzz
*╠◪* Fauzan
*╠◪* YogiPw
*╠◪* Miku
*╠◪* Manik
*╠◪* MeMans
*╠◪* Affis
*╠◪* Ramlan ID
*╠◪* Nabila
*╠◪* Cognita Vinz
*╠◪* Iky Ads
*╠◪* Nybotz
*╠◪* Angga
*╠◪* Yuda Xwer
*╠◪* Irwans
*╠◪* Franky
*╠◪* Farhan Xz
*╠◪* Itsfachri
*╠◪* All Creator Bot
*╠◪* VXC ( Team )
*╠◪* Naswari ( Team )
*❏*`

 xcode.sendMessage(from, { text: menunye, jpegThumbnail: fs.readFileSync('./xcode.jpeg')}, 'extendedTextMessage', { sendEphemeral: true, quoted: fgclink, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [me, senderr] }})
					break
case 'join':
				if (!isOwner) return reply(mess.only.ownerB)
				 if (args.length < 1) return ephe('Link nya mana?')
					denz.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`Succes`)
break
case 'shutdown':
                    if (!mek.key.fromMe && !isOwner) return reply('Owner Only')
			        reply(`Okoklh`) 
					xcode.process.exit()
                    break
case 'delthischat': case 'delete':
                if (!mek.key.fromMe) return reply('Anda Sapa')
                reply('*succes delete this chat*')
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                xcode.modifyChat(from, ChatModification.delete)
                break
case 'on':
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${owner}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./xcode.jpeg')}}}}
          	xcode.sendMessage(from, `ANDA SEKARANG ONLINE`,MessageType.text,anu)
          	break       
      	case 'off':
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args[0] ? args[0] : 'Tidur'
          	alasanafk = anuu
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${owner}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./xcode.jpeg')}}}}
          	xcode.sendMessage(from, `ANDA SEKARANG OFFLINE`,MessageType.text,anu)
          	break 
case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
          case 'restart':
if (!isOwner) return reply(mess.only.ownerB)
reply(`_Restarting_`)
exec(`node main`)
setTimeout( () => {
					xcode.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					xcode.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					xcode.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					xcode(from, '_Succses Restarting_', text, {quoted: fgclink}) // ur cods
					},4000) // 1000 = 1s, 
					break
    case 'status':
            reply(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break  
            case 'hacked':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/VSXQfw7/IMG-20210629-WA0004.jpg`)
                   xcode.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                xcode.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                xcode.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                xcode.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
            case 'delsticker':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setiker.indexOf(nmm)
					 setiker.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/sticker/${nmm}.webp`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break 
					case 'upswgif':
                     if (!isOwner) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    xcode.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                    break 
                    case 'upswvoice':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (!isQuotedAudio) return reply('Reply audionya!')
                    if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xcode.downloadMediaMessage(encmedia)
						xcode.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
					case 'delvn':
					if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = audionye.indexOf(nmm)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/audio/${nmm}.mp3`)
					reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break 
					case 'setprefix':
			if (!isOwner) return reply(mess.only.ownerB)
			if (args.length < 1) return reply('Teksnya?')
				prefix = args[0]
				reply('Sukses')
				break 
				case 'setprefix2':
                if (!isOwner) return reply(mess.only.ownerB)
                if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
                if (q === 'multi'){
                    multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
                }
                break
					case 'delimage':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = gambarnye.indexOf(nmm)
					 gambarnye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/image/${nmm}.jpeg`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break 
					case 'delvideo':
				if (!isOwner) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = videonye.indexOf(nmm)
					 videonye.splice(wanu, 1)
					 fs.unlinkSync(`./lib/media/video/${nmm}.mp4`)
					 reply(mess.success)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break 
					case 'detikvn':
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
			        xcode.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
				    fs.unlinkSync(media)
				    break
				    case 'detikvideo':
				    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(media)
				    xcode.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
			        fs.unlinkSync(media)
				    break
case 'covidindo': 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				xcode.updatePresence(from, Presence.composing) 
				reply(yag.wait())
				asu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/covidindo', {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
					teks += `*Kode Provinsi:* : ${i.attributes.Kode_Provi}\n*Provinsi* : ${i.attributes.Provinsi}\n*Total Positif* : ${i.attributes.Kasus_Posi}\n*Total Sembuh* : ${i.attributes.Kasus_Semb}\n*Total Meninggal* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break 
				case 'infogempa': 
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/gempa')
				hasil = `➸ *Waktu* : ${anu.result.tanggal}\n*➸ Koordinat :* ${anu.result.koordinat}\n*➸ Getaran :* ${anu.result.getaran}\n*➸ Kedalaman :* ${anu.result.kedalaman}\n*➸ Skala :* ${anu.result.skala}`
				xcode.sendMessage(from, hasil, text, {quoted: mek})
				break
				case 'kbbi':	
                //if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
						
				if (args.length < 1) return reply('Apa yang mau dicari di kbbi kak?')
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/kbbi?kata=${body.slice(6)}', {method: 'get'})
				reply('Menurut Kbbi:\n\n'+anu.result.arti)
				break 
				case 'kodepos': 
				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				xcode.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply('kotanya mana bang?')
				reply(yag.wait())
				asu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/kodepos?kota=${body.slice(8)}')
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsi:* : ${i.province}\n*City* : ${i.city}\n*Kecamatan* : ${i.subdistrict}\n*Kota* : ${i.urban}\n*Kode Pos* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break 
				case 'wikipedia':
				if (!q) return reply('mau cari apa kak?')
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/wikipedia?search=${q}', {method: 'get'})
				reply('menurut wiki:\n\n'+anu.result.result)
				break 
				case 'asmaulhusna':
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/asmaulhusna', {method: 'get'})
				teks = `*Number* : ${anu.result.number}\n*Arab* : ${anu.result.arab}\n*Latin* : ${anu.result.latin}\n*Arti Indo* : ${anu.result.translation_id}\n*Arti Eng* : ${anu.result.translation_en}`
				xcode.sendMessage(from, teks, text, {quoted:mek})
				break 
				case 'chat':
			if (args[0].startsWith('08')) return reply('Gunakan awalan 62')
            if (args[0].startsWith('+62')) return reply('Gunakan awalan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            xcode.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break 
            case 'semoji':
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[4].url}`
		   sendStickerFromUrl(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
case 'totag':
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 999999999,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await xcode.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await xcode.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 999999999,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            xcode.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
				case 'cuaca':
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

					
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
					asu = await fetchJson('http://zekais-api.herokuapp.com/cuaca?daerah=${body.slice(7)}')
					hasil = `*Cuaca🌤*\nNama : ${i.Nama}\nLongitude : ${i.longitude}\nLatitude : ${i.latitude}\nSuhu : ${i.Suhu}\nAngin : ${i.Angin}\nKelembapan : ${i.Kelembapan}\nCuaca : ${i.Cuaca}\nUdara : ${i.Udara}`
					break 
case 'lenin':
reply(yag.wait())
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=lenin`, {method: 'get'})
var n = JSON.parse(JSON.stringify(anu));
var nime2k1 =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime2k1)
xcode.sendMessage(from, pok, image, { caption: mess.success,quoted: mek })
break
case 'kalashnikov':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=kalashnikov`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime1k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime1k)
xcode.sendMessage(from, pok, image, {caption:mess.success,quoted: mek })
break
case 'unisoviet':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=unisoviet`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime3k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime3k)
xcode.sendMessage(from, pok, image, {caption:mess.success,quoted: mek })
break
case 'nikitakhrushchev':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=nikita khrushchev`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime7k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime7k)
xcode.sendMessage(from, pok, image, {caption:mess.success,quoted: mek })
break
case 'andreigromyko':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=andrei gromyko`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime6k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime6k)
xcode.sendMessage(from, pok, image, {caption:mess.success,quoted: mek })
break
case 'covidglobal': 
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/info/covidworld')
				teks = `➸ *Total Cases* : ${anu.result.totalCases}\n*➸ Recovered :* ${anu.result.recovered}\n*➸ Deaths :* ${anu.result.deaths}\n*➸ Active Cases :* ${anu.result.activeCases}\n*➸ Closed Cases :* ${anu.result.closedCases}\n*➸ Last Update :* ${anu.result.lastUpdate}`
				xcode.sendMessage(from, teks, text, {quoted: mek})
				break
				case 'kalkulator':
                
				//if (!isPublic) return reply(mess.only.publikG)
		////if (!isRegistered) return reply( ind.noregis())

				
				////if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /')
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply('"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /')
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				
				break
					case 'yurigagarin':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=yuri gagarin`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime8k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime8k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'T-34':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=T-34`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime5k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime5k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'YAK-3':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=YAK-3`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime15k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime15k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'YAK-9':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=YAK-9`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime14k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime14k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'LA-7':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=LA-7`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime13k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime13k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'ak47':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=ak47`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime12k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime12k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
					case 'katyusha':
					anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=Katyusha`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nime11k =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nime11k)
					xcode.sendMessage(from, pok, image, {caption: mess.success,quoted: mek })
					break
case 'mig-15':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=mig-15`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime10k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime10k)
xcode.sendMessage(from, pok, image, {caption: mess.success, quoted: mek })
break
case 'rpg-7':
anu = await fetchJson(`http://fdciabdul.tech/api/pinterest?keyword=rpg-7`, {method: 'get'})
reply(ind.wait())
var n = JSON.parse(JSON.stringify(anu));
var nime9k =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nime9k)
xcode.sendMessage(from, pok, image, {caption: mess.success, quoted: mek })
break
					case 'getgrup': 
                    case 'getgroup': 
                    case 'getg':
                    case 'gruplist':
                    case 'listgrup':
                    case 'grouplist':
                    case 'listgroup':
			         ingfo = await getGroup(totalchat)
				     let txt = `*List Group*\nJumlah Grup: ${ingfo.length}\n\n`
				     for (let i = 0; i < ingfo.length; i++){
					txt += `Nama grup : ${ingfo[i].subject}\nID grup : ${ingfo[i].id}\nDibuat : ${moment(`${ingfo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\nJumlah Peserta : ${ingfo[i].participants.length}\n\n`
				    }
				    reply(txt)
	                break
case 'group': case 'grup': case 'gc':

if (args[0] === 'buka') {

reply('Sukses Membuka Group')

xcode.groupSettingChange(from, GroupSettingChange.messageSend, false)

} else if (args[0] === 'tutup') {

await xcode.groupSettingChange(from, GroupSettingChange.messageSend, true)

reply('Sukses Menutup Grup')

}

break           
                    case 'tribunews':
					xcode.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api-yogipw.herokuapp.com/api/news/tribun', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.isoDate}\n*Link* : ${i.link}\n*Keterangan* : ${i.contentSnippet}\n=================\n`
					}
					reply(teks.trim())
					
					break 
					case 'republika':
					xcode.updatePresence(from, Presence.composing) 
					data = await fetchJson('https://api-yogipw.herokuapp.com/api/news/republika', {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Kategori* : ${i.categories}\n*Time* : ${i.isoDate}\n*Link* : ${i.link}\n*Keterangan* : ${i.description}\n=================\n`
					}
					reply(teks.trim())
					
					break
case 'tahlil': 
                
				
				
				reply(yag.wait())
				anu = await fetchJson('https://yogipw-api.herokuapp.com/api/muslim/tahlil?apikey=yogipw', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Title : ${i.title}\n*Arab* : ${i.arabic}\n*Terjemah* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
                case 'jadwalsholat': 
                
				
				
				if (args.length < 1) return reply('kotanya mana bang?')
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/jadwalshalat?kota=${body.slice(14)}', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Tanggal : ${i.tanggal}\n*Imsyak* : ${i.imsyak}\n*Shubuh* : ${i.shubuh}\n*Terbit* : ${i.terbit}\n*Dhuha* : ${i.dhuha}\n*Dzuhur* : ${i.dzuhur}\n*Ashar* : ${i.ashr}\n*Magrib* : ${i.magrib}\n*Isya* : ${i.isya}\n=================\n`
				}
				reply(teks.trim())
				break
                case 'kisahnabi': 
                
				
				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/kisahnabi?nabi=${body.slice(11)}')
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi.name}\n*➸ Lahir :* ${anu.result.nabi.kelahiran}\n*➸ Wafat :* ${anu.result.nabi.wafat_usia}\n*➸ Tempat :* ${anu.result.nabi.singgah}\n*➸ Kisah :* ${anu.result.nabi.kisah}`
				xcode.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'ayatkursi': 
		        
				
				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/ayatkursi')
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Arti :* ${anu.result.data.translation}\n*➸ Tafsir :* ${anu.result.data.tafsir}`
				xcode.sendMessage(from, teks, text, {quoted: mek})
				break
		        case 'doaharian': 
		        
				
				
				xcode.updatePresence(from, Presence.composing) 
				reply(yag.wait())
				asu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/doaharian', {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nama Doa:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		        case 'niatsholat':  
		        
				
				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/niatshalat', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		        case 'bacaansholat': 
		        
				
				
				reply(yag.wait())
				anu = await fetchJson('https://api-yogipw.herokuapp.com/api/muslim/bacaanshalat', {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Bacaan : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim()) 
				break
case 'mystat':

 if (!mek.key.fromMe) return reply('Command Khusus Owner !!')

var groups = xcode.chats.array.filter(v => v.jid.endsWith('g.us'))

var privat = xcode.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

	uptime = process.uptime();

timestamp = speed();

totalChat = await xcode.chats.all()

charge = charging ? 'true' : 'false'

listrik = charging ? '⚡' : 'ga di cas'

latensi = speed() - timestamp

	var total = math(`${groups.length}*${privat.length}`)

	teks = `❏ BOT STATISTICS:
├ Group Chats : ${groups.length}
├ Private Chats : ${privat.length}
├ Total Chats : ${totalChat.length}
├ Speed : ${latensi.toFixed(4)} Second
└ Runtime : ${kyun(uptime)}

❏ PHONE STATISTICS:
├ Baterai : ${JSON.stringify(baterai)}% ${listrik}
├ Penggunaan Ram : ${ram2}
├ Platform : ${os.platform()}
├ Hostname : ${os.hostname()}
├ Uptime : ${kyun(os.uptime())}
├ Wa Version: ${xcode.user.phone.wa_version}
├ Os Version: ${xcode.user.phone.os_version}
└ Device Model: ${xcode.user.phone.device_model}`

reply(`${teks}`)

break
case 'dorking':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson('https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}', {method: 'get'})
					hasil = `${anu.result}`
					xcode.sendMessage(from, hasil, text, {quoted: mek})
					 
					break  
				case 'encode64':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}', {method: 'get'})
				xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break 
				case 'decode64':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'decode32':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'encode32':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson('https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'encbinary':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
				//if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'decbinary':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'encoctal':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
			//	//if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					
					break  
				case 'decoctal':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson('https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}', {method: 'get'})
					xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					 
					break  
				case 'becrypt':
				//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson('https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}', {method: 'get'})
				xcode.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				 
				break 
					case 'hashidentifier':
					//if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				////if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson('https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}')
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  xcode.sendMessage(from, hasilhash, text, {quoted: mek})
					  
					  break 
			case 'google':
                const googleQuery = body.slice(8)
               //if (isBanned) return reply('Maaf kamu sudah terbenned!')    
			//	if (!isUser) return reply(mess.only.userB)
				//if (!isPublic) return reply(mess.only.publikG)
				//if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply('*Hasil Pencarian : ${googleQuery}* tidak ditemukan')
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    xcode.sendMessage(from, 'Google Error : ' + e);
                })
                 
                break
                  case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break		
case 'suit': //nyolong dari zenz
                if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
                const userspilih = q
                if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                var computer = Math.random();
                if (computer < 0.34 ) {
                    computer = 'batu';
                } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                } else {
                    computer = 'kertas';
                }
                if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                    } else {
                        reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                    }
                } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`You Lose, Kamu memilih Gunting dan bot memilih Batu, Dan kamu tidak dapat apa-apa`)
                    } else {
                        reply(`Kamu memilih Gunting dan bot Kertas kamu menang!`)
                    }
                } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                        // hasil = 'MENANG';
                        reply(`Kamu memilih Kertas dan bot Batu kamu menang!`)
                    } else {
                        reply(`You Lose, Kamu memilih Kertas dan bot memilih Gunting`)
                    }
                    }
            break
case 'cekmati':
            if (!q) return reply(mess.wrongFormat)
		    predea = await axios.get(`https://api.agify.io/?name=${q}`)
			reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
			break
            case 'creepyfact': // By Kris
                    reply(mess.wait)
                    fetch('https://raw.githubusercontent.com/TheSploit/CreepyFact/main/creepy.txt')
                    .then((res) => res.text())
                    .then(async (body) => {
                        let creepyx = body.split('\n')
                        let creepyz = creepyx[Math.floor(Math.random() * creepyx.length)]
                        reply(creepyz)
                })
                    .catch(async (err) => {
                    console.error(err)
                    reply(`${err}`)
                })
            break
case 'santet':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu']
              terima1 = santet[Math.floor(Math.random() * (santet.length))]
               target = arg.split('|')[0]
               alasan = arg.split('|')[1]
               xcode.sendMessage(from, `Santet terkirim ke @${target.split('@')[0]}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`, text, {quoted: mek, contextInfo:{ mentionedJid: [target]}})
			break
			case 'kutuk':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}kutuk @tag | kalo berak kaga di siram`)
             if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}kutuk @tag | kalo berak kaga di siram`)
             mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              kutuk = ['Sapi','Batu','Babi','Pohon pisang','janda','bangsat','buaya','Jangkrik','Kambbing','Bajing','kang seblak','kang gorengan','kang siomay','badut ancol','Tai Badak','Kebo','Badak','tai kotok','Bwebwek','Orang Suksesss...... tapi boong','Beban Keluarga']
              terima2 = kutuk[Math.floor(Math.random() * (kutuk.length))]
              mentioned = arg.split('|')[0]
              alasan2 = arg.split('|')[1]
              mentions(`Kutukan terkirim ke @${mentioned[0].split('@')[0]}\n\nAlasan: ${alasan2}\n\nJenis Kutukan Yang di Terima:\n*${terima2}*`, mentioned, true)
			break
case 'rptag':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'add':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Usage ${prefix}add nomor`)
				xcode.groupAdd(from, [args[0] + '@s.whatsapp.net'])
				reply(`Sukses`)
				break
			case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				if (args.length < 1) return reply(`Usage ${prefix}kick nomor|tag`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						xcode.groupRemove(from, mentioned[i])
                    }
                    xcode.sendMessage(from, 'bye', text, {quoted: fgclink})
                } else {
                    xcode.groupRemove(from, args[0] + '@s.whatsapp.net')
                    xcode.sendMessage(from, 'bye', text, {quoted:fgclink})
                }
				break
case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targernya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						xcode.groupMakeAdmin(from, mentioned)
					} else {
						reply(`Sukses`)
						xcode.groupMakeAdmin(from, mentioned)
					}
					break
case 'demote':
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag targetnya!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						xcode.groupDemoteAdmin(from, mentioned)
					} else {
						reply(`Sukses`)
						xcode.groupDemoteAdmin(from, mentioned)
					}
					break
case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
case 'ttmp3': case 'tiktokmusic':

if (!q) return reply(`urlnye mana?`)
ttaud = await ttaudio(q)

sendFile(ttaud.result.audio, audio, {mimetype: 'audio/mp4', ptt:true})

break

case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await denz.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
					xcode.sendMessage(from, yeh, text, { quoted: mek })
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					xcode.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
case 'searchmsg':
case 'searchmessage':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
 xtext = args.join(' ')
                cond = xtext.split(" ")
                 a = await xcode.searchMessages(xtext, from, 10, 1)// count 10 
                 fox = '*「 Message Search 」*\n\n'
                num = 0
                for (j of a.messages){
                    num += 1
                    if (j.message.conversation) {
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+xcode.user.jid+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.conversation+'\n    MsgID: '+j.key.id+'\n    Type: conversation\n\n'
                        } 
                    }
                    else if (j.message.extendedTextMessage){
                        if (j.key.fromMe){ 
                            fox += num+'. Sender: '+xcode.user.jid+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        }else{
                            fox += num+'. Sender: '+j.key.participant+'\n    Msg: '+j.message.extendedTextMessage.text+'\n    MsgID: '+j.key.id+'\n    Type: extendedTextMessage\n\n'
                        } 
                    }
                }
                reply(fox)
                break
    case 'upswteks':
    if (!mek.key.fromMe) return
try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
				    xcode.sendMessage('status@broadcast', `${quotedText}`, extendedText)
				reply(`Sukses Up story wea teks ${quotedText}`)
				} catch {
					if (!q) return reply('Isi teksnya!')
xcode.sendMessage('status@broadcast', `${q}`, extendedText)
reply(`Sukses Up story wea teks ${q}`)
}
				    break
    case 'upswimage':
    if (!mek.key.fromMe) return
            if (isQuotedImage) {
            swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await xcode.downloadMediaMessage(swsw)
            xcode.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            xcode.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
    if (!mek.key.fromMe) return
            if (isQuotedVideo) {
            swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await xcode.downloadMediaMessage(swsw)
            xcode.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            xcode.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await xcode.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await xcode.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xcode.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'getpp':
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await xcode.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
xcode.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await xcode.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
xcode.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await xcode.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
xcode.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break
case 'trash':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
sendMediaURL(from, `https://nekobot.xyz/api/imagegen?type=trash&url=${anu.display_url}`, mess.success)
} else {
reply('Reply Imagenya!!')
}
break
case 'getpic':
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await xcode.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						xcode.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
					await xcode.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
case 'ytsearch':
			if (args.length < 1) return reply('Tolong masukan query!')
			const srch = args[0];
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await xcode.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
    		});
    		ytresult += '◩ *self-xcode*'
    		await xcode.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./xcode.jpeg'),quoted: faketroli, caption: ytresult})
			break 
case 'translate':
                        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) {
                            tolang = args[0]
                            entah = body.slice(10+args[0].length+1)
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        } else {
                            tolang = args[0]
                            entah = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                            translate(entah, tolang)
                            .then((res) => { reply(`${res}`) })
                        }
                        break
case 'filmapikterbaru':
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				break
				case 'filmapikdrama':
				film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
				teks = '=================\n'
				for (let i of film.result) {
					teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
					}
				reply(teks.trim())
				break
case 'restart':
if (!mek.key.fromMe) return reply('Lu Sapa?')
reply('_Restarting BOT_')
exec(`node main`)
setTimeout( () => {
					xcode.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					xcode.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					xcode.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					xcode.sendMessage(from, `_Succses Restart BOT_`,text,{quoted: freply }) // ur cods
					},4000) // 1000 = 1s,
break
case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await xcode.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            xcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await xcode.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            xcode.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
            .on('exit', () => {
            xcode.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
case 'deletepc':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/delete?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: freply2})
} else {
reply('Reply Imagenya!!')
}
break
case 'tahta':
if (!q) return reply(ind.wrongf())
sendMediaURL(from, `http://zekais-api.herokuapp.com/hartatahta?text=${q}`, mess.success)
break
case 'sponsburn':
if (!q) return reply(ind.wrongf())
sendMediaURL(from, `http://zekais-api.herokuapp.com/sbburn?text=${q}`, mess.success)
break
case 'presentasi':
if (!q) return reply(ind.wrongf())
sendMediaURL(from, `https://api-yogipw.herokuapp.com/api/imgedit/presentasi?text=${q}`, mess.success)
break
case 'patrik':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            sendMediaURL(from,media,mess.success)
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'sticknime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break
case 'waifu':
				    try {
						axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					xcode.sendMessage(from, buf, image, {quoted: mek,caption: "Nih"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('emror')
					}
					break
					case 'lizard':
             try {
						axios.get(`https://nekos.life/api/v2/img/lizard`).then((res)=>{
						imageToBase64(res.data.url).then((response) => {var buf = Buffer.from(response, 'base64');
					xcode.sendMessage(from, buf, image, {quoted: mek,caption: "Nih"})
					})})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('emror')
					}
					break
case 'randomnime':
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            xcode.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'pinterest':
            reply(mess.wait)
             data = await fetchJson('http://zekais-api.herokuapp.com/pinterest?query=${body.slice(11)}')
               n = JSON.parse(JSON.stringify(data.result));
          	nimek =  n[Math.floor(Math.random() * n.length)];
          	pok = await getBuffer(nimek) 
            xcode.sendMessage(from, pok, image,{quoted:mek,caption:'Nih'})
            break
case 'loli':
anu = await fetchJson('https://fdciabdul.tech/api/pinterest?keyword=loli', {method: 'get'})
reply(yag.wait())
var n = JSON.parse(JSON.stringify(anu));
var nimek =  n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
xcode.sendMessage(from, pok, image, {quoted: freply,  caption: `nih`})
break 
case 'quotemaker':
					gh = body.slice(12)
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					xcode.sendMessage(from, buffer, image, {quoted: mek})
					break 
case 'sider':
infom = await xcode.messageInfo(from, m.quoted.id)
hemm = infom.reads
readdin = hemm.map(v => v.jid)

stamp = hemm.map(v => v.t)
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
}
 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

 // ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();

// gabungkan ke dalam variable time
var time = hour + ':' + min + ':' + sec ;
return time;
}
teksx = `Wayoloh, ngeread mulu :\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `~> @${i.jid.split('@')[0]} > ${toTime(i.t, true)}\n`
 }
xcode.sendMessage(from, teksx, text, { quoted: mek, contextInfo: { mentionedJid: readdin }})
break
case 'magik':
var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
						reply(mess.wait)
						ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						owgi = await xcode.downloadAndSaveMediaMessage(ger)
						data = await imgbb("b0fc132474ca03ee7898fd5cac7275fe", owgi)
						buff = await getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${data.display_url}&intensity=${args[0]}`)
						xcode.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					} else {
						reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}magik intensitynya`)
					}
					break 
case 'changemymind':
if (!q) return reply(mess.wrongFormat)
reply(yag.wait())
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
break
case 'kannagen':
if (!q) return reply(mess.wrongFormat)
reply(yag.wait())
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
break
case 'triggered':
var imgbb = require('imgbb-uploader')
if ((isMedia && !fakevn.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
reply(yag.wait())
owgi = await xcode.downloadAndSaveMediaMessage(ger)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
tggrd = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tggrd}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
xcode.sendMessage(from, nobg, sticker, {quoted: freply})
fs.unlinkSync(rano)
})                                    
} else {
reply('Gunakan foto!')
}
break 
case 'minato':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					xocde.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					break
case 'kucing':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Kucing`, {method: 'get'})
										ku = JSON.parse(JSON.stringify(anu));
					ci =  ku[Math.floor(Math.random() * ku.length)];
					nye = await getBuffer(ci)
					xocde.sendMessage(from, nye, image, { caption: 'kucing', quoted: mek })
					break
					case 'aot':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+attack+on+titan`, {method: 'get'})
					ti = JSON.parse(JSON.stringify(anu));
					tan =  ti[Math.floor(Math.random() * ti.length)];
					nye = await getBuffer(tan)
					xocde.sendMessage(from, nye, image, { caption: 'Nih', quoted: mek })
					break
					case 'tokyoghoul':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Tokyo+Ghoul`, {method: 'get'})
						tokyo = JSON.parse(JSON.stringify(anu));
					ghoul =  tokyo[Math.floor(Math.random() * tokyo.length)];
					nye = await getBuffer(ghoul)
					xocde.sendMessage(from, nye, image, { caption: 'Nih', quoted: mek })
					break
					case 'sagiri':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+Izumi+Sagiri`, {method: 'get'})
						sag = JSON.parse(JSON.stringify(anu));
					iri =  sag[Math.floor(Math.random() * sag.length)];
					nye = await getBuffer(iri)
					xocde.sendMessage(from, nye, image, { caption: 'SAGIRI CHAN', quoted: mek })
					break
					case 'cantik':
					  case 'cans':
					case 'cecen':
					  case 'cecan':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Cewe+Cantik`, {method: 'get'})
						ce = JSON.parse(JSON.stringify(anu));
					cen =  ce[Math.floor(Math.random() * ce.length)];
					nye = await getBuffer(cen)
					xocde.sendMessage(from, nye, image, { caption: 'Nih', quoted: mek })
					break
					case 'cogan':
					    case 'tampan':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Orang+Ganteng`, {method: 'get'})
						cog = JSON.parse(JSON.stringify(anu));
					an =  cog[Math.floor(Math.random() * cog.length)];
					nye = await getBuffer(an)
					xocde.sendMessage(from, nye, image, { caption: 'Gans kek Gua:v', quoted: mek })
					break
					case 'chika':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=FujiwaraChika`, {method: 'get'})
					chi = JSON.parse(JSON.stringify(anu));
					ka =  chi[Math.floor(Math.random() * chi.length)];
					nye = await getBuffer(ka)
					xocde.sendMessage(from, nye, image, { caption: '*CHIKA-SAN*', quoted: mek }) 
					break
				    case 'kurumi':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					xocde.sendMessage(from, nye, image, { caption: '*kurumi-chan*', quoted: mek }) 
					break 
				case 'kaneki':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=kaneki`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					xocde.sendMessage(from, nye, image, { caption: '*KANEKI*', quoted: mek }) 
					break 
				case 'touka':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					xocde.sendMessage(from, nye, image, { caption: '*TOUKA*', quoted: mek })
					break 
case 'neko':
  case 'nekonime':
						anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Anime+Neko`, {method: 'get'})
										ne = JSON.parse(JSON.stringify(anu));
					ko =  ne[Math.floor(Math.random() * ne.length)];
					nye = await getBuffer(ko)
					xocde.sendMessage(from, nye, image, { caption: 'NIH NEKO', quoted: mek })
					break
case 'trumptweet':
if (!q) return reply(mess.wrongFormat)
reply(mess.wait)
anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${q}`)
sendMediaURL(from, anu.message, mess.success)
break
case 'nulis':
case 'tulis':
if (args.length < 1) return reply('Yang mau di tulis apaan?')
teks = args.join(' ')
reply(mess.wait)
nulis = encodeURIComponent(teks)
res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
buff = Buffer.from(res.data.result.split(',')[1], 'base64')
xcode.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case 'wasted':
var imgbb = require('imgbb-uploader')
if ((isMedia && !freply.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(ind.wait)
owgi = await xcode.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
sket = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${sket}`
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
xcode.sendMessage(from, nobg, sticker, {
quoted: freply
})
fs.unlinkSync(rano)
 })

} else {
reply('Gunakan foto!')
}
break 
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply(yag.wait())
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay)
break
case 'attp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply(yag.wait())
bebeb = `http://zekais-api.herokuapp.com/attg?text=${woy}`
sendStickerFromUrl(from, bebeb)
break
case 'lolistick': case 'stickloli':
reply(yag.wait()) 
fetchJson(`http://zekais-api.herokuapp.com/randomloli`).then(res =>  {
console.log(res)
sendStickerFromUrl(from, res.result)
})
break
case 'get':
if (!q) return reply(mess.wrongFormat)
axios.get(`${args[0]}`).then(data => reply(JSON.stringify(data.data, null, 3)))
break
case 'listonline': 
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(xcode.chats.get(ido).presences), xcode.user.jid]
			    xcode.sendMessage(from, '*CIE NYIMAK AJE LU*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*Kang Minyak*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
case 'smeme': case 'stickmeme':
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  xcode.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
case 'listadmin':
if (!isGroup) return reply(yag.groupo())
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break 
case 'wanted':
reply(yag.wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
tels = body.slice(8)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/wanted?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: freply2})
} else {
reply('Reply Imagenya!!')
}
break
case 'rotate':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
owgi = await xcode.downloadAndSaveMediaMessage(ted)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
hehe = await getBuffer(`http://zekais-api.herokuapp.com/rotate?url=${anu.display_url}`)
xcode.sendMessage(from, hehe, image, {quoted: freply})
} else {
reply('Reply Imagenya!!')
}
break
case 'stickerlist': case 'liststicker':
teks = '*List Sticker :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
xcode.sendMessage(from, teks.trim(), extendedText, { quoted: fvideo, contextInfo: { "mentionedJid": setiker } })
break
case 'listvn': case 'vnlist':
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${audionye.length}*`
xcode.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": audionye } })
break
case 'imagelist': case 'listimage':
teks = '*List Image :*\n\n'
for (let awokwkwk of gambarnye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${gambarnye.length}*`
xcode.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": gambarnye } })
break
case 'videolist': case 'listvideo':
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonye.length}*`
xcode.sendMessage(from, teks.trim(), extendedText, { quoted: freply, contextInfo: { "mentionedJid": videonye } })
break
case 'hode':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xcode.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fgclink})
						fs.unlinkSync(ran)
					})
				break
         case 'hode-v':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xcode.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: fgclink})
						fs.unlinkSync(ran)
					})
				break
case 'reverse':

	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'volume':

	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'budek':

	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -filter:a "volume=50" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break

case 'imut':

	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

	ran = getRandom('.mp3')

	exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

	})

break
case 'nightcore':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await xcode.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*${args[0]} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
xcode.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})
fs.unlinkSync(ran)
})
break 
case 'bass': 

req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

random = getRandom('.mp3')

exec(`ffmpeg -i ${media} -af equalizer=f=${req}:width_type=o:width=2:g=20 ${random}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(random)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(random)

})

break

case 'vibra': 

var req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'trigger':

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'tempo':

 var req = q

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: false, quoted: mek})

fs.unlinkSync(ran)

})

break

case 'robot':

encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

	media = await xcode.downloadAndSaveMediaMessage(encmedia)

ran = getRandom('.mp3')

exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {

fs.unlinkSync(media)

if (err) return reply('Error!')

res = fs.readFileSync(ran)

xcode.sendMessage(from, res, audio, { mimetype: "audio/mp4", ptt: true, quoted: mek})

fs.unlinkSync(ran)

})

break
case 'vibrav':     
var req = args.join(' ')            
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						xcode.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
					break
case 'triggervid':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await xcode.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=3:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
xcode.sendMessage(from, hah, audio, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
case 'tupai':
if (!isQuotedAudio) return reply('Reply audio nya oom')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await xcode.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
xcode.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'blub':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await xcode.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
xcode.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if (!isQuotedAudio) return reply('Reply audio nya om')
reply(mess.wait)
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
media = await xcode.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
xcode.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
fs.unlinkSync(ran)
 })
  break
				case 'ghost':
	                 if (!isQuotedAudio) return reply('Reply audio nya om')
	             reply(mess.wait)
					encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						 xcode.sendMessage(from, hah, audio,{ mimetype: "audio/mp4", ptt: true, quoted: mek})
						fs.unlinkSync(ran)
					    })
				       break
case 'earrape':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument || args.length < 1){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af volume=${args[0]} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'apulsator':
            if (isQuotedAudio || isQuotedVideo || isQuotedDocument){
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "apulsator=mode=sine:hz=3:width=0.1:offset_r=0" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek, sendEphemeral: true})
            fs.unlinkSync(ran)
            })
            } else {
            	reply(mess.wrongFormat)
            }
            break
case 'tomp3':
case 'tovn':
	if (!isQuotedAudio || isQuotedVideo) return reply('Reply audio/video nya om')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xcode.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						xcode.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', duration: 999999999, quoted: mek, ptt:false})
						})
						break
case 'fast-v':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow-v':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse-v':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'fast':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, audio, { mimetype: 'video/mp4', ptt: true, quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return reply('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await xcode.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return reply(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            xcode.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
            fs.unlinkSync(ran)
            })
            break
//==============================================//
				default:
			if (isGroup && !isCmd && budy != undefined) {
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			            e = String(e)
			if (e.includes('this.isZero')){
return
}
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()