import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import Ember from 'ember';


export default ActiveModelAdapter.extend(DataAdapterMixin, {
  session: Ember.inject.service('session'),

  // host: 'http://tzoned-api.dev',
  host: 'http://localhost:3000',

  headers: Ember.computed(function() {
    var token = this.get('session.data.authenticated.user.auth_token');
    return { 'Authorization' : token };
  }).volatile(),

  namespace: Ember.computed(function() { 
    var id = this.get('session.data.authenticated.user.id');
    return 'users/' + id;
  }),

  authorizer: 'authorizer:devise',

  shouldReloadAll() { return true; },

  shouldReloadRecord() { return true; }

});