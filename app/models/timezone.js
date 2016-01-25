import DS from 'ember-data';
// import moment from 'moment';

export default DS.Model.extend({
  name  : DS.attr('string'),
  abbr  : DS.attr('string'),
  city  : DS.attr('string'),
  gmt_difference: DS.attr('number'),
  user  : DS.belongsTo('user'),

  current_time: function() {
    var offset = this.get('gmt_difference');
    var time = new Date();
    time.setSeconds(time.getSeconds() + offset);
    return time.toUTCString().replace(' GMT', '');
  }.property('gmt_difference', 'clock.seconds'),

  sign: function() {
    var offset = this.get('gmt_difference');
    if (offset >= 0) {
      return '+'
    } else if (offset < 0) {
      return '-'
    } else {
      return 'x'
    }
  }.property('gmt_difference', 'clock.seconds'),

  hours: function() {
    var offset = this.get('gmt_difference');
    if (this.get('sign')=='-') { offset = -1 * offset; }
    return moment.duration(offset, "seconds").hours();
  }.property('gmt_difference', 'clock.seconds'),

  minutes: function() {
    var offset = this.get('gmt_difference');
    if (this.get('sign')=='-') { offset = -1 * offset; }
    return moment.duration(offset, "seconds").minutes();
  }.property('gmt_difference', 'clock.seconds'),


});
