/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const os = require("os");
const ezio = require("../events");
const { runtime } = require("../lib/Function");
const lang = ezio.getString("system_stats");
const speed = require("performance-now");

var ov_time = new Date().toLocaleString("EN", { timeZone: "Asia/Colombo" }); // .split(' ')[1]

ezio.addCommand(
  {
    pattern: ["alive", "bot", "system_status"],
    desc: lang.ALIVE_DESC,
    sucReact: "🥰",
    category: ["system", "all"],
  },
  async (message, client) => {
    try {
      let timestampe = speed();
      let Wspeed = speed() - timestampe;
      const Footer = ezio.config.exif.footer;
      const Content = `┌─❖
_____مرحبا_______
└┬❖ 「 ${message.client.pushName} 」
┌┤✑  انا اونلاين يمكنك استتخدام البوت🎉
││✑  اهلا!!
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙
│✙ سرعة البوت: ${Wspeed.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ اسم البوت: Whats_Bot_MD
│✙ اسم صاحب البوت : Dark_Ezio
│🤵 �رقم صاحب البوت: ${ezio.config.exif.owner[0]}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│💹عدد مستخدمين البوت: ${global.mydb.users.length}
│☑️ 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁𝘀 : ${global.mydb.hits}
└┬──────────────┈ ⳹
 │✑  D & T : ${ov_time}
 │✑  Please Select The Button Below.
 └───────────────┈ ⳹`;

      const buttons = [
        { buttonId: ".extra_urls", buttonText: { displayText: "روابط مجموعاتنا" }, type: 1, },
        { buttonId: ".creater", buttonText: { displayText: "معلومات البوت والصانع" }, type: 1, },
        { buttonId: ".menu", buttonText: { displayText: "قائمة الاوامر }, type: 1, },
      ]

      // const template_Buttons = [
      //   {
      //     urlButton: {
      //       displayText: "📰 Subscrib On YouTube 📍",
      //       url: "https://www.youtube.com/channel/UCeDeaDD8Y1JQ",
      //     },
      //   },
      //   {
      //     urlButton: {
      //       displayText: "📟 My Blogs",
      //       url: "https://aidarkezio.github.io/",
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "القائمة",
      //       id: ".all-menu",
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "لائحة الوامر",
      //       id: `.all-list`,
      //     },
      //   },
      //   {
      //     quickReplyButton: {
      //       displayText: "👨🏼‍💻 Creater & Owner 👨🏼‍💻",
      //       id: `.creater`,
      //     },
      //   },
      // ];

    const templateButtons = {
      image: { url: ezio.config.image.url.D_E_TMB },
      caption: Content,
      footer: ezio.config.exif.footer,
      buttons,
    };
    // const templateButtons = {
    //   templateButtons: template_Buttons,
    //   footer: Footer,
    //   image: { url: ezio.config.image.url.D_E_TMB }, 
    //   caption: Content
    // };
    await client.sendMessage( message.from, templateButtons, { quoted: message })
    global.catchError = false;
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
