const { Schema, model } = require("mongoose");

const suscribersSchema = new Schema({
    name:{
        type: String
    },
    image:{
        type: String
    },
    state:{
        type: String,
        enum:["accepted", "refused"]
    }
},{
    timestamps: true
})

module.exports= model("suscribers", suscribersSchema)
