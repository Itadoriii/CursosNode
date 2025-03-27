const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'src')));

//rutas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'home.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'login.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'register.html'));
});
app.get('/curso', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso.html'));
});
app.get('/curso2', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso2.html'));
});

app.get('/curso3', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso3.html'));
});

app.get('/curso4', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso4.html'));
});

app.get('/curso5', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso5.html'));
});

app.get('/curso6', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso6.html'));
});

app.get('/curso7', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'curso7.html'));
});
app.get('/administracion', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'administracion.html'));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
