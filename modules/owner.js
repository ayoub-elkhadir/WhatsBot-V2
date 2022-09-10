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

const ezio = require("../events");
const lang = ezio.getString("whats_bot");
const fs = require("fs");
const path = require("path");

ezio.addCommand(
  {
    pattern: ["owner", "creater"],
    desc: "It's send Owner Detals",
    sucReact: "🚚",
    category: ["all", "system"],
  },
  async (message, client) => {
    try {
      const buttons = [
        { buttonId: ".donate", buttonText: { displayText: "💰 Donate 💰" }, type: 1, },
        { buttonId: ".extra_urls", buttonText: { displayText: "روابط الجروبات" }, type: 1, },
      ];
      const text = `------- Owner Detals -------

⚜ Name: ayoub .
⚜ Number: Wa.me/212618904019
⚜ Company: moroco taza
⚜ Web Site: https://aidarkezio.github.io/
⚜ Youtube: https://www.youtube.com/channel/UCeDeaDD8dpdMT2gVHY1JQ
⚜ GitHub: https://www.github.com/aidaio
⚜ FaceBook: https://fb.com/pha.sua (Potha Sra)
⚜ Instagram: https://instagram.com/subadrtha (Potha Sudra)
⚜ Twitter: https://twitter.com/ba (BroSubadra)

----------------------------

كيف حالك

----------------------------
`;

    const buttonMessage = {
      image: { url: "https://avatars.githubusercontent.com/u/87601796?v=4" },
      caption: text,
      footer: ezio.config.exif.footer,
      buttons,
      linkPreview: {
        "canonical-url": "https://aidarkezio.github.io/",
        "matched-text": "https://aidarkezio.github.io/",
        title: "Dark Ezio",
        description: "This is a WhatsApp user bot. \n\nAlive",
        jpegThumbnail: ezio.config.image.encd.D_E_ADEC,
      },
    };
    await client.sendMessage( message.from, buttonMessage, { quoted: message }, { adReply: true })
    global.catchError = false;
    
    } catch (error) {
      global.catchError = true;
      return await client.sendErrorMessage( message.from, error, message.key, message );
    }
  }
);
