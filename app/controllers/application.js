import Ember from 'ember';

export default Ember.Controller.extend({
  
  session: Ember.inject.service('session'),


  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  },

  isManager() {
    return this.get('session.data.authenticated.user.role') == 'manager';
  }
});
