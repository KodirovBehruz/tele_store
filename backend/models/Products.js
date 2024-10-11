import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: null,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', ProductsSchema);

export default Product;
