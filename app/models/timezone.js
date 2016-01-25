import DS from 'ember-data';

export default DS.Model.extend({
  name  : DS.attr('string'),
  abbr  : DS.attr('string'),
  city  : DS.attr('string'),
  gmt_difference: DS.attr('number'),
  user  : DS.belongsTo('user'),

  current_time: function() {
    var time = new Date();
    var offset = this.get('gmt_difference');
    time.setSeconds(time.getSeconds() + offset);
    return moment(time).format('hh:mm:ss');
  }.property('clock.second')

});
