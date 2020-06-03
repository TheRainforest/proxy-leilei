require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const server = process.env.SERVER;
const port = process.env.PORT;
const apiItemsURL = process.env.API_ITEMS_URL;
const itemsURL = process.env.ITEMS_URL;
const relatedProdURL = process.env.RELATEDPROD_URL;
const reviewsURL = process.env.REVIEWS_URL || 'http://localhost:3004';


app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/items/:id', createProxyMiddleware({
  target: apiItemsURL,
  changeOrigin: true,
}));

app.use('/items/:id', createProxyMiddleware({
  target: itemsURL,
  changeOrigin: true,
}));

app.use('/api/related_products/:id', createProxyMiddleware({
  target: relatedProdURL,
  changeOrigin: true,
}));

app.use('/api/allreviews/:id', createProxyMiddleware({
  target: reviewsURL,
  changeOrigin: true,
}));

app.use('/api/allreviews/review/:id', createProxyMiddleware({
  target: reviewsURL,
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`Proxy server hosted at http://${server}:${port}`);
});
