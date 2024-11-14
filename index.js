
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');
const PORT = process.env.PORT || 8081;


// logs info about request
app.use(morgan('tiny')); //tiny, combined, common, dev, short, tiny
// converts JSON  to  JS Object in POST, PUT, PATCH request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', userRouter);
app.use('/api', postRouter);

app.listen(PORT, () => console.log(`server started on post ${PORT}`));