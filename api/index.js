import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import UserRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config()


mongoose.connect(process.env.MONGO)
    .then(
        () => console.log('connected')
    )
    .catch((err) => console.log(err)
    )

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

app.listen(3000, () => {
    console.log('server is running on port 3000!!');

})

app.use('/api/user/', UserRoutes)
app.use('/api/auth/', authRoutes)


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})