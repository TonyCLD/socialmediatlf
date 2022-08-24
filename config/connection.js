const mongoose = require('mongoose');
const is_production = process.env.NODE_ENV;

// Wrap Mongoose around local connection to MongoDB
const url = is_production ? 'mongodb+srv://tonylf:password12345@cluster0.6780fgh.mongodb.net/?retryWrites=true&w=majority' : 'mongodb://localhost:27017/mongoose_playground';

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;