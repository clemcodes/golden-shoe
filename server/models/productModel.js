import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
  name: {type: String, required: true},
  rating: {type: Number, required: true},
  comment: {type: String, required: true},

}, {
  timestamps:true
})

const productSchema = mongoose.Schema({
  // which user/admin created which product
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  image1: {
    type: String,
    required: true
  },
  image2: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  countInStock: {
    type: Number,
    required: true,
    default:0
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default:0
  },
  numReviews: {
    type: Number,
    required: true
  },
  size: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product