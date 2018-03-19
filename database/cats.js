const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
  'age': Number,
  'hoomaness': String,
  'name': String
});

const Cat = mongoose.model('Cat', catSchema);

/*
 * Add a new cat to the DB
 * const arwen = new Cat({
 *   'age': 6,
 *   'hoomaness': 'Fully Hooman',
 *   'name': 'Arwen'
 * });
 */

/*
 * Arwen.save((err, cat) => {
 *   if (err) {
 *     console.log('Something went wrong');
 *   } else {
 *     console.log('Just saved a cat to the DB:');
 *     console.log(cat);
 *   }
 * });
 */
Cat.create(
  {
    'age': 16,
    'hoomaness': 'Fully Hooman',
    'name': 'Morle'
  },
  (err, cat) => {
    if (err) {
      console.log(err);
    } else {
      console.log(cat);
    }
  }
);
// Retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
  if (err) {
    console.log('OH NO!!!');
    console.log(err);
  } else {
    console.log('All the Cats.....');
    console.log(cats);
  }
});
