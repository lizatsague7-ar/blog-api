const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const articleRoutes = require('./routes/articles');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/articles', articleRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/test', (req, res) => {
  res.json({ message: 'Le serveur fonctionne' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
  console.log(`Documentation Swagger : http://localhost:${PORT}/api-docs`);
});