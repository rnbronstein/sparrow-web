import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  init: function() {
    let user = this.modelFor('users.user')
    this._super;
    this.get('ajax')
      .request('user/diagnoses').then((data)=>{
        this.set('timeSeriesData', data);
    })
  }
});
