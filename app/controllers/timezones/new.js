import Ember from 'ember';

export default Ember.Controller.extend({
  
  actions : {

    addTimezone() {
      var name = this.get('name');
      var abbr = this.get('abbr');
      var gmt_difference = this.get('gmt_difference');

      // create new timezone in memory
      var newTimezone = this.store.createRecord('timezone', {
        name : name,
        abbr : abbr,
        gmt_difference : gmt_difference
      });

      console.log(newTimezone);
    }
  }
});
