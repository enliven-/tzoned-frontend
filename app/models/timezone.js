import DS from 'ember-data';

export default DS.Model.extend({
  name  : DS.attr('string'),
  abbr  : DS.attr('string'),
  city  : DS.attr('string'),
  gmt_difference: DS.attr('number'),
  user  : DS.belongsTo('user')
});
