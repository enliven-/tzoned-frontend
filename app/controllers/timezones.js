import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    deleteTimezone(id) {
      this.store.findRecord('timezone', id).then(function(timezone) {
        timezone.deleteRecord();
        timezone.save();
      })
    }
  }
});
