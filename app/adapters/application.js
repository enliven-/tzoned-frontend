import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: 'http://tzoned-api.dev',

  // headers: { 'Authorization' : 'ZTwgi5xJz_jLLPCUNQDt' },

  // namespace : Ember.computed(function() {
  //   return '';
  // }).volatile(),

  authorizer: 'authorizer:devise',

  shouldReloadAll(store, snapshot) { return true; },

  shouldReloadRecord(store, snapshot) { return true; }

});