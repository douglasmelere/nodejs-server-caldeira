const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 9000;

const cors = require('cors');
app.use(cors());


app.get('/dados-caldeira', async (req, res) => {
  try {
    const url = 'https://web-production-b3c18.up.railway.app/dados-caldeira';
    const response = await axios.get(url);
    res.json(response.data);
} catch (error) {
    console.error('Erro ao obter dados:', error);
    res.status(500).send('Erro ao obter dados');
}
})

app.listen(PORT, () => {
  console.log(`Servidor rodando no socket: http://localhost:${PORT}`)
})
