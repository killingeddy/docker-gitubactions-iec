const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Atividade Integração e Entrega Contínua - Eddie Medrado - FATEC - 2024');
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
