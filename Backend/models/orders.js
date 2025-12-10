const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum : ['COD' , 'ONLINE']
    },
    status: {
        type: String,
        required: true,
        enum : ['PLACED' , 'SHIPPED' , 'DELIVERED' ],
        default : 'PLACED'
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    DeliveryInfo: {
        type: Object,
        required: true
    }
})

module.exports = mongoose.model('Order', orderSchema);