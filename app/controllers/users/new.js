import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {

    createUser() {
      var self = this;
      var email     = this.get('email');
      var role      = this.get('role');
      var password  = this.get('password');


      var newUser = this.store.createRecord('user', {
        email:    email,
        role:     role,
        password: password
      });

      newUser.save().then(() => {
        // success
        // clear fields
        this.setProperties({name: '', email: '', password: ''});

        // redirect to index
        this.transitionToRoute('users');
      }, ()=> {
        // failed
        alert('validations failed on server.')
      });

    }
    
  }
});
