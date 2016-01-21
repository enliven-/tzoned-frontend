import Ember from 'ember';
import ValidationsTimezoneMixin from '../../../mixins/validations/timezone';
import { module, test } from 'qunit';

module('Unit | Mixin | validations/timezone');

// Replace this with your real tests.
test('it works', function(assert) {
  let ValidationsTimezoneObject = Ember.Object.extend(ValidationsTimezoneMixin);
  let subject = ValidationsTimezoneObject.create();
  assert.ok(subject);
});
