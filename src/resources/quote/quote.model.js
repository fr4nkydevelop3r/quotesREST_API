import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
    {
        author: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        description: {
            type: String,
            required: true,
            trim: true,
            maxlength: 350
        },
        list: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'listQuotes',
            required: true
        }

    }
)

export const Quote = mongoose.model('quote', quoteSchema, 'quote');