const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348146248392";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_22_12_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICA5MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjExLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDg5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODksXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzAsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNyxcbiAgICAgICAgOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFUdm41VklWWWgzZVZDTy9zcUF0bUhmYS8vMkR0NTgwbktFRGRvUTRhZkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE0NjI0ODM5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzNGOUNCMkZEOUJDNEYxMjhCODAwMTFGMTZDODU2Q0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1NjI5NzI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVXUE1FYVQ5UUlLUS1HcGhGa0l4b1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODRjODkwNjItYmZlNi00NmFkLTg2ZjUtMjU0NTUwOWI3MDcwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMixcbiAgICAgIDIzMSxcbiAgICAgIDU2LFxuICAgICAgOTksXG4gICAgICAyMDIsXG4gICAgICAxMzcsXG4gICAgICAyMSxcbiAgICAgIDE1NixcbiAgICAgIDQ1LFxuICAgICAgMTEwLFxuICAgICAgMTg0LFxuICAgICAgMTI1LFxuICAgICAgMjAyLFxuICAgICAgNzgsXG4gICAgICA4MSxcbiAgICAgIDI3LFxuICAgICAgMTgwLFxuICAgICAgMTQwLFxuICAgICAgNjksXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMjYsXG4gICAgICA5NCxcbiAgICAgIDI1NSxcbiAgICAgIDEyMCxcbiAgICAgIDE4MixcbiAgICAgIDc3LFxuICAgICAgMTYzLFxuICAgICAgOTgsXG4gICAgICAxMDcsXG4gICAgICAxMDQsXG4gICAgICAxMzUsXG4gICAgICAxODAsXG4gICAgICAxMDgsXG4gICAgICAyNTEsXG4gICAgICA1OCxcbiAgICAgIDE1NSxcbiAgICAgIDczLFxuICAgICAgNzIsXG4gICAgICAyMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1o3WENBUTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNDYyNDgzOTI6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODg5NDUwNjQ5Mzk2NDA6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSDB0c01FRUplM3pyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRFN2FHZTBjN3BGK0ovZnlJRFQxMmVjQ3owUDdiNFRyc3F4S3FueHp6bTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiU1F1M0t6RFFWTmJ6VHVhYmxaTU5mOXBMZEwvVlR4Q0F5RmdNZUNXWGFsNTdhRXg4VjlkTEc0UFVNZ2VtK3U1Z01BWFlueTBzckRRNTB1UmJETlpjRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWjREMHc4OG9aR2VzcU91bzAxUFhUYldseDg0Z2VPUENaU3VJOHRvUjRjQWpYSkVqWTJkWjArN2VpaFNlZEhDSnNraFVzY0lONkVXV0NScEZtc1JzZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NjI0ODM5Mjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU2Mjk3MjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
