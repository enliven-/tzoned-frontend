import Ember from 'ember';
import TimezoneValidations from 'tzoned/mixins/validations/timezone';

export default Ember.Controller.extend(TimezoneValidations, {

  actions : {

    updateTimezone(id) {
      var self = this;

      var name = this.get('model.name');
      var abbr = this.get('model.abbr');
      var city = this.get('model.city');
      var gmt_difference = this.get('model.gmt_difference');


      // find the record
      this.store.findRecord('timezone', id).then(function(timezone) {

        // update the timezone
        timezone.set('name', name);
        timezone.set('abbr', abbr);
        timezone.set('city', city);
        timezone.set('gmt_difference', gmt_difference);

        // save on the server
        timezone.save().then(() => { 

        }, ()=> { 

          // save failed on server
          alert('Validation failed on server. Please try again.');

        }).catch(() => { 
          // handle any exceptions
          console.log('Exception in timezones : edit : updateTimezone ');

        }).finally(() => {
          self.setProperties({name: '', abbr: '', city: '', gmt_difference: ''});
          self.store.unloadAll('timezone');
          self.store.findAll('timezone');
          self.transitionToRoute('timezones');
        });

      });

    }
    
  }

});
