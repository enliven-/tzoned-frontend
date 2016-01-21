import Ember from 'ember';
import TimezoneValidations from 'tzoned/mixins/validations/timezone';

export default Ember.Controller.extend(TimezoneValidations, {

  actions : {

    updateTimezone(id) {
      var self = this;

      var name = this.get('model.name');
      var abbr = this.get('model.abbr');
      var gmt_difference = this.get('model.gmt_difference');

      // run validations
      this.validate().then(() => {
        // find the record
        this.store.findRecord('timezone', id).then(function(timezone) {

          // update the timezone
          timezone.set('name', name);
          timezone.set('abbr', abbr);
          timezone.set('gmt_difference', gmt_difference);

          // save on the server
          timezone.save();

          // clear fields
          self.setProperties({name: '', abbr: '', gmt_difference: ''});

          // redirect to index
          self.transitionToRoute('timezones');
        });

      }).catch(() => {
        self.setProperties({name: '', abbr: '', gmt_difference: ''});
        console.log('error!');
      });
    }
    
  }

});
