import mongoose from "mongoose"

export const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    publishedYear:{
        type:Number,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    pages:{
        type:Number
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

const BookModel = mongoose.model('books',bookSchema)
export default BookModel