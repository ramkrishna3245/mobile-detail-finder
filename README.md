# 📱 Mobile Detail Finder — Mini App Starter (bina backend)

Bana diya hai: `index.html` + `series.js` — 100% static, koi server nahi.

## Mujhe tumse kya chahiye (aur kya NAHI)

| Chahiye | Nahi chahiye |
|---|---|
| GitHub repo me ye 2 files push karna (tum karoge, 2 min) | ❌ Telegram login/OTP/password — kabhi kisi ko mat dena, mujhe bhi nahi |
| BotFather me `/newbot` → `/newapp` (tumhare Telegram me, 2 min) | ❌ Koi API key abhi nahi |
| Monetag SmartLink URL (jab earning lagani ho) | ❌ Paise — sab free tier pe chalega |

## Kaise live karna hai (10 min)

1. **GitHub:** `mobile-finder` folder ki files apne repo me dalo → Settings → Pages → Deploy from branch → `main` → `/mobile-finder` (ya root). HTTPS link milega: `https://tumhara-username.github.io/.../index.html`
2. **Test:** Wo link normal browser me kholo — number dal ke dekho (9811xxxxx try karo).
3. **Telegram:** @BotFather → `/newbot` (naam do) → `/newapp` → bot select karo → title + wahi HTTPS link paste karo → `t.me/tumhara-bot/app-naam` mil jayega. Mini App live!
4. **Menu button (optional):** `/setmenubutton` → bot select → link + naam ("Finder 🔍").

## Monetag earning lagana (jab chaho)

- `index.html` me `SMARTLINK_URL = ""` hai — apna SmartLink (publishers.monetag.com → Direct Link) paste karte hi "Recharge Offers" button dikhne lagega.
- Popunder/IPP/Vignette/Push chahiye to dashboard se MultiTag code copy karke `<head>` me paste karna. Guide: help.monetag.com → collection `11021564-telegram-mini-apps`.

## ⚠️ Data wali sachchai (zarur padho)

- `series.js` me abhi ~35 **sample** series hain — demo ke liye kaafi, production ke liye nahi.
- **MNP note:** series sirf ORIGINAL operator batata hai. Port hone ke baad operator alag ho sakta hai — ye app me pehle se likha hai, mat hatana (trust ke liye).
- **Full data:** DoT/TEC ki public "mobile number series allocation" list se 4-digit series nikal ke isi format me add karte jao:
  `"98XX": { op: "Airtel", circle: "Delhi" },`
- **Naam/pata wala feature kabhi mat add karna** — illegal hai + ban hoga.

## Files

- `index.html` — UI + Telegram SDK + lookup logic + ad slot
- `series.js` — series database (sample)
