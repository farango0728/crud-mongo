  
const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'courses' }],
    updatedBy: { type: Schema.Types.ObjectId },
  },
  { timestamps: true }
);



const model = mongoose.model('students', schema);
module.exports = model;