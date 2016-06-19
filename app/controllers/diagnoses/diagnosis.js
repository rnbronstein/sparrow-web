import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  init: function() {
    this._super;
    this.get('ajax')
      .request('diagnoses').then((data)=>{
        this.set('timeSeriesData', data);
    })
  }
});
