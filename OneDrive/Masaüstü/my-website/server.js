const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Statik dosyaları sun

// Ana Sayfa
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Son Depremler Sayfası
app.get('/son-depremler', (req, res) => {
    res.sendFile(__dirname + '/public/son-depremler.html');
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});

// Güvenli Bölge Sayfası
app.get('/guvenli-bolge', (req, res) => {
    res.sendFile(__dirname + '/public/guvenli-bolge.html');
});

// Bilgi Köşesi Sayfası
app.get('/bilgi-kosesi', (req, res) => {
    res.sendFile(__dirname + '/public/bilgi-kosesi.html');
});
