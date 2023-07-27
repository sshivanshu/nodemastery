const dotenv = require('dotenv')
dotenv.config({
  path: "./config/config.env",
  });
const express = require('express');
const productRouter = require('./routes/product.js');
const userRouter = require('./routes/user.js');
const cors=require('cors');
const server = express();
const path = require('path');

//db
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerse');
  console.log('process.env.MONGO_URL');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// bodyParser Middleware iske bina read nhi krega req.body
server.use(cors());
server.use(express.json());
server.use(express.static(process.env.PUB_DIR))
server.use('/product', productRouter.router); // Use the productRouter here
server.use('/user', userRouter.router);
// server.use('*',(req,res)=>{
//   res.sendFile(path.resolve(__dirname,'build','index.html'))
// })
// Define other middleware or routes if needed

server.get('/', (req, res) => {
  res.send('hello world');
});

server.listen(process.env.PORT, () => {
  console.log('Listening on port');
});
//