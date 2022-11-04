const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 8000;
const multer = require('multer') // multer for upload images



// routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const catRoute = require("./routes/categories")





//////////////
dotenv.config();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(console.log('Connected to MongoDB'))
.catch(err => console.log(err));


// upload images 

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{ //cb : callbaCk function it take car of our errors
        cb(null, "images")    // save img in folder images 
    },
    filename:(req, file, cb)=>{ // send this img to our react application (client)
        cb(null, req.body.name)
    }
});

const upload = multer({storage:storage});
app.post('/api/upload', upload.single('file'), (req,res)=>{
    res.status(200).json('file has been uploaded');
})


//routes
    app.use("/api/auth", authRoute);
    app.use("/api/users", userRoute);
    app.use("/api/posts", postRoute);
    app.use("/api/categories", catRoute);

app.listen(PORT, ()=>{
    console.log('Backend is running in: '+ PORT)
})

