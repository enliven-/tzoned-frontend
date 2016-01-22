import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://tzoned-api.dev',

  headers: { 'Authorization' : 'ZTwgi5xJz_jLLPCUNQDt' },

  // namespace : Ember.computed(function() {
  //   return '';
  // }).volatile(),

  shouldReloadAll(store, snapshot) { return true; },

  shouldReloadRecord(store, snapshot) { return true; }

});