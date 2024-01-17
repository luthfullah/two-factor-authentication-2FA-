const express=require('express');
const cors =require('cors');
const cookieParser = require('cookie-parser');
const userRoute= require('./routes/userRoute')

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 5001;
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send("getting ")
})




// await server.start()
//  server.applyMiddleware({ app, path: '/api/product/search' });


//signin route
app.use('/api/signin', userRoute)




  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });



