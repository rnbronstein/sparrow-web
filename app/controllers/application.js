import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account'),
  ajax: Ember.inject.service(),

  init: function() {
    // this._super;
    //the next line is where it breaks because it isn't authorized
    this.get('ajax').request('visualization').then((response)=>{
      console.log(response);
      this.set('timeSeriesData', response);
    });
  }
});
