import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('timezones', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:timezone_id'});
  });
});

export default Router;
