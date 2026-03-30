const express = require('express');
const cors = require('cors');
const app = express();
const employesRoutes = require('./routes/employes');

app.use(cors());
app.use(cors({
  origin: 'http://localhost:8081', // Remplacez par l'URL de votre frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use('/employes', employesRoutes);

//app.listen(3000, () => console.log('Server running on port 3000'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});