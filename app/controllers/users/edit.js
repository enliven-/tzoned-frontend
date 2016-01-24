import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {

    updateUser(id) {
      var self = this;
      var email = this.get('model.email');
      var role  = this.get('model.role');
      var password = this.get('password');

      this.store.findRecord('user', id).then(function(user) {

        // update the user
        user.set('email', email);
        user.set('role', role);
        if (password && password.length>0) {
          user.set('password', password);
        }

        // save on the server
        user.save().then(() => {

          // clear password locally
          user.set('password', undefined);

          // clear fields
          self.setProperties({email: ''});
          self.setProperties({role: ''});
          self.setProperties({password: ''});



          // redirect to index
          self.transitionToRoute('users');

        }, (err) => {
          // save on server failed.
          alert('Validations failed on server. Please try again.');
          self.model.rollbackAttributes();

        }).catch(() => {


        }).finally(() => {
          // unload user records for safety.
          console.log('here!')
          self.store.unloadAll('user');
          self.store.findAll('user');
        })

      });
    }
    
  }
});
