const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

const ytdl = require('ytdl-core');


client.on('ready', () => {
  console.log
  (
    "▓█████▄  ▄▄▄       ██▀███   ██ ▄█▀    "
    
  );
});

client.on('ready', () => {
  console.log
  (
    "▒██▀ ██▌▒████▄    ▓██ ▒ ██▒ ██▄█▒ "
    
  );
});
client.on('ready', () => {
  console.log
  (
    "░██   █▌▒██  ▀█▄  ▓██ ░▄█ ▒▓███▄░     "
    
  );
});
client.on('ready', () => {
  console.log
  (
    "░▓█▄   ▌░██▄▄▄▄██ ▒██▀▀█▄  ▓██ █▄     "
    
  );
});
client.on('ready', () => {
  console.log
  (
    "░▒████▓  ▓█   ▓██▒░██▓ ▒██▒▒██▒ █▄    "
    
  );
});
client.on('ready', () => {
  console.log
  (
    " ▒▒▓  ▒  ▒▒   ▓▒█░░ ▒▓ ░▒▓░▒ ▒▒ ▓▒"
    
  );
});
client.on('ready', () => {
  console.log
  (
    " ░ ▒  ▒   ▒   ▒▒ ░  ░▒ ░ ▒░░ ░▒ ▒░    "
    
  );
});
client.on('ready', () => {
  console.log
  (
    " ░ ░  ░   ░   ▒     ░░   ░ ░ ░░ ░ "
    
  );
});
client.on('ready', () => {
  console.log
  (
    "   ░          ░  ░   ░     ░  ░       "
    
  );
});
client.on('ready', () => {
  console.log
  (
    " ░                                    "
    
  );
});
client.on('ready', () => {
  client.user.setActivity('shelp', { type: 'PLAYING'}).catch(console.error);

})


