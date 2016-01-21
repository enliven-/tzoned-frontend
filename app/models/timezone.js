import DS from 'ember-data';

export default DS.Model.extend({
  name  : DS.attr('string'),
  abbr  : DS.attr('string'),
  gmt_difference: DS.attr('string')
});
