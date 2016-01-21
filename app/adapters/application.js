import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://tzoned-api.dev/users/3',

  shouldReloadAll(store, snapshot) { return true; },

  shouldReloadRecord(store, snapshot) { return true; }

});