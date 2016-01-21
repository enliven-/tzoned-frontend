import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {

  validations : {
    'model.name': {
      presence: true,
      length: { minimum: 3 }
    },
    'model.abbr': {
      presence: true,
      length: { minimum: 2 },
    },
    'model.gmt_difference': {
      presence: true,
      numericality: true
    }
  }


});
