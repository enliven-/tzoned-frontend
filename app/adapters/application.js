import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://tzoned-api.dev',

  headers: { 'Authorization' : 'Ly9ojjBsPqj5skdHaMU8' },

  namespace : Ember.computed(function() {
    return 'users/1';
  }).volatile(),

  shouldReloadAll(store, snapshot) { return true; },

  shouldReloadRecord(store, snapshot) { return true; }

});