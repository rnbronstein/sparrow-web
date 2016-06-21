import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account'),
  ajax: Ember.inject.service(),
  init: function() {
    //this._super;
    let result = []
    this.get('ajax').request('visualization').then((response)=>{
    response.forEach(function(diags){
      diags.forEach(function(diag){
        diag.time = (new Date(diag.date));
        result.push(diag)
      })
    })
    this.set('timeSeriesData', result);
    });
  },
  actions: {
    authenticate: function(credentials) {
      var authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
