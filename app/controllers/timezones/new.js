import Ember from 'ember';
import TimezoneValidations from 'tzoned/mixins/validations/timezone';

export default Ember.Controller.extend({
  
  actions : {

    addTimezone() {
      var name = this.get('name');
      var abbr = this.get('abbr');
      var gmt_difference = this.get('gmt_difference');

      // run validations
      // this.validate().then(() => {

        // create new timezone in app
        var newTimezone = this.store.createRecord('timezone', {
          name : name,
          abbr : abbr,
          gmt_difference : gmt_difference
        });

        // save on server
        newTimezone.save();

        // clear fields
        this.setProperties({name: '', abbr: '', gmt_difference: ''});

        // redirect to index
        this.transitionToRoute('timezones');

      // }).catch(() => {
      //   console.log('errror!');
      // });

    }
  }
});
