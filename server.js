const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/cryptocurrencies', async (req, res) => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});