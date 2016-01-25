import Ember from 'ember';
import TimezoneValidations from 'tzoned/mixins/validations/timezone';

export default Ember.Controller.extend({
  
  actions : {

    addTimezone() {
      var self = this;

      var name = this.get('name');
      var abbr = this.get('abbr');
      var city = this.get('city');
      var gmt_difference;

      var sign      = this.get('sign');
      var hours     = this.get('hours');
      var minutes  = this.get('minutes');

      if(sign=='+') {
        gmt_difference = hours*60*60 + minutes*60;
      } else if (sign=='-') {
        gmt_difference = -hours*60*60 + minutes*60;
      } else {
        alert('Validation failed on client. Please try again');
        return false;
      }

      // create new timezone in app
      var newTimezone = this.store.createRecord('timezone', {
        name : name,
        abbr : abbr,
        city : city,
        gmt_difference : gmt_difference
      });

      // save on server
      newTimezone.save().then(() =>{

        // succcess
        self.transitionToRoute('timezones');
      
      }, ()=> {
        
        // failure
        alert('Validation failed on server. Please try again.');
        newTimezone.deleteRecord();


      }).catch(() => {

      }).finally(() => {
        
        self.setProperties({name: '', abbr: '', city: '', sign: '', hours: '', minutes: ''});
        self.transitionToRoute('timezones');

      });

    }
  }
});
