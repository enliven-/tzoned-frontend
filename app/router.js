import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('timezones', function() {
    this.route('new');
    this.route('show', {path: '/show/:timezone_id'});
    this.route('edit', {path: '/edit/:timezone_id'});
  });

  this.resource('users', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:user_id'});
  });

  this.route('login');

  this.route('signup');

  this.route('dashboard');

});

export default Router;
