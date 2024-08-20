const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
name:{
  type:String,
  require:true,
},
age:{
  type:Number,
  require:true,

},
group:{
  type: String,
  require:true,
},
},
{
  timestamps: true, 
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
