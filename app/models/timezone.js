import DS from 'ember-data';

export default DS.Model.extend({
  name  : DS.attr('string'),
  abbr  : DS.attr('string'),
  gmt_difference: DS.attr('number'),
  user_id       : DS.attr('string'),
  user_email    : DS.attr('string'),
  // user  : DS.belongsTo('user')
});
