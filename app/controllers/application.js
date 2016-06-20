import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  sessionAccount: Ember.inject.service('session-account'),
  ajax: Ember.inject.service(),
  init: function() {
    //this._super;
    this.get('ajax').request('visualization').then((response)=>{
      debugger;
      // setFormattedTime(response){
      //   for (var obj in response){
      //     var t = obj.time;
      //     obj.time = new Date(t);
      //   };
      // };
      this.set('timeSeriesData', response);
    });
  }
});
