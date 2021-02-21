const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String
    },
    vehicleNumber:{
        type:String
    },
    location:{
        type:String
    },
  
    Date:{
        type:Date,
        default:Date.now
    }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('User', schema);