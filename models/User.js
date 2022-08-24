const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  }
});

userSchema.virtual('fullName')
  .get(function () {
    return `${this.first} ${this.last}`;
  })
  .set(function (val) {
    const split = val.trim().split(' ');
    this.set({ first: split[0], last: split[1] });
  });

const user = model('user', userSchema);

// user.deleteMany({}).then(() => user.insertMany([
//   {
//     first: 'JD',
//     last: 'Tadlock'
//   },
//   {
//     first: 'Sarah',
//     last: 'Tadlock'
//   }
// ])).then(() => console.log('inserted'))

module.exports = user;