import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    authenticate() {
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:devise', identification, password).then(() => {
        // alert('Success! Click the top link!');
      }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      })
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});