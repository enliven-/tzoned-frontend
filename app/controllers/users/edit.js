import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {

    updateUser(id) {
      var self = this;

      var email = this.get('model.email');

      this.store.findRecord('user', id).then(function(user) {

        // update the user
        user.set('email', email);

        // save on the server
        user.save();

        // clear fields
        self.setProperties({email: ''});

        // redirect to index
        self.transitionToRoute('users');
      });
    }
    
  }
});
