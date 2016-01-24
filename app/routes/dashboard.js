import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },

  renderTemplate() {
    var isRegular, isManager, isAdmin;
    var role = this.get('session.data.authenticated.user.role');
    if (role) {
      role = role.toLowerCase();
      isRegular = role == 'regular';
      isManager = role == 'manager';
      isAdmin   = role == 'admin';
    }

    this.render();

    if(isRegular) {
      this.render("timezones-nav", { outlet: "timezones-nav", into: "dashboard" });
    };

    if(isManager) {
      this.render("users-nav", { outlet: "users-nav", into: "dashboard" });
    };

    if(isAdmin) {
      this.render("timezones-nav", { outlet: "timezones-nav", into: "dashboard" });
      this.render("users-nav", { outlet: "users-nav", into: "dashboard" });
    }
  }
  
});