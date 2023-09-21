const mongoose = require('mongoose');

const logsSchema = new mongoose.Schema({
  title: String,
  entry: String,
  shipIsBroken: { type: Boolean, default: true },
}, { timestamps: true });

const Log = mongoose.model('Log', logsSchema);

module.exports = Log;
