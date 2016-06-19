import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users', function(){
    this.route('user', { path: ':user_id'});
  });
  this.route('login');
  this.route('diagnoses', function(){
    this.route('diagnosis', { path: ':diagnosis_id'}, function(){
      this.route('entries', function(){
        this.route('new');
        this.route('index');
      });
    });
  });
});

export default Router;
