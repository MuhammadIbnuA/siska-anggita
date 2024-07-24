const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;

// Middleware untuk menangani JSON dan form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menyajikan file statis dari direktori frontend
app.use(express.static(path.join(__dirname, 'frontend')));

// Menghubungkan ke database (sesuaikan dengan konfigurasi Anda)
// const db = require('./config/database');

// Route API
const assignmentsRouter = require('./routes/assignments');
const authRouter = require('./routes/auth');
const materialsRouter = require('./routes/materials');

app.use('/api/assignments', assignmentsRouter);
app.use('/api/auth', authRouter);
app.use('/api/materials', materialsRouter);

// Menangani semua route lainnya dengan file index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