client.on('message', message => {
  if (message.content === 'slist') {
    const embed = new MessageEmbed()
      .setTitle('قائمة  الأغاني')
      .setColor(0x11AABB)
      .addFields(
        { name: 'اكتب  رقم  الأغنية  وراح  تشتغل  معك', value: 'تأكد  من  كتابة  s  قبل  أي  رقم' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B   ليلة تمرين   \u200b', value: '1', inline: true },
        { name: '\u200B   عطني المحبه   \u200B', value: '2', inline: true },
        { name: '\u200B   اليوم يمكن تقولي   \u200B', value: '3', inline: true },
        { name: '\u200B   انتهينا   \u200B', value: '4', inline: true },
        { name: '\u200B   مرحبا بك يا هلا   \u200B', value: '5', inline: true },
        { name: '\u200B   ماتقول لنا صاحب   \u200B', value: '6', inline: true },
        { name: '\u200B   لا وعد   \u200B', value: '7', inline: true },
        { name: '\u200B   تعلق قلبي   \u200B', value: '8', inline: true },
        { name: '\u200B   من بعد مزح ولعب   \u200B', value: '9', inline: true },
        { name: '\u200B   احرجتني   \u200B', value: '10', inline: true },
        { name: '\u200B   أنا راجع أشوفك    \u200B', value: '11', inline: true },
        { name: '\u200B   اغنم زمانك    \u200B', value: '12', inline: true },
        { name: '\u200B   احبك لو تكون حاضر    \u200B', value: '13', inline: true },
        { name: '\u200B   مقادير    \u200B', value: '14', inline: true },
        { name: '\u200B   خليني فعيونك هوا    \u200B', value: '15', inline: true },
        { name: '\u200B   وردك يا زارع الورد    \u200B', value: '16', inline: true },
        { name: '\u200B   زمان الصمت    \u200B', value: '17', inline: true },
        { name: '\u200B   اعترف لك    \u200B', value: '18', inline: true },
        { name: '\u200B   صعب السؤال    \u200B', value: '19', inline: true },
        { name: '\u200B   انا العاشق    \u200B', value: '20', inline: true },
        { name: '\u200B   قصت ظفايرها    \u200B', value: '21', inline: true },
        { name: '\u200B   جتني تقول    \u200B', value: '22', inline: true },
        { name: '\u200B   مهتم    \u200B', value: '23', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content === 'slist2') {
    const embed = new MessageEmbed()
      .setTitle('قائمة  الأغاني')
      .setColor(0x11AABB)
      .addFields(
        { name: 'اكتب  رقم  الأغنية  وراح  تشتغل  معك', value: 'تأكد  من  كتابة  s  قبل  أي  رقم' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B   كلام البارح اتغير طلال     \u200B', value: '24', inline: true },
        { name: '\u200B   فرح العمر     \u200B', value: '25', inline: true },
        { name: '\u200B   عندك امل    \u200B', value: '26', inline: true },
        { name: '\u200B   الله يرد خطاك   \u200B', value: '27', inline: true },
        { name: '\u200B   قولوا للغالي    \u200B', value: '28', inline: true },
        { name: '\u200B   ظالم ولكن    \u200B', value: '29', inline: true },
        { name: '\u200B   طاول الصبر    \u200B', value: '30', inline: true },
        { name: '\u200B   أغراب    \u200B', value: '31', inline: true },
        { name: '\u200B   نام الطريق    \u200B', value: '32', inline: true },
        { name: '\u200B   أبتدت تحلى الحياة    \u200B', value: '33', inline: true },
        { name: '\u200B   مين فتن بيني وبينك    \u200B', value: '34', inline: true },
        { name: '\u200B   سويعات الاصيل    \u200B', value: '35', inline: true },
        { name: '\u200B   مر بي    \u200B', value: '36', inline: true },
        { name: '\u200B   أجاذبك الهوى    \u200B', value: '37', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content === 'alist') {
    const embed = new MessageEmbed()
      .setTitle('قائمة  أغاني عبادي الجوهر')
      .setColor(0x11AABB)
      .addFields(
        { name: 'اكتب  رقم  الأغنية  وراح  تشتغل  معك', value: 'تأكد  من  كتابة  a  قبل  أي  رقم' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B    من بعد مزح ولعب    \u200b', value: '1', inline: true },
        { name: '\u200B   عيونك آخر آمالي   \u200B', value: '2', inline: true },
        { name: '\u200B   تدرين وأدري بنفترق   \u200B', value: '3', inline: true },
        { name: '\u200B   قالوا ترى   \u200B', value: '4', inline: true },
        { name: '\u200B   يا شوق انا قلبي   \u200B', value: '5', inline: true },
        { name: '\u200B   كلمة ولو جبر خاطر   \u200B', value: '6', inline: true },
        { name: '\u200B   أحبك لو تكون حاضر   \u200B', value: '7', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content === 'klist') {
    const embed = new MessageEmbed()
      .setTitle('قائمة  أغاني خالد عبدالرحمن')
      .setColor(0x11AABB)
      .addFields(
        { name: 'اكتب  رقم  الأغنية  وراح  تشتغل  معك', value: 'تأكد  من  كتابة  k  قبل  أي  رقم' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B    خذني بقايا جروح    \u200b', value: '1', inline: true },
        { name: '\u200B   وشلون مغليك   \u200B', value: '2', inline: true },
        { name: '\u200B   الذاهبه   \u200B', value: '3', inline: true },
        { name: '\u200B   يا صاحبي   \u200B', value: '4', inline: true },
        { name: '\u200B   تقوى الهجر   \u200B', value: '5', inline: true },
        { name: '\u200B   انتي اجمل   \u200B', value: '6', inline: true },
        { name: '\u200B   العطا   \u200B', value: '7', inline: true },
        { name: '\u200B   يا ظالمة   \u200B', value: '8', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content === 'xlist') {
    const embed = new MessageEmbed()
      .setTitle('قائمة جانبية')
      .setColor(0x11AABB)
      .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B    من حب من قلب ماهون    \u200b', value: '1', inline: true },
        { name: '\u200B   خلصت من جملة الخلان   \u200B', value: '2', inline: true },
        { name: '\u200B   حد مثلي   \u200B', value: '3', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content === 'shelp') {
    const embed = new MessageEmbed()
      .setTitle('قائمة  الأوامر')
      .setColor(0x11AABB)
      .addFields(
        { name: 'اكتب الأمر وراح يشتغل معك', value: 'تأكد من كتابة s قبل أي أمر' },
        { name: '\u200B', value: '\u200B' },
        { name: '\u200B   shelp   \u200b', value: 'يعطيك القائمة ذي', inline: true },
        { name: '\u200B   slist   \u200B', value: 'لستت أغاني المرحوم طلال مداح (يكتب بعدها:1 أو 2إلخ...)', inline: true },
        { name: '\u200B   alist   \u200B', value: 'لستت أغاني عبادي الجوهر (يكتب بعدها:1 أو 2إلخ...)', inline: true },
        { name: '\u200B   klist   \u200B', value: 'لستت أغاني خالد عبدالرحمن (يكتب بعدها:1 أو 2إلخ...)', inline: true },
        { name: '\u200B   s او k او a (يتبعها رقم الأغنية)   \u200B', value: 'لتشغيل الأغنية المختارة من اللسته', inline: true },
        { name: '\u200B   splay   \u200B', value: 'تشغيل اغنية من اليوتيوب عن طريق رابط', inline: true },
        { name: '\u200B   sskip   \u200B', value: 'تسكيب اغنية ', inline: true },
        { name: '\u200B   sdis   \u200B', value: 'إيقاف البوت', inline: true },
      )
    message.channel.send(embed);
  }
  if (message.content == "s1") {
    if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
    if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

    message.member.voice.channel.join().then(VoiceConnection => {
        VoiceConnection.play(ytdl("https://youtu.be/LJkLqG5Huls")).on("finish", () => VoiceConnection.disconnect());
        message.reply("شغال...");
    }).catch(e => console.log(e))
};
if (message.content == "s2") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Q-uoqfEPjGw")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s3") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/xPujFVqw43c")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s4") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/ido9UlVCsVQ")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s5") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/xXPzsq2j0Gs")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s6") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/ydA5g9AKXnM")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s7") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/GHmO5CMR5r8")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s8") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/tO3e0jIfwls")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s9") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/iCNPU71fjMQ")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s10") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/xm8ssMV7V80")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s11") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/vxemyk0BDxM")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s12") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/qZS_J6JLQC8")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s13") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Tilf7ZuYS5E")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s14") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/6o2r-6L6pTY")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s15") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/usTenpr7Vbk")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s16") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/M6LDok-aN34")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s17") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/8H3an-qzJfA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s18") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/kPUXo2Vuvwk")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s19") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/B65s1h-Wt8E")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s20") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/iguiWTPCLAA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s21") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Hfyw3IUbQYE")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s22") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/jB2gSM_MDt4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s23") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/MnVdicNAXHc")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s24") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/yKUj72e1T6Y")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s25") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/zb-jTZMwsvA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s26") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/UYfIctTUjG0")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s27") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/N7vJLzCP1AI")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s28") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/ItdePts9mjg")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s29") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/zRTIi-YWY9U")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s30") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/jPg25kpiOH4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s31") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/gdsGaNMGXv4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s32") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/F4saYZDQszQ")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s33") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/cJaAF7f1yrA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s34") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/zCZ4Pwao5WE")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s35") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/CFgTwkP_xYo")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s36") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/7dDavyj4tUI")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "s37") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/KVGFfd65TKQ")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};

