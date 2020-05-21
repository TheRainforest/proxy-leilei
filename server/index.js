const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;
const apiItemsURL = process.env.apiItemsURL || 'http://localhost:3001';
const itemsURL = process.env.itemsURL || 'http://localhost:3002';
const relatedProdURL = process.env.relatedProdURL || 'http://localhost:3003';
const reviewsURL = process.env.reviewsURL || 'http://localhost:3004';

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
  console.log(`Proxy server hosted at http://localhost:${port}`);
});
