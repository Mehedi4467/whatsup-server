//external import
const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');

//internal import
const {notFoundHandelar,errorHandler} =require('./middleware/common/errorHandaler');
const loginRouter = require('./Router/loginRouter');
const userRouter =require('./Router/userRouter');
const inboxRouter = require('./Router/inboxRouter');

const app =express();
dotenv.config();


// database connection 
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

  // request parser
  app.use(express.json());

  //parse-cookies
  app.use(cookieParser(process.env.COOKIE_SECRET));

  //routung setup
app.use('/',loginRouter);
app.use('/user',userRouter);
app.use('/inbox',inboxRouter);

  // 404 not found handelar
 app.use(notFoundHandelar);
  //common error handdaling
  app.use(errorHandler);



  app.listen(process.env.PORT,()=>{
    console.log(`'whatsup server is running ${process.env.PORT}`)
  });
