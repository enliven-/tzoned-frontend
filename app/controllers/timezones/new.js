import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    addTimezone() {
      var name = this.get('name');
      var abbr = this.get('abbr');
      var gmt_difference = this.get('gmt_difference');
      console.log(name);
      console.log(abbr);
      console.log(gmt_difference);
    }
  }
});
