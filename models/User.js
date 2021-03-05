const mongoose = require('mongoose');
const Schema = moongoose.Schema;

const productSchema = moongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //빈 간격 제거
        unique: 1 //겹치는게 없게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },    
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //user Schema를 model로 감싸줌

module.exports = { User } //user를 밖에서도 쓸수 있게 해줌