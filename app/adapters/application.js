import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  host: 'http://tzoned-api.dev/users/3',

  shouldReloadAll() { return true; },

  shouldBackgroundReloadRecord() { return true; }
});