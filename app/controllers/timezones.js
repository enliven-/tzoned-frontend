import Ember from 'ember';

export default Ember.Controller.extend({

  actions : {
    deleteTimezone(id) {
      var self = this;
      this.store.findRecord('timezone', id).then(function(timezone) {
        timezone.deleteRecord();
        timezone.save();
        self.transitionToRoute('timezones');
      })
    }
  }
});
