import mongoose from 'mongoose'

const listQuotesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 15
        }
    }
)

export const ListQuotes = mongoose.model('listQuotes', listQuotesSchema, 'listQuotes');