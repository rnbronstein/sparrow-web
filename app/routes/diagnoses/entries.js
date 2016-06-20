import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var diagnosis = this.modelFor('diagnoses.diagnosis');
    return this.store.findAll('entry', { diagnosis: diagnosis });
  }
});
