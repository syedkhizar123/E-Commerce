const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({quiet: true});
const PORT = process.env.PORT || 3000;
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);
app.use("/api/cart" , cartRoutes);
app.use("/api/orders" , orderRoutes);
app.use("/api/products" , productRoutes);

// Connect to the database
connectDB();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