if (message.content == "a1") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/axS66pSVyas")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a2") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Nq9ZH2KtugA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a3") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/FHtvNU_X2Xk")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a4") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/CsPC9pUOXKo")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a5") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/F0uQiVwwaBo")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a6") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/cv0XDa4mC9U")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "a7") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/OWpnybV2-JE")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};

if (message.content == "k1") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/FHkPM_oeETg")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k2") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/C1wrjE4FS2Q")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k3") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Z7b37zgCQow")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k4") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/l_iU1Jlnajg")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k5") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/Tr3A9vUDYg4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k6") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/zUt-qN7nPN4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k7") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/RH6Ov-cqofY")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "k8") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/MqE_IBIz0O8")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};

if (message.content == "x1") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/6mnq6pG8fHA")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "x2") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/f3WtJXnZ5q4")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "x3") {
  if (!message.member.voice.channel) return message.reply("لازم تكون في روم");
  if (message.guild.me.voice.channel) return message.reply("فيه أغنية شغالة حالياّ");

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.play(ytdl("https://youtu.be/wOjmayCQTC8")).on("finish", () => VoiceConnection.disconnect());
      message.reply("شغال...");
  }).catch(e => console.log(e))
};
if (message.content == "sdis") {

  message.member.voice.channel.join().then(VoiceConnection => {
      VoiceConnection.disconnect();
      message.reply("تم");
  }).catch(e => console.log(e))
};
});

client.login(process.env.token);