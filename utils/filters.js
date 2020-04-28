const capitalize = require('lodash.capitalize');

const ruDateConverter = (value) => (
  capitalize(value.toLocaleString('ru', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
  }).replace(' г.', ''))
);

module.exports = { ruDateConverter };
