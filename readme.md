# Heroku Buildpack

| BuildPack | LINK |
|--------|--------|
| **FFMPEG** |[here](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| **IMAGEMAGICK** | [here](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |
| **Node.js [salin]**     | heroku/nodejs|

⚠️

## CARA INSTALL DI TERMUX
```bash
> termux-setup-storage
> pkg update && pkg upgrade
> pkg install git
> pkg install nodejs
> pkg install bash
> pkg install ffmpeg
> pkg install libwebp
> git clone https://github.com/BOTCAHX/R-TXZY-VR
> cd R-TXZY-VR
> npm i
> node run.js
# Untuk Sdcard (File Sudah Di Download)
> cd /sdcard
> cp -r R-TXZY-VR $HOME
> cd R-TXZY-VR
> npm i
> node run.js
```

## THANKS TO 
 [`Baileys`](https://github.com/adiwajshing/Baileys)

 [`AlyaXzy`](https://wa.me/6289505165400)

 [`BOTCAHX`](https://wa.me/6282221792667)

# Hargai Kami Dengan Menambahkan Kredit ( Wm ) 


### BOTCAHX stat
![Ra Github stat](https://github-readme-stats.vercel.app/api?username=BOTCAHX&theme=midnight-purple&show_icons=true) 

![Ra Github troppy](https://github-profile-trophy.vercel.app/?username=BOTCAHX&theme=monokai)

![Ra Github languages](https://github-readme-stats.vercel.app/api/top-langs/?username=BOTCAHX&theme=tokyonight)


## Arguments `node . [--options] [<session name>]`

#### Contoh: `node . --self --restrict --autoread`

### `--self`

Aktifkan mode self (Mengabaikan yang lain)

### `--prefix <prefixes>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <json-server-url>`

Gunakan db eksternal alih-alih db lokal, 
Contoh Server `https://json-server.tioclkp.repl.co/`
Code: `https://repl.it/@addserver/json-server`

`node . --db 'https://json-server.tioclkp.repl.co/'`

Server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json

{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--restrict`

Mengaktifkan plugin terbatas (yang dapat menyebabkan nomor Anda **diblokir** jika digunakan terlalu sering)

* Administrasi Grup `add, kick, promote, demote`

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--autoread`

Jika diaktifkan, semua pesan masuk akan ditandai sebagai telah dibaca

### `--nyimak`

Tidak ada bot, cukup cetak pesan yang diterima dan tambahkan pengguna ke database

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```

---------
