const mongoose = require('mongoose')

const SymbolSchema = new mongoose.Schema({
  name: String,
});

const symbol = mongoose.model("symbol", SymbolSchema);
module.exports =  symbol;