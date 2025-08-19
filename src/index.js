const app = require('./app');
const dbConnect = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();
dbConnect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});