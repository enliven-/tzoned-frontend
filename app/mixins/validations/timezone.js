import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Mixin.create(EmberValidations, {

  validations : {
    'model.name': {
      presence: true,
      length: { minimum: 3 }
    }
  }


});
