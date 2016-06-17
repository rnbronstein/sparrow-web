import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function(){
    this.route('user', { path: ':user_id'}, function(){
      this.route('entries', function(){
        this.route('new');
      });
    });
  });
});

export default Router;
