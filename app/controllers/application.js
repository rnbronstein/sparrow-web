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
      // // setFormattedTime(response){
      //   for (var obj in response){
      //     var t = obj.time;
      //     obj.time = new Date(t);
      //   };
      // };
      this.set('timeSeriesData', result);
    });
  }
});
