import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {

    updateUser(id) {
      var self = this;
      var email = this.get('model.email');
      var role  = this.get('model.role');

      this.store.findRecord('user', id).then(function(user) {

        // update the user
        user.set('email', email);
        user.set('role', role);

        // save on the server
        user.save().then(() => {
          // clear fields
          self.setProperties({email: ''});

          // redirect to index
          self.transitionToRoute('users');

        }, (err) => {
          // save on server failed.
          alert('Validations failed on server. Please try again.');

        }).catch(() => {

        })

      });
    }
    
  }
});
