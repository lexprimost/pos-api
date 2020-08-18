import { model, Schema, Types } from "mongoose";


const attachmentSchema = new Schema({
    originalName: {
        type: String,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    size: Number,
    _version: {
        type: Number,
        default: 1.0
    }
}, {
    timestamps: true,
    toObject: {
        transform: (doc, ret, options) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});


export default model('Attachment', attachmentSchema)