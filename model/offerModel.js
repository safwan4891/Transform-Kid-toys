const mongoose = require('mongoose')

const offerSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    discountOn: {
        type: String,
        enum: ["product", "category"],
        required: true,
    },

    discountType: {
        type: String,
        enum: ["percentage", "fixedAmount"],
        required: true,
      },

    discountValue: {
        type: Number,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    expireOn: {
        type: String,
        required: true,
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    discountedProduct: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required:false
    },

    discountedCategory: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required:false
    },

   
})

const Offer=mongoose.model('Offer',offerSchema)

module.exports=Offer;