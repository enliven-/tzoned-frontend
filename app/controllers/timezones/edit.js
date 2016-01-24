import Ember from 'ember';
import TimezoneValidations from 'tzoned/mixins/validations/timezone';

export default Ember.Controller.extend(TimezoneValidations, {

  actions : {

    updateTimezone(id) {
      var self = this;

      var name = this.get('model.name');
      var abbr = this.get('model.abbr');
      var gmt_difference = this.get('model.gmt_difference');

      // // run validations
      this.validate().then(() => {
        // find the record
        this.store.findRecord('timezone', id).then(function(timezone) {

          // update the timezone
          timezone.set('name', name);
          timezone.set('abbr', abbr);
          timezone.set('gmt_difference', gmt_difference);

          // save on the server
          timezone.save().then(() => { // save on server successfull
            // clear fields
            self.setProperties({name: '', abbr: '', gmt_difference: ''});

            // redirect to index
            self.transitionToRoute('timezones');

          }, ()=> { // save failed on server

            alert('Validation failed on server. Please try again.');
            self.model.rollbackAttributes();

          });

        });

      }, () => { // didnt validate on client itself
        
        alert('Validation failed on client side. Please try again.');
        self.model.rollbackAttributes();

      }).catch(() => { // handle any exceptions

        console.log('exception in timezones : edit : updateTimezone ');

      });
    }
    
  }

});
