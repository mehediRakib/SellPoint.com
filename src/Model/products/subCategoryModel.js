const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    subcategoryName: { type: String, required: true },
    subcategoryImg: { type: String, required: true },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true } // Ensuring categoryID is required
}, {
    timestamps: true,
    versionKey: false
});

const subcategoryModel = mongoose.model('subcategories', DataSchema);

module.exports = subcategoryModel;
