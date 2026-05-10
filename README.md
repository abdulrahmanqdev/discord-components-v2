<div align="center">

# 🤖 discord components v2

<p align="center">
  <img src="https://img.shields.io/badge/Discord.js-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"/>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/abdulrahmanqdev/discordjs?style=flat-square&color=yellow"/>
  <img src="https://img.shields.io/github/forks/abdulrahmanqdev/discordjs?style=flat-square&color=green"/>
  <img src="https://img.shields.io/github/last-commit/abdulrahmanqdev/discordjs?style=flat-square&color=orange"/>
</p>

<p align="center">
  <strong>Discord botunuz için en güncel v14 özellikleri ve Components V2 desteğiyle hazırlanmış modüler altyapı.</strong><br/>
  Slash komutları, gelişmiş event handler ve MongoDB desteğiyle modern bot geliştirme deneyimi.
</p>

</div>

---

## 📖 Genel Bakış

**discordjs**, en güncel Discord.js v14 özelliklerini ve yeni nesil **Components V2** (Container, Section, Media Gallery vb.) yapısını destekleyen, modüler ve yüksek performanslı bir bot altyapısıdır. Dahili slash komut sistemi, gelişmiş event handler ve MongoDB entegrasyonu ile birlikte gelir. Modern ve şık bir Discord botu geliştirmek isteyenler için temiz ve profesyonel bir başlangıç noktası sunar.

---

## ✨ Özellikler

- ⚡ Discord.js v14 desteği
- 🎨 **Components V2 Desteği** (Container, Section, Accessory, Media Gallery)
- 🗂️ Modüler slash komut yapısı (Public & Mod)
- 📡 Gelişmiş event handler sistemi
- 🖱️ Windows için hazır `start.bat` başlatma dosyası

---

## 🛠️ Teknoloji Yığını

| Teknoloji | Amaç |
|---|---|
| Discord.js v14 | Discord API Kütüphanesi |
| Node.js | Çalışma Ortamı |
| JavaScript | Dil |
| MongoDB | Veritabanı |

---

## 🚀 Başlarken

### Gereksinimler
- Node.js `>= 18.x`
- [Discord Developer Portal](https://discord.com/developers/applications) üzerinden bir bot token'ı
- Firebase projesi ve `serviceAccountKey.json` dosyası

### Kurulum

```bash
git clone https://github.com/abdulrahmanqdev/discord-components-v2.git
cd discordjs
npm install
```

### Yapılandırma

`Source/Config/botConfig.js` dosyasını düzenle:

```js
module.exports = {
  developersID: ["developerId"],
  token: "token",

  playings: ["Lose bot #SOON"],
  prefixs: ["!"],
}
```

### Çalıştırma

**Linux / Mac:**
```bash
node index.js
```

**Windows:**
```
start.bat dosyasına çift tıkla
```

---

## 📁 Proje Yapısı

```
discordjs/
├── Source/
│   ├── Config/
│   │   └── botConfig.js          # Bot yapılandırması (token, prefix vb.)
│   ├── Events/
│   │   └── bot Events/           # Discord olayları
│   ├── Handlers/                 # Handler dosyaları
│   └── SlashCommands/
│       ├── Public/               # Herkese açık komutlar
│       └── mod System/            # Moderasyon komutları
├── index.js                      # Ana giriş noktası
├── start.bat                     # Windows başlatma dosyası
├── package.json
└── LICENSE
```

---

## 🤝 Katkıda Bulunma

1. Repoyu fork'la
2. Yeni komut veya özellik ekle
3. Pull Request aç

---

## 👤 Geliştirici

**@abdulrahmanqdev**
