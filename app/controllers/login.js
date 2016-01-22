import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  // session: Ember.inject.service('session'),
  session: service('session'),

  actions: {
    authenticate() {
      console.log('here')
      let { identification, password } = this.getProperties('identification', 'password');
      console.log(identification);
      console.log(password);
      this.get('session').authenticate('authenticator:devise', identification, password).then(() => {
        // alert('Success! Click the top link!');
        console.log( this.get('session') );
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      })
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});