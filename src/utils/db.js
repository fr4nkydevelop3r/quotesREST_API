import mongoose from 'mongoose'

export const connect = () => {
    return mongoose.connect(process.env.DATABASE_URL,  { useNewUrlParser: true });
}