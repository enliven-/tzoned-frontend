import Ember from 'ember';

export default Ember.Controller.extend({

  live_time: Ember.computed('clock.second', function () {
    var offset = this.get('model.gmt_difference');
    var time = new Date();
    time.setSeconds(time.getSeconds() + offset);
    return moment(time).utc().format('hh:mm:ss A');
  }),

});
